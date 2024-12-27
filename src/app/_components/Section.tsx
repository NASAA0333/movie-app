"use client";

import { MovieCard } from "@/app/_components/MovieCard";
import { options } from "@/constants/api";
import { Movie } from "@/constants/types";
import Link from "next/link";

type Props = {
  title: string;
  endpoint: string;
};

export const Section = async ({ title, endpoint }: Props) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`,
    options
  );
  const resJson = await response.json();
  const movies: Movie[] = resJson.results.slice(0, 10);
  return (
    <div className="p-3">
      <div className="flex justify-between">
        <h1 className="font=semibold">{title}</h1>
        <Link href={`/${endpoint}`}>
          <p>View all</p>
        </Link>
      </div>

      <div className="gap-5 p-4 grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 ">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
};
