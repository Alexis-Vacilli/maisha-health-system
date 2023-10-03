"use client"
import React, {useState} from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

import { CiUser } from 'react-icons/ci';
import { FiLogOut } from 'react-icons/fi';



const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="relative flex items-center gap-2 ">
            <div className="h-10 w-10 rounded-full bg-gray-300 p-4 flex justify-center items-center">
                <h1>P</h1>
            </div>
            <button onClick={() => setIsOpen((prev) => !prev)} className=" p-1 w-full flex items-center justify-between  text-base tracking-wider border-4 border-transparent active:border-white duration-300 active:text-blue-400 gap-3">
                Jolivet Gislain
                {!isOpen ? (
                    <BiChevronDown className="text-2xl" />
                ) : (
                    <BiChevronUp className="text-2xl" />
                )}
            </button>
            {isOpen && (
                <div className="absolute p-6 border border-[#abb8ff4c] bg-white top-12 flex flex-col items-center justify-start w-5/6 ml-5">
                    <div className="w-full flex gap-5 items-center py-3 cursor-pointer border-b border-[#abb8ff4c]">
                        <h3><CiUser /></h3>
                        <h3>Profile</h3>
                    </div>
                    <div className="w-full flex gap-5 items-center py-3 cursor-pointer ">
                        <h3><FiLogOut /></h3>
                        <h3>Logout</h3>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dropdown
