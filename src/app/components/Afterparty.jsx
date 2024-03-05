'use client'
import React from 'react'
import Image from 'next/image'
import afterparty from '../assets/afterparty.jpg'
import party from '../assets/18.png'
function Afterparty() {
  return (
   <>
    <div className="w-full h-full relative flex ">
        <Image src={afterparty}
        sizes={['100vw', '100vh']}
        
        alt="Afterparty web3women summit 2024"
        className="w-full h-full relative"
        />
       
    <div className="absolute text-overlay flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
      <div className="text-center">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gray-200 font-semibold uppercase tracking-widest">After Party!!!</span>
            <h2 className="mt-4 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">The sun may set, but the party never does.</h2>
            {/* <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sit cum iure qui, nostrum at sapiente
              ducimus.
            </p> */}
            <a className="inline-block w-full md:w-auto mb-4 md:mr-6 py-2 px-8 text-sm font-bold uppercase border-2 border-transparent bg-[#98B4AC] rounded hover:bg-gray-100 text-white transition duration-200"
            target="_blank"
              href="https://app.moongate.id/e/web-3-women-summit">Register now</a>
          </div>
        </div>
      </div>
    </div>
    </div>
   </>
  )
}

export default Afterparty