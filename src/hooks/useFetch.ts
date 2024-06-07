import { useState } from "react";
import { toastService } from "../toast";
import { ErrorResponse } from "../types";

interface FetchOptions {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
}

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  fetchData: (request: FetchRequest) => void;
}

interface FetchRequest {
  endpoint: string;
  options?: FetchOptions;
}

const apiKey = import.meta.env.VITE_API_KEY;
const baseURL = import.meta.env.VITE_API_BASE_URL;

const isErrorResponse = (result): result is ErrorResponse =>
  result.Response === "False";

export function useFetch<T>(): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async ({ endpoint, options }: FetchRequest) => {
    setLoading(true);

    try {
      const response = await fetch(`${baseURL}?apikey=${apiKey}&${endpoint}`, {
        method: options?.method || "GET",
        headers: options?.headers,
        body: options?.body,
      });

      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const result: T = await response.json();

      if (isErrorResponse(result)) throw new Error(result.Error);
      else setData(result);
    } catch (err) {
      if (err instanceof Error) toastService.error(err.message);
      else toastService.error("An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, fetchData };
}
