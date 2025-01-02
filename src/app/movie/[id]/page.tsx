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

  return (
    <div className="w-[100%]  h-[882px] flex flex-col justify-between">
      <Header />
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        className="w-[375px] h-[211px] md:h-[300px] lg:h-[400px] xl:grid-[500px] 2xl:gird-[600px]"
      />
      <div className="w-[100%]  h-[60px] flex justify-between pl-[10px] pr-[10px] ">
        <div className="w-[211px] h-[56px] ">
          <p className="font-bold">{data.title}</p>
          <p className="">
            {data.release_date} · PG {}· {data.runtime}m
          </p>
        </div>
        <div className=" flex items-center gap-1 w-[83px] h-[48px] ">
          <img src="/star.png" alt="" className="size-[24px]" />
          <div className="">
            <p>
              {data.vote_average.toFixed(1)}
              <span className="text-gray-500">/10</span>
            </p>
            <p>{data.vote_count}</p>
          </div>
        </div>
      </div>
      <p>{data.overview}</p>

      <Section
        title="More like this"
        endpoint={`movie/${params.id}/recommendations`}
        moreLink={`/movie/${params.id}/recommendations`}
      />
      <Footer />
    </div>
  );
}
