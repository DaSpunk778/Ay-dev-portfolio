import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
  <main className="relative w-full bg-[#000319] flex justify-center items-center flex-col overflow-hidden" >
    <div className="max-w-7xl w-full sm:px-10 px-5">
      <Hero />
    </div>
  </main>
  );
}
