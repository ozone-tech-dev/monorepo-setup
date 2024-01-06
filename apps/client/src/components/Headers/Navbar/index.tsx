'use client';

import ThemeIcon from './ThemeIcon';

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between my-4">
        <div className="font-extrabold text-xl">OZONE Technology</div>
        <ul className="flex gap-8">
          <li>Home</li>
          <li>Service</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
        <div className="flex gap-4 items-center">
          <ThemeIcon />
          <button className="btn btn-primary">Order Now</button>
        </div>
      </nav>
    </header>
  );
}
