import ThemeToggle from "./_components/Darkmode";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Section } from "./_components/Section";
// import { PaginationControls } from "./PaginationControls";

export default function Home() {
  return (
    <div className="">
      <Section
        title="Popular"
        endpoint="movie/popular?language=en-US&page=1"
        moreLink="/popular?language=en-US&page=1"
      />
      <Section
        title="Upcoming"
        endpoint="movie/upcoming?language=en-US&page=1"
        moreLink="/upcoming?language=en-US&page=1"
      />
      <Section
        title="Toprated"
        endpoint="movie/top_rated?language=en-US&page=1"
        moreLink="/top_rated?language=en-US&page=1"
      />
      <Footer />
      {/* <PaginationControls /> */}
    </div>
  );
}
