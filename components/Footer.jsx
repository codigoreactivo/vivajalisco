import React from "react";
import Image from "next/image";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-screen lg:h-[30vh] relative grid lg:grid-cols-3 w-full bg-[#67BFB1] text-white items-center justify-items-center">
      <div className="grid content-center lg:justify-items-start justify-items-center">
        <p className=" text-[1.4rem] lg:text-center leading-none font-[100]">
          1715 228th St SE UNIT 102 <br /> Bothell, WA 98021
        </p>
        <p className="font-[800] text-[2rem] lg:text-[2.5rem]">(425)481-3931</p>
      </div>
      <div className="text-center flex flex-col lg:flex-row items-center lg:text-left gap-4">
        <h2 className="uppercase lg:text-right text-center font-[Anton-Regular] text-[4rem] leading-none">
          Hours of
          <br /> operation
        </h2>
        <ul className="text-[1.3rem] ">
          <li className="font-[700]">Monday through Saturday</li>
          <li>11:00 AM to 9:00 PM</li>
          <li className="font-[700]">Sundays</li>
          <li>11:00 AM to 8:00 PM</li>
        </ul>
      </div>
      <div className=" text-[1.2rem] lg:justify-self-center text-">
        <h6 className="">
          {" "}
          <span className="">Follow</span> us:
        </h6>
        <div className="flex text-[2.5rem] gap-2 justify-center lg:justify-start">
          <Link
            href="https://www.instagram.com/vivajaliscorestaurant"
            target="_blank"
          >
            <AiFillInstagram className=" rounded-lg"></AiFillInstagram>
          </Link>
          <Link
            href="https://www.facebook.com/vivajaliscobothell"
            target="_blank"
          >
            <AiFillFacebook className="rounded-lg"></AiFillFacebook>
          </Link>
        </div>
      </div>
      <div className="bg-white text-black absolute w-full text-center bottom-0 text-[12px] py-2">
        <p className="self-center ">
          Site by art <strong>Creativos Asociados</strong> | D'MNT
        </p>
      </div>
    </div>
  );
};

export default Footer;
