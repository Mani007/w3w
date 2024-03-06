import React from 'react'
import Image from 'next/image'
import {partners,cpartners, mpartners1,mpartners2,mpartners3} from '../constants'
function Partners() {
  return (
    <>
    <div id='partners' className='w-full h-full text-center relative bg-gradient-to-r  from-[#FC8E9F] via-[#FC72B9] to-[#FCBB78]'>
    {/* <p className='py-10 text-white text-4xl font-bold'>Our Partners</p> */}
    <p className='py-10 text-white text-4xl font-bold'>Community Partners</p>
        <div className='  flex flex-col items-center justify-center gap-16 md:flex-row'>
            {cpartners.map(
                (partner,index) =>(
                    <div key={index} className='mt-10 mb-10 mx-6 flex flex-col items-center justify-center gap-16 md:flex-row'>
                        <a href={partner.weblink} target='_blank'>
                        <Image src={partner.imgSrc} alt='logo' width={250} height={250} className='w-50 h-50 object-contain' />
                        {/* <p className='text-[#344760] text-[18px] font-bold cursor-pointer flex '>
                            {partner.title}
                        </p> */}
                        </a>
                    </div>
                )
            )}
            

        </div>
        <div className='  flex flex-col items-center justify-center gap-16 md:flex-row'>
            {mpartners2.map(
                (partner,index) =>(
                    <div key={index} className='mt-10 mb-10 mx-6 flex flex-col items-center justify-center gap-16 md:flex-row'>
                        <a href={partner.weblink} target='_blank'>
                        <Image src={partner.imgSrc} alt='logo' width={230} height={230} className='w-50 h-50 object-contain' />
                        {/* <p className='text-[#344760] text-[18px] font-bold cursor-pointer flex '>
                            {partner.title}
                        </p> */}
                        </a>
                    </div>
                )
            )}
            

        </div>
        <p className='py-8 text-white text-4xl font-bold'>Media Partners</p>
        <div className='  flex flex-col items-center justify-center gap-16 md:flex-row'>
            {mpartners1.map(
                (partner,index) =>(
                    <div key={index} className='mt-10 mb-10 flex flex-col items-center justify-center gap-16 md:flex-row'>
                        <a href={partner.weblink} target='_blank'>
                        <Image src={partner.imgSrc} alt='logo' width={200} height={200} className='w-50 h-50 object-contain' />
                        {/* <p className='text-[#344760] text-[18px] font-bold cursor-pointer flex '>
                            {partner.title}
                        </p> */}
                        </a>
                    </div>
                )
            )}
            

        </div>
        
        <div className='  flex flex-col items-center justify-center gap-16 md:flex-row'>
            {mpartners3.map(
                (partner,index) =>(
                    <div key={index} className='mt-10 mb-10 flex flex-col items-center justify-center gap-16 md:flex-row'>
                        <a href={partner.weblink} target='_blank'>
                        <Image src={partner.imgSrc} alt='logo' width={200} height={200} className='w-50 h-50 object-contain' />
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

export default Partners