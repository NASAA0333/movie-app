"use client";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Section } from "./components/Section";

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
