"use client";

import { Footer } from "../components/Footer";
import { Section } from "@/components/Section";
import { Header } from "./Header";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Header />
      <Section title="Popular" endpoint="popular" />
      <Section title="Upcoming" endpoint="upcoming" />
      <Section title="Top rated" endpoint="top_rated" />
      <Footer  />
    </div>
  );
}
