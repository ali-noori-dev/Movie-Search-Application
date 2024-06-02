export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

type Response = "False" | "True";

export interface OMDbResponse {
  Search: Movie[];
  totalResults: string;
  Response: Response;
  Error?: string;
}
