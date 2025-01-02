import { Footer } from "@/app/_components/Footer";
import { Header } from "@/app/_components/Header";
import { Section } from "@/app/_components/Section";
import { options } from "@/constants/api";

export default async function Page({ params }: { params: { id: number } }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}`,
    options
  );
  const data = await response.json();

  const responseTwo = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}/credits`,
    options
  );
  const credits = await responseTwo.json();
  // console.log(credits.genres);
  // console.log(data.genres);

  return (
    <div className="w-[100%] flex flex-col justify-between ">
      <Header />

      <div className="w-[100%]  h-[60px] flex justify-between pl-[10px] pr-[10px] ">
        <div className="w-[211px] h-[56px] ">
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
        className="w-[100%] h-[211px] md:h-[300px] lg:h-[400px] xl:grid-[500px] 2xl:gird-[600px] mt-6"
      />
      <div className="gap-[5px] flex flex-col items-center mt-7 ">
        <div className="flex">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            className="w-[148px] h-[100px] md:h-[300px] lg:h-[400px] xl:grid-[500px] 2xl:gird-[600px]"
          />
          <div className=" gap-[20px]">
            <div className="rounded-2xl mr-3 mb-2 border-gray-300  bg-slate-200">
              {data.id}
            </div>
            <p>{data.overview}</p>
          </div>
        </div>
        <div className="flex h-5 min-w-[85%]">
          <h1 className="font-bold text-[16px]">Director</h1>
          <p></p>
        </div>
        <div className="h-[1px] w-[87%] bg-[#E4E4E7]"></div>
        <div className="flex h-5 min-w-[85%]">
          <h1 className="font-bold text-[16px]">Writers</h1>
          <p></p>
        </div>
        <div className="h-[1px] w-[87%] bg-[#E4E4E7]"></div>
        <div className="flex h-5 min-w-[85%]">
          <h1 className="font-bold text-[16px]">Stars</h1>
          <p></p>
        </div>
        <div className="h-[1px] w-[87%] bg-[#E4E4E7]"></div>
      </div>

      <Section
        title="More like this"
        endpoint={`movie/${params.id}/recommendations`}
        moreLink={`/movie/${params.id}/recommendations`}
      />
      <Footer />
    </div>
  );
}
