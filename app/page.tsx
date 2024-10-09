import HeroSec from "@/components/home/heroSec";
import React from "react";
export default function Home() {
  return (
    <main
      className="min-h-screen lg:max-h-[100vh] "
      style={{
        background:
          "linear-gradient(165deg, #1D0028 5%, #1D0028 60%, rgba(102, 0, 142, 0.7) 100%)",
      }}
    >
      <HeroSec />
    </main>
  );
}
