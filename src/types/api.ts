export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

type Response = "False" | "True";

export interface OMDbList {
  Search: Movie[];
  totalResults: string;
  Response: Response;
  Error?: string;
}

export interface ErrorResponse {
  Response: "False";
  Error: string;
}
