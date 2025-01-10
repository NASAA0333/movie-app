"use client";

import { Movie } from "@/constants/types";
import Link from "next/link";

export const MovieCard = ({
  movie,
  detailLink,
}: {
  movie: Movie;
  detailLink?: string;
}) => {
  const imgPath = movie.poster_path ? movie?.poster_path : movie?.backdrop_path;
  return (
    <Link
      href={detailLink && detailLink !== "" ? detailLink : `movie/${movie.id}`}
    >
      <div className="rounded-lg bg-gray-100 dark:text-black">
        <img
          src={`https://image.tmdb.org/t/p/w500${imgPath}`}
          className="rounded-tr-lg rounded-tl-lg"
        />
        <div className="p-2">
          <div className="flex gap-2 items-center">
            <img
              src="/star.png"
              alt=""
              className="siz-[16px] stroke-yellow-300 fill-yellow-300 "
            />
            <p className="">{movie.vote_average.toFixed(1)}</p>
          </div>
          <p className="text-text">{movie.title}</p>
        </div>
      </div>
    </Link>
  );
};
