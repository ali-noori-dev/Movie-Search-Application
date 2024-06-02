import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { searchMovies } from "../api";
import { toastService } from "../toast";
import { Movie } from "../types";
import { Autocomplete } from "./autocomplete";
import { MovieOption } from "./movieOption";

export function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const handleSearch = async () => {
    try {
      setIsFetching(true);
      const results = await searchMovies(searchTerm);
      setMovies(results);
    } catch (error) {
      toastService.error(error as string);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <Autocomplete
      placeholder="Search Movies"
      searchTerm={searchTerm}
      onSearchTermChange={setSearchTerm}
      fetchOptions={searchMovies}
      endIcon={<IoIosSearch />}
      getOptionView={(option) => <MovieOption data={option} />}
      onSelectOption={(option) => {
        setSearchTerm(option.Title);
        handleSearch();
      }}
    />
  );
}
