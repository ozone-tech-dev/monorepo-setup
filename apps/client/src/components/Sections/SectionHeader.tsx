import React from 'react';

export default function SectionHeader({
  title,
  summary,
}: {
  title: string;
  summary?: string;
}) {
  return (
    <header className='w-full'>
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-8 items-center justify-center text-center">
        <div className='text-3xl md:text-4xl lg:text-5xl font-extrabold'>{title}</div>
        <div className="flex gap-4">
          <span className="py-1 px-2 bg-primary rounded-r-full rounded-l-full" />
          <span className="py-1 px-10 bg-primary rounded-r-full rounded-l-full" />
          <span className="py-1 px-2 bg-primary rounded-r-full rounded-l-full" />
        </div>
        <div>{summary}</div>
      </div>
    </header>
  );
}
