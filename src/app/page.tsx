"use client";

import {
  About,
  Features,
  Footer,
  Hero,
  Navigation,
  Plans,
} from "../components/landing";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-between max-w-5xl lg:mx-auto px-8 md:px-4">
        <Hero />
        <Features />
        <Plans />
        <About />
      </main>
      <Footer />
    </>
  );
}
