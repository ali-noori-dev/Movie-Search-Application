import { Movie } from "../types";

interface MovieOptionProps {
  data: Movie;
}

const detailCn = "text-gray-500 text-sm";

export function MovieOption({ data }: MovieOptionProps) {
  return (
    <div className="flex gap-3">
      <img src={data.Poster} alt="poster" className="h-20 w-auto" />
      <div>
        <h6>{data.Title}</h6>
        <div className={detailCn}>{data.Year}</div>
        <div className={detailCn}>{data.Type}</div>
      </div>
    </div>
  );
}
