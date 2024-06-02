import { useEffect, useState } from "react";
import { toastService } from "../toast";

interface AutocompleteProps<T> {
  placeholder: string;
  searchTerm: string;
  onSearchTermChange: (newTerm: string) => void;
  onSelectOption: (option: T) => void;
  getOptionView: (option: T) => React.ReactNode;
  fetchOptions: (term: string) => Promise<T[]>;
  endIcon?: JSX.Element;
}

const inputCn =
  "w-full h-12 focus:outline-primary rounded-xl py-3 pl-4 pr-10 leading-normal transition-colors duration-200 text-gray-600 placeholder-gray-500 border border-gray-300";

export function Autocomplete<T>({
  searchTerm,
  onSearchTermChange,
  onSelectOption,
  getOptionView,
  fetchOptions,
  endIcon,
  placeholder,
}: AutocompleteProps<T>) {
  const [options, setOptions] = useState<T[]>([]);

  // Trigger the fetchOptions API call when the search term changes
  useEffect(() => {
    const loadOptions = async () => {
      if (searchTerm) {
        try {
          const results = await fetchOptions(searchTerm);
          setOptions(results);
        } catch (error) {
          console.error("Failed to fetch options:", error);
          toastService.error("Failed to fetch options");
        }
      } else setOptions([]);
    };

    // Set a timeout of 700 ms before triggering the API call because we want to search only when the user has typed the whole search query
    const searchTimeout = setTimeout(loadOptions, 700);

    return () => clearTimeout(searchTimeout); // Cleanup timeout on unmount or searchTerm change
  }, [searchTerm, fetchOptions]);

  return (
    <div className="relative w-1/2 m-auto">
      <div className="relative">
        <input
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
          placeholder={placeholder}
          className={inputCn}
        />

        {endIcon && (
          <span className="absolute top-1/2 -translate-y-1/2 right-4">
            {endIcon}
          </span>
        )}
      </div>

      <ul className="absolute z-10 w-full bg-white shadow-lg rounded-b-xl max-h-[400px] overflow-auto">
        {options.map((option, index) => (
          <li
            key={index}
            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            onClick={() => {
              onSelectOption(option);
              setOptions([]);
            }}
          >
            {getOptionView(option)}
          </li>
        ))}
      </ul>
    </div>
  );
}
