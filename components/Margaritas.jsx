import React from "react";
import Link from "next/link";

const Margaritas = () => {
  return (
    <div className="flex justify-end items-center h-screen flex-col">
      <div className="h-[70vh] justify-center custom-fill-text items-start flex">
        <h2 className="font-[Anton-Regular] uppercase custom-fill-text text-[5rem] lg:text-[15rem]">Margaritas</h2>
      </div>
     <div className="h-[30vh] flex justify-center items-end flex-col">
     <div className="mb-[2rem] self-center">
        <Link
          className="w-auto text-2xl bg-[#67BFB1] text-center rounded-full uppercase font-[600] text-[#004857] hover:text-[#fff] py-4 px-6"
          href="/"
        >
          Drinks
        </Link>
      </div>
      <div className="lg:max-w-[800px] text-center">
        <p className="text-[1.2rem] leading-none mb-12 lg:w-[600px] px-6 lg:px-0">
          Viva Jalisco Restaurant in Bothell is renowned for crafting the most
          exquisite Margaritas in town. With their blended flavors and
          top-quality ingredients, their Margaritas are truly a taste of
          perfection.
        </p>
      </div>
     </div>
    </div>
  );
};

export default Margaritas;
