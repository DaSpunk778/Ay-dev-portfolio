import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Grid } from "lucide-react";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
  <main className="relative w-full bg-[#000319] flex justify-center items-center flex-col overflow-hidden" >
    <div className="max-w-7xl w-full sm:px-10 px-5">
      <FloatingNav 
        navItems={[
          { name: 'Home', link: '/', icon: <FaHome /> },
        ]}
      />
      <Hero />
      <Grid />
    </div>
  </main>
  );
}
