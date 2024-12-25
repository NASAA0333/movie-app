"use client";

import Image from "next/image";
import { Footer } from "../components/Footer";
import { Section } from "@/components/Section";
export default function Home() {
  return (
    <div className="">
      <Section title="Popular" endpoint="popular" />
      <Section title="Upcoming" endpoint="upcoming" />
      <Section title="Top rated" endpoint="top_rated" />
      <Footer />
    </div>
  );
}
