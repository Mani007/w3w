'use client'
import React from 'react'
import {speakers,} from '../constants'
import Image from 'next/image'
import dog from '../assets/dogtest.jpg'
function Speakers() {
  return (
    <>
    <div className='container mx-auto py-36 px-8'>
        <div className=' grid lg:grid-cols-4 gap-4'>
            {speakers.map((speaker,index) =>
            (
            
             <div className='shadow-sm rounded-sm text-center' key={speaker.id}>
                <Image
                src={speaker.imgSrc}
                className='rounded-t-lg'  
                style={{ "width": "100%"}}
                alt={speaker.name}
                height={150}
                width={250}   
                    
                      />
                <p>{speaker.name}</p> 
                <p>{speaker.jobtitle}</p>
                <p>{speaker.company}</p> 
                 <p>{speaker.social}</p>
             </div>   
            ) 
            )
            
            }
        </div>
        

    </div>
    </>
  )
}

export default Speakers