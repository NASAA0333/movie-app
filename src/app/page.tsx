"use client";

import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Section } from "./_components/Section";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <div>{"add home...."}</div>
      <Header />
      <Section title="Popular" endpoint="popular" />
      <Section title="Upcoming" endpoint="upcoming" />
      <Section title="Toprated" endpoint="top_rated" />
      <Footer />
    </div>
  );
}
