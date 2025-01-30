"use client";

import HeroSection from "@/components/hero-section";
import { features } from "@/data/features";

export default function Home() {
  return (
    <div>
    <div className="grid-background">
      <HeroSection/>
      <section>
        <div>
          <h2>
            Powerful Features for your Carrer Growth
          </h2>
          <div>{features.map((feature,index)=>{
              
          })}</div>
        </div>
      </section>
    </div>
    </div>
  );
}
