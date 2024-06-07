import { useState } from "react";
import { useFetch } from "../hooks";
import { OMDbList } from "../types";
import { Autocomplete } from "./autocomplete";
import { MovieOption } from "./movieOption";

export function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const { data, loading, fetchData, resetData } = useFetch<OMDbList>();

  const fetchItems = () => {
    if (searchTerm) fetchData({ endpoint: `s=${searchTerm}` });
    else resetData();
  };

  return (
    <Autocomplete
      placeholder="Search Movies"
      inputValue={searchTerm}
      onInputChange={setSearchTerm}
      options={data?.Search ?? []}
      fetchOptions={fetchItems}
      getOptionView={(option) => <MovieOption data={option} />}
      loading={loading}
      onSelectOption={(option) => {
        // setSearchTerm(option.Title);
        // handleSearch();
      }}
    />
  );
}
