"use client";

import { Movie } from "@/constants/types";
import { MovieCard } from "../_components/MovieCard";
import { options } from "@/constants/api";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PageInfo } from "next/dist/build/utils";
import { PaginationControls } from "../PaginationControls";


export default function Page {
  const params = useParams();
  const seacrchParams = useSeacrchPArams();
  const page = SearchParamsContext.get('page');

  const [movies, setMovies] = useState<Movie[]>();
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    totalPages: 0,
    currentPage: 0,
  });

  useState(() => {
    const fetchMovies = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.category}?language=en-US&page=${page}`, options);
      const data = await response.json();

      setMovies(data.results?.slice(0, 5));
      setPageInfo({ currentPage: Number(page), totalPages: data.total_pages });
    }
    fetchMovies()
  }, [params]);

  return (
    <div>
      <h1 className="font-bold">{params.category}</h1>
      <div className="p-4 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-10">
        {movies?.map((movie) => (
          <MovieCard movie={movie} key={movie.id + 'movie'} />
        ))}
      </div>

      <PaginationControls pageInfo={pageInfo} />

    </div>
  )
}
// export default async function Page({
//   params,
// }: {
//   params: { category: string };
// }) {
//   const { category } = await params;
//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
//     options
//   );
//   const resJson = await response.json();
//   const movies: Movie[] = resJson.results;
//   return (
//     <div className="gap-5 p-4 grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 ">
//       <h1 className="font-bold">{category}</h1>
//       {movies?.map((movie) => (
//         <MovieCard movie={movie} />
//       ))}
//     </div>
//   );
// }
