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
      <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tenetur odio tempore perspiciatis autem minus animi at incidunt aspernatur voluptatem, aperiam maxime dolor, architecto similique optio illo! Velit quaerat ipsa aspernatur quas modi odio quasi error ex facilis ab vero sed, voluptate omnis adipisci! Pariatur earum iure aliquam laborum officia inventore deleniti placeat eaque unde. Officia quisquam sit fugiat aliquam, cupiditate aut modi blanditiis consequatur quasi eaque ipsa maiores! Sed dicta accusamus dolorum odio repellendus natus cupiditate id architecto molestiae eius tempora, iusto, dolore minus tempore odit enim numquam repudiandae harum quae vitae at cumque? Officia, dicta. Vero nulla praesentium natus voluptas optio quas ab libero a necessitatibus repellat officia consequatur error asperiores facilis ullam iure, ipsum iste vel fugiat atque modi illum! Accusamus nesciunt quibusdam, officia neque similique quis enim repellendus ea quas voluptatem ex sunt tempore error quia reiciendis non saepe suscipit quae, repellat, aspernatur odit. Dignissimos, itaque quae asperiores aperiam suscipit placeat recusandae corrupti fugit perferendis. Ea, illo! Eveniet iusto iure saepe eos ipsam repellendus quibusdam et, atque quis ullam. Officiis laborum, eligendi, velit cumque repellat quaerat recusandae, nam nobis fugiat in explicabo impedit id natus facilis. Sed excepturi minima molestiae atque a eius natus sapiente eaque.</p>
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