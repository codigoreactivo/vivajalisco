import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MargeritasFx = () => {
  return (
    <div class="hero">
    <div class="hero-content">
        
        <div class="title white-text">
            MARGARITAS
        </div>
        <div class="title bordered-text">
            MARGARITAS
        </div>
    </div>

    <div className="h-screen flex justify-end items-center flex-col basis-full">
     <div className="mb-[2rem] self-center">
        <Link
          className="w-auto text-2xl bg-[#67BFB1] text-center rounded-full uppercase font-[600] text-[#004857] hover:text-[#fff] py-4 px-6"
          href="/"
        >
          Drinks
        </Link>
      </div>
      <div className="lg:max-w-[800px] text-center">
        <p className="text-[1.2rem] self-center leading-none mb-12 lg:w-[600px] px-6 lg:px-0 text-[white]">
          Viva Jalisco Restaurant in Bothell is renowned for crafting the most
          exquisite Margaritas in town. With their blended flavors and
          top-quality ingredients, their Margaritas are truly a taste of
          perfection.
        </p>
      </div>
     </div>

    
    <img class="img-overlay" src="./img/marg/2.png"/>
</div>  )
}

export default MargeritasFx