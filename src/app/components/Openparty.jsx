import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
//import {openparty} from '/openparty/openparty7.jpg'
function Openparty() {
  return (
   <>
    <section className=" text-gray-600 bg-[#344760] body-font">
  <div className="container relative mx-auto flex px-5 py-5 items-center justify-center flex-col">
  <p className='py-5 text-white text-4xl font-bold'>Grand Opening Party</p>
    {/* <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
    {/* <Image
      src="/images/opscraftherosection.png"
      width={720}
      height={600}
      alt="Picture of the author"
    /> */}
    <Image
      src='/openparty/openparty7.jpg'
      sizes='100vw'
      width={600}
      height={600}
      alt="Picture of the author"
    />
   
  <div className="  item-center justify-center w-full">
        <div className="py-5 flex justify-center items-center">
        {/* <Link href='/'>
        <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none  bg-[#C9B46D]  hover:bg-[#8EB5DF] rounded text-lg">Be a sponsor </button>&nbsp;
        </Link> */}
        <Link href='/'>
        <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none  bg-[#98B4AC]  hover:bg-[#8EB5DF] rounded text-lg">Register Now</button>
        </Link>
      </div>
    </div> 
  </div>
</section>
   </>
  )
}

export default Openparty