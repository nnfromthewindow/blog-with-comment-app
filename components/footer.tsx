import Link from "next/link";
import Container from "./container";

import React from 'react'

export default function Footer()  {
  return (
    <div className="bg-slate-500 h-20 text-right te pt-6 text-lg pr-10 absolute w-full bottom-0 flex gap-5 p-10 justify-end">
         <Link href="https://github.com/nnfromthewindow">GitHub</Link>
         <Link href="https://www.linkedin.com/in/nnuccelli/">LinkedIn</Link>
    </div>
  )
}
