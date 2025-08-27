import React from 'react'
import { projectsArray } from './utilities/projectsArray'
import { GradientCircle } from './utilities/GradientCircle'

const Project = () => {
  return (
      <section id="portfolio" className='w-screen relative min-h-screen flex items-center justify-center text-center '>
          <GradientCircle top={'top-0'} left={'left-0'} bottom={'bottom-0'} right={'right-0'} middleTop={'top-1/2'} />

          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 relative w-full h-full z-20 bg-bg/80 backdrop-blur-md shadow-2xl px-[15%] py-20">
  {projectsArray.map((item, index) => (
    <div
      key={index}
      className="mb-4 break-inside-avoid relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out
                 " // you can tweak row-span based on image
      >
          {
              item.isVideos ? 
                <video 
                    src={item.video}  
                    loop 
                    muted 
                    className="w-full h-full object-cover" />
              : <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />
          }
      {/* <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      /> */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
        <h3 className="text-white text-lg font-bold">{item.title}</h3>
      </div>
    </div>
  ))}
</div>
    </section>
  )
}

export default Project