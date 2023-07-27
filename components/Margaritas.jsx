import React from "react";
import Link from 'next/link';

const Margaritas = () => {
  return (
    <div className="flex justify-end items-center h-screen flex-col">
      <h2 className="hidden">Margaritas</h2>
      <div className="mb-[2rem]">
        <Link className="w-auto text-2xl bg-[#67BFB1] text-center rounded-full uppercase font-[600] text-[#004857] hover:text-[#fff] py-4 px-6" href='/'>Drinks</Link>
      </div>
     <div className="lg:max-w-[800px] text-center">
     <p className="text-[1.2rem] leading-none mb-12 lg:w-[600px] px-6 lg:px-0">
        Viva Jalisco Restaurant in Bothell is renowned for crafting the most
        exquisite Margaritas in town. With their blended flavors and top-quality
        ingredients, their Margaritas are truly a taste of perfection.
      </p>
     </div>
    </div>
  );
};

export default Margaritas;
