import React from 'react';
import SectionHeader from '../SectionHeader';
import { FaChartBar, FaLaptopCode } from 'react-icons/fa';
import { MdMiscellaneousServices, MdOutlineSocialDistance } from 'react-icons/md';
import Image from 'next/image';

export default function Service() {
  return (
    <section className="w-full px-8 md:px-14 my-28">
      <div className="w-full max-w-7xl mx-auto">
        <SectionHeader title="What We Do" />
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-14 lg:gap-12">
          <div className="w-full md:w-1/3 flex flex-col gap-8 md:gap-14 lg:gap-12">
            <div className="w-full  my-14">
              <div className="rounded-2xl bg-primary dark:bg-primary-dark text-light-lightest p-8 aspect-square -rotate-12 flex items-center justify-center">
                <div className="flex flex-col gap-4">
                  <div>
                    <FaLaptopCode size={32} />
                  </div>
                  <div className="text-xl font-bold">Website Development</div>
                  <div className="text-sm">
                    We design and build visually appealing websites that are
                    user-friendly, responsive, and optimized for search engines.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="rounded-2xl border border-dark dark:border-light p-8 aspect-square flex items-center justify-center">
                <div className="flex flex-col gap-4">
                  <div>
                    <FaChartBar size={32} />
                  </div>
                  <div className="text-xl font-bold">Digital Marketing</div>
                  <div className="text-sm">
                    We promote businesses online through strategies like SEO,
                    PPC advertising, content marketing, and email marketing to
                    increase brand visibility and drive customer engagement.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-full">
            <div className="h-full rounded-2xl bg-light dark:bg-dark-dark p-8 aspect-square flex items-center justify-center">
              <div className="flex flex-col gap-4 pt-8">
                <div>
                  <MdMiscellaneousServices size={32} />
                </div>
                <div className="text-xl font-bold">Software Development</div>
                <div className="text-sm">
                  We prioritize delivering high-quality solutions that help our
                  clients improve their business performance
                </div>
                <div className="w-full md:max-w-1/3">
                  <Image
                    src="/service/service.png"
                    alt="service"
                    width={1000}
                    height={400}
                    className="w-full h-full aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-8 md:gap-14">
            <div className="w-full">
              <div className="rounded-2xl border border-dark dark:border-light p-8 aspect-square flex items-center justify-center">
                <div className="flex flex-col gap-4">
                  <div>
                    <FaChartBar size={32} />
                  </div>
                  <div className="text-xl font-bold">
                    Social Media Management
                  </div>
                  <div className="text-sm">
                    We prioritize delivering high-quality solutions that help
                    our clients improve their business performance
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="rounded-2xl bg-secondary dark:bg-secondary-dark text-light-lightest p-8 aspect-square flex items-center justify-center">
                <div className="flex flex-col gap-4">
                  <div>
                    <MdOutlineSocialDistance size={32} />
                  </div>
                  <div className="text-xl font-bold">
                    Mobile App Development
                  </div>
                  <div className="text-sm">
                    We build customized mobile applications for iOS and Android
                    platforms, tailored to meet specific business requirements.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
