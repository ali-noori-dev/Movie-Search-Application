import { useState } from "react";
import { useFetch } from "../hooks";
import { OMDbList } from "../types";
import { Autocomplete } from "./autocomplete";
import { MovieOption } from "./movieOption";

export function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const { data, loading, fetchData } = useFetch<OMDbList>();

  const fetchItems = () => fetchData({ endpoint: `s=${searchTerm}` });

  return (
    <Autocomplete
      placeholder="Search Movies"
      inputValue={searchTerm}
      onInputChange={setSearchTerm}
      options={data?.Search ?? []}
      fetchOptions={fetchItems}
      getOptionView={(option) => <MovieOption data={option} />}
      onSelectOption={(option) => {
        // setSearchTerm(option.Title);
        // handleSearch();
      }}
    />
  );
}
