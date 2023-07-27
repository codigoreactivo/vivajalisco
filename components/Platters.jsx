import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Platters = () => {
  return (
    <div className='flex flex-col relative justify-center items-center h-screen'>
        <h2 className='font-[BebasNeue-Regular] text-center leading-none flex-wrap text-[8rem] lg:text-[12rem] uppercase'>Party Platters?</h2>
        <div className='w-[10rem] bg-[#67BFB1] text-center rounded-full uppercase font-[600] text-[#004857] hover:text-[#fff] py-4 px-6 z-20'><Link href='https://drive.google.com/file/d/1eZLEKbpLzA98rruakJqbMDMtnZFG3lpb/view?usp=sharing' target='_blank'>Togo Here</Link></div>
        <Image className='absolute right-0 top-0' src='/img/7.png' width={2500} height={200}></Image>
    </div>
  )
}

export default Platters