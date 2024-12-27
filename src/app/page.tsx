"use client";

import { Header } from "./_components/Header";
import { Section } from "./_components/Section";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Header />
      <Section title="Popular" endpoint="popular" />
      <Section title="Upcoming" endpoint="upcoming" />
      <Section title="Toprated" endpoint="top_rated" />
      <div>1+1</div>
    </div>
  );
}
