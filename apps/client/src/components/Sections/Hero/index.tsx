import Image from 'next/image';
import React from 'react';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className='w-full px-8 my-10'>
      <div className="w-full max-w-7xl mx-auto  bg-light dark:bg-dark-dark px-4 py-8 md:px-20 md:py-24 rounded-3xl drop-shadow-2xl">
        <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-16">
          <div className="w-full md:max-w-2/3 flex flex-col gap-4 justify-center">
            <div className="text-primary">
              We Are Software Engineers from Ethiopia
            </div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
              Unlocking Your Potential with Tailored Tech Development
            </div>
            <div className="text-xs text-dark dark:text-light w-full md:w-1/2">
              We prioritize delivering high-quality solutions that help our
              clients improve their business performance
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 my-4">
              <button className="btn btn-primary group py-3 px-5 w-full md:w-fit flex items-center gap-2">
                <span>Work with us</span>
                <FaArrowRight
                  size={15}
                  className="group-hover:translate-x-1 ease-in-out duration-200"
                />
              </button>
              <button className="btn btn-light group py-3 px-5 w-full md:w-fit flex items-center gap-2">
                <span>Learn More</span>
                <FaArrowDown
                  size={15}
                  className="group-hover:translate-y-1 ease-in-out duration-200"
                />
              </button>
            </div>
          </div>
          <div className="w-full md:max-w-1/3">
            <Image
              src="/hero/hero.png"
              alt="hero"
              width={1000}
              height={400}
              className="w-full h-full aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
