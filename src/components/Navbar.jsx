import React from 'react'
import spell from "../assets/spelllogo.png";
import { LuShoppingBag } from "react-icons/lu";
import { IoPersonCircleSharp } from "react-icons/io5";
const Navbar = () => {
  return (
    <div>
      <div className='mx-12 my-4'>
        
        <div className="flex  text-nowrap">
        <img src={spell} height={"40px"}
                width={"100px"}
        />
          <ul className="flex gap-6 px-3 font-medium">
            <li className="py-1">Inspiration</li>
            <li className="py-1">Find Work</li>
            <li className="py-1">Learn Design</li>
            <li className="py-1">Go Pro</li>
            <li className="py-1">Hire Designers</li>
          </ul>
          <div className='w-[400px]'></div>
          <ul className="flex  justify-end ml-8 gap-4 ">
            <li className="py-1"><input type="text" placeholder='Search' className='rounded-xl'></input></li>
            <li className="py-1"> <LuShoppingBag size={30}/></li>
            <li className="py-1"><IoPersonCircleSharp size={30}/></li>
            <li className="py-1">
              <div className='bg-[#EA4B8B] rounded-lg py-2 px-4'>Upload</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
