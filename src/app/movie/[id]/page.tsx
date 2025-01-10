import { Footer } from "@/app/_components/Footer";

import { Section } from "@/app/_components/Section";
import { options } from "@/constants/api";
import { Director, Genre, Stars, Writers } from "@/constants/types";

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${(await params).id}`,
    options
  );
  const data = await response.json();

  const responseTwo = await fetch(
    `https://api.themoviedb.org/3/movie/${(await params).id}/credits`,
    options
  );
  const credits = await responseTwo.json();

  return (
    <div className="w-[100%] flex flex-col justify-center items-center">
      <div className="w-[100%]  h-[60px] flex justify-between pl-[10px] pr-[10px] ">
        <div className="min-w-[211px] h-[56px] ">
          <p className="font-bold text-[24px]">{data.title}</p>
          <p className="text-[14px]">
            {data.release_date} · PG {}· {data.runtime}m
          </p>
        </div>
        <div className=" flex items-center gap-1 w-[83px] h-[48px] ">
          <img src="/star.png" alt="" className="size-[24px]" />
          <div className="">
            <p className="text-14px font-bold">
              {data.vote_average.toFixed(1)}
              <span className="text-gray-500">/10</span>
            </p>
            <p>{data.vote_count}</p>
          </div>
        </div>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        className="w-[100%] h-[211px] md:h-[300px] lg:h-[400px] xl:grid-[500px] 2xl:gird-[600px] mt-10"
      />
      <div className="gap-[5px] flex flex-col items-center mt-7 mr-[5%] ml-[5%]">
        <div className="flex justify-center">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            className="w-[148px] h-[100px] md:h-[300px] lg:h-[400px] xl:grid-[500px] 2xl:gird-[600px]"
          />
          <div className=" gap-[20px] ml-5 ">
            <div className="flex gap-3 flex-wrap">
              {data.genres.map((genre: Genre) => (
                <div
                  className="border-gray-300 border-solid border-2 rounded-2xl whitespace-nowrap px-2 py-1"
                  key={genre.id}
                >
                  {genre.name}
                </div>
              ))}
            </div>
            <p>{data.overview}</p>
          </div>
        </div>
        <div className="flex min-w-[85%]">
          <h1 className="font-bold text-[16px]">Director</h1>
          <div className="flex gap-2 ml-3">
            {credits.crew
              .filter((director: Director) => director.job == "Director")
              .map((director: Director) => (
                <h2>{director.name}</h2>
              ))}
          </div>
        </div>
        <div className="h-[1px] w-[87%] bg-[#E4E4E7]"></div>
        <div className="flex min-w-[85%] items-center">
          <h1 className="font-bold text-[16px]">Writers</h1>
          <div className="flex gap-2 ml-3 ">
            {credits.crew
              .filter((writers: Writers) => writers.department == "Writing")
              .map((writers: Writers) => (
                <h2>{writers.name}</h2>
              ))}
          </div>
        </div>
        <div className="h-[1px] w-[87%] bg-[#E4E4E7]"></div>
        <div className="flex min-w-[85%] items-center">
          <h1 className="font-bold text-[16px]">Stars</h1>
          <div className="flex gap-2 ml-3">
            {credits.cast.slice(0, 3).map((stars: Stars) => (
              <h2>{stars.name}</h2>
            ))}
          </div>
        </div>
        <div className="h-[1px] w-[87%] bg-[#E4E4E7]"></div>
      </div>

      <Section
        title="More like this"
        endpoint={`movie/${(await params).id}/recommendations`}
        moreLink={`/movie/${(await params).id}/recommendations`}
      />
    </div>
  );
}
