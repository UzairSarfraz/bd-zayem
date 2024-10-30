import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Button = (props) => {
  return (
    <div className="hidden lg:flex">
        <button className="bg-teal-400 text-black rounded-full px-6 py-4 hover:bg-teal-500 flex items-center gap-x-2 ">
          <span>{props.btnname}</span>
          <FaArrowRightLong />
        </button>
      </div>
  )
}

export default Button
