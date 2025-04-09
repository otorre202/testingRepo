import React from "react";
import Link from "next/link";

const header = () => {
  return (
    <header className='flex justify-evenly mb-8 p-5'>
      <nav aria-label='Main navigation'>
        <Link
          href='/'
          className='font-extrabold px-4 py-2 transition-all delay-75 duration-300 ease-in-out hover:bg-stone-900 hover:scale-110 rounded-lg hover:text-stone-300'>
          Home
        </Link>
        <Link
          href='/project'
          className='font-extrabold px-4 py-2 transition-all delay-75 duration-300 ease-in-out hover:bg-stone-900 hover:scale-110 rounded-lg hover:text-stone-300'>
          Project
        </Link>
        <Link
          href='/contact'
          className='font-extrabold px-4 py-2 transition-all delay-75 duration-300 ease-in-out hover:bg-stone-900 hover:scale-110 rounded-lg hover:text-stone-300'>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default header;
