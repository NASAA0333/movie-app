"use client";

import Image from "next/image";
import { Movie } from "@/constants/types";
// import StarIcon

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const imgPath = movie.poster_path ? movie?.poster_path : movie?.backdrop_path;
  return (
    <div className="rounded-lg bg-gray-100">
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
          {/* <StarIcon size={16} className="stroke-yellow-300 fill-yellow-300" /> */}
          <p className="text-black">{movie.vote_average.toFixed(1)}</p>
        </div>
        <p className="text-black">{movie.title}</p>
      </div>
    </div>
  );
};
