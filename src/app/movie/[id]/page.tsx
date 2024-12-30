"use client";

import { Footer } from "@/app/_components/Footer";
import { Header } from "@/app/_components/Header";
import { options } from "@/constants/api";

export default async function Page({ params }: { params: { id: string } }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}`,
    options
  );
  const data = await response.json();
  // console.log(data);

  return (
    <div className="w-[100%]  h-[882px] flex flex-col justify-between items-center">
      <Header />
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        className=" h-[246px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] "
      />
      <div className="w-[100%]  h-[60px] flex justify-between pl-[10px] pr-[10px] ">
        <div className="w-[211px] h-[56px] ">
          <p className="font-bold">{data.title}</p>
          <p className="">
            {data.release_date} · PG · {data.runtime}m
          </p>
        </div>
        <div className=" flex items-center gap-1 w-[83px] h-[48px] ">
          <img src="/star.png" alt="" className="size-[24px]" />
          <div className="">
            <p>
              {data.vote_average.toFixed(1)}
              <span className="text-gray-500">/10</span>
            </p>
            <p className="w-full min-h-0">{data.vote_count}</p>
          </div>
        </div>
      </div>
      <p>{data.overview}</p>
      {/* <div className="w-[100%] bg-green-300 h-[567px]"></div> */}
      <Footer />
    </div>
  );
}
``;
