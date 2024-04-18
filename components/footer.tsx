import Link from "next/link";
import Container from "./container";

import React from 'react'

export default function Footer()  {
  return (
    <div className="bg-slate-500 h-[8vh]  px-5 absolute w-full bottom-0 sm:text-lg  flex flex-col justify-center">
      <div className="flex justify-between w-full  my-a">
      <Link className="hover:text-gray-400 transition [text-shadow:_1px_1px_5px_rgb(0_0_0_/_40%)]" href="https://github.com/nnfromthewindow" target="_blank">GitHub</Link>
         <Link className="hover:text-gray-400 transition [text-shadow:_1px_1px_5px_rgb(0_0_0_/_40%)]" href="https://www.linkedin.com/in/nnuccelli/" target="_blank">LinkedIn</Link>
         <Link className="hover:text-gray-400 transition [text-shadow:_1px_1px_5px_rgb(0_0_0_/_40%)]" href="https://nuccellidev.netlify.app/" target="_blank">3D/VR</Link>
         <Link className="hover:text-gray-400 transition [text-shadow:_1px_1px_5px_rgb(0_0_0_/_40%)]" href="mailto:nuccelli@gmail.com" target="_blank">Contact</Link>
      </div>
      
    </div>
  )
}
