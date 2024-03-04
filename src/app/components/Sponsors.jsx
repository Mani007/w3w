import React from 'react'
import Image from 'next/image'
import {partners,} from '../constants'
function Sponsors() {
  return (
    <>
    <div id='sponsors' className='w-full h-full text-center relative bg-[#FADCD9]'>
            <p className='py-8 text-white text-4xl font-bold'>Our Sponsors</p>
        <div className='  flex flex-col items-center justify-center gap-16 md:flex-row'>
            {partners.map(
                (partner,index) =>(
                    <div key={index} className='mt-10 mb-10 flex flex-col items-center justify-center gap-16 md:flex-row'>
                        <a href={partners.weblink} target='_blank'>
                        <Image src={partner.imgSrc} alt='logo' width={250} height={250} className='w-50 h-50 object-contain' />
                        {/* <p className='text-[#344760] text-[18px] font-bold cursor-pointer flex '>
                            {partner.title}
                        </p> */}
                        </a>
                    </div>
                )
            )}
            

        </div>
       
    </div>
    </>
  )
}

export default Sponsors