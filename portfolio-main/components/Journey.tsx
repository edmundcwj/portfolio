"use client";

import React from "react";
import { companies, journey } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { BackgroundGradient } from "./ui/BackgroundGradient";

const Journey = () => {
  return (
    <section id="journey" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Journey</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={journey} direction="right" speed="slow" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
          {companies.map((company) => (
            <div key={company.id}>
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <div
                  // key={company.id}
                  className="flex flex-col items-center w-40 p-2 rounded-lg"
                >
                  <div className="h-20 mb-2 flex items-center justify-center">
                    <img
                      src={company.img}
                      alt={company.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {company.name}
                  </p>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {company.description}
                  </p>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
