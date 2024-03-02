'use client'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {styles} from '../utils/styles'
import {navLinks} from'../constants'
import {logo,menu,close, w3w} from '../assets'
const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return (
    <>
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-neutral-200`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
        href='/' 
        className='flex items-center gap-2' 
        onClick={() =>{
          setActive('')
          window.scrollTo(0,0)
        }}
        >
           <Image src={w3w} alt='logo' size={20} className='h-16 w-12 object-contain' />
           <p className='text-[#344760] text-[14px] font-bold cursor-pointer flex '>
            Web3 <br /> Women Summit <br /> 2024 &nbsp;
           </p>
         
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <a key={nav.id} href={nav.id}>
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-[#344760]"
              } hover:text-[#799AC3] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <p>{nav.title}</p>
            </li>
            </a>
          ))}
           <button className='rounded px-5  bg-[#799AC3] text-white text-xl hover:bg-[#8EB5DF]'>Register</button>
        </ul>
       

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <Image
            src={toggle ? close : menu}
            alt='menu'
            width={28}
            height={28}
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient bg-[#F2F5EC] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-end flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                 <a key={nav.id} href={nav.id}>
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <p>{nav.title}</p>
                </li>
                </a>
              ))}
              {/* <button className='rounded px-5  bg-[#799AC3] text-white text-xl hover:bg-[#8EB5DF]'>Register</button> */}
            </ul>
          </div>
        </div>
      </div>
      

    </nav>
    </>
  )
}

export default Navbar