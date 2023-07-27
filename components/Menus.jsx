import React from "react";
import Link from "next/link";

const Menus = () => {
  return (
    <div className="flex basis-full flex-col justify-center items-center">
      <h2 className="uppercase lg:mb-0 mb-[5rem] text-[8rem] lg:text-[20rem] font-[Anton-Regular] leading-none">
        Menus
      </h2>
      <div className="flex flex-col lg:flex-row gap-20 justify-center items-center text-2xl">
        <div className="w-auto bg-[#67BFB1] text-center rounded-full uppercase font-[600] text-[#004857] hover:text-[#fff] py-4 px-6">
          <Link
            className=" rounded-full px-8 py-4"
            href="https://drive.google.com/file/d/14-pR4WO-NC3vfug4JSNnEEh--oR7E_C8/view?usp=sharing"
            target="_blank"
          >
            Menu
          </Link>
        </div>
        <div className="w-auto bg-[#67BFB1] text-center rounded-full uppercase font-[600] text-[#004857] hover:text-[#fff] py-4 px-6">
          <Link
            className=" rounded-full px-8 py-4"
            href="https://drive.google.com/file/d/1g-DcAFIMHkJzvoA4vbG5qNU3KY84lr6J/view?usp=sharing"
            target="_blank"
          >
            Lunch
          </Link>
        </div>
        <div className="w- bg-[#67BFB1] text-center rounded-full uppercase font-[600] text-[#004857] hover:text-[#fff] py-4 px-6">
          <Link
            className=" rounded-full px-8 py-4"
            href="https://drive.google.com/file/d/1SQyyCqbd3Kv0mzAiiJOLsxvWHIfKil9H/view?usp=sharing"
            target="_blank"
          >
            Kids
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menus;
