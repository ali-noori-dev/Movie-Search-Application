import { OMDbResponse } from "../types";

const apiKey = import.meta.env.VITE_API_KEY;
const baseURL = import.meta.env.VITE_API_BASE_URL;

export async function searchMovies(title: string) {
  try {
    const response = await fetch(`${baseURL}?apikey=${apiKey}&s=${title}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: OMDbResponse = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error ?? "Unknown error");
    }

    return data.Search;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}
