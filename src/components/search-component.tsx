import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const inputCn =
  "w-full h-12 focus:outline-primary rounded-xl py-3 pl-4 pr-10 leading-normal transition-colors duration-200 text-gray-600 placeholder-gray-500 border border-gray-300";

export function SearchComponent() {
  const [value, setValue] = useState("");

  return (
    <div className="relative w-1/2 m-auto">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search Movies"
        className={inputCn}
      />

      <span className="absolute top-1/2 -translate-y-1/2 right-4">
        <IoIosSearch />
      </span>
    </div>
  );
}
