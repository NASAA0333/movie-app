"use client";

import { MovieCard } from "@/app/_components/MovieCard";
import { options } from "@/constants/api";
import { Movie, Props } from "@/constants/types";
import Link from "next/link";

export const Section = async ({ title, endpoint, moreLink }: Props) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${endpoint}`,
    options
  );

  const resJson = await response.json();
  const movies: Movie[] = resJson?.results?.slice(0, 10);

  const isDetailPage = moreLink?.includes("movie");
  return (
    <div className="p-3">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold">{title}</h1>
        {moreLink && <Link href={`${moreLink}`}>View all</Link>}
      </div>

      <div className="gap-5 p-4 grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 ">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            detailLink={isDetailPage ? `${movie.id}` : ""}
          />
        ))}
      </div>
    </div>
  );
};
