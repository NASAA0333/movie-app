"use client";

import { Footer } from "../components/Footer";
import { Section } from "@/components/Section";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="bg-white text-black">
       <div>{"add home...."}</div>
      <Header />
      <Section title="Popular" endpoint="popular" />
      <Section title="Upcoming" endpoint="upcoming"/>
      <Section title="Toprated"endpoint="top_rated" />
      <Footer  />
    </div>
  );
}
