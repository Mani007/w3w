'use client'
import React from 'react'
import Image from 'next/image'
import afterparty from '../assets/afterparty.jpg'
function About() {
  return (
    <>
    <div id='about' className='w-full h-full bg-[#344760]'>
 <section className="text-white body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        src="/womens1.jpg"
        width={720}
        height={600}
        alt="Picture of the author"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Web3 Women Summit 2024
        
      </h1>
      <p className="mb-8 leading-relaxed">Join us at the Web3 Women Summit 2024 in Lisbon from March 8th-10th (7th will be pre event!), a pivotal event highlighting the crucial role of women in the future of blockchain, cryptocurrency, and web3 technologies. This summit is not just an event; it&apos;s a movement towards a more equitable and innovative world, driven by the leadership of women in tech. We invite visionaries, thought leaders, and innovators to share their expertise and insights, contributing to a diverse and empowering digital future.

</p>
<p className="mb-8 leading-relaxed">
The Web3 Women Summit offers a unique platform for collaboration, discussion, and innovation, celebrating progress and calling for action to shape an inclusive tech landscape. Be part of this historic gathering to empower and inspire the next generation of women in technology. Let&apos;s unite in Lisbon to forge a path toward a future where everyone thrives. Secure your place in shaping the future. Join us in empowering women in tech.
</p>
      <div className="flex justify-center">
      
      </div>
    </div>
  </div>
</section>
</div>
    </>
  )
}

export default About