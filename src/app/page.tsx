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
      <main className="flex roun min-h-screen flex-col items-center justify-between max-w-5xl lg:mx-auto mx-8 lg:m-0">
        <Hero />
        <Features />
        <Plans />
        <About />
      </main>
      <Footer />
    </>
  );
}
