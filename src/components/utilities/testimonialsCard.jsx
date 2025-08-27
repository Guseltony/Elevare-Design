import React from 'react'

export const TestimonialsCard = ({image, customerName, company, comment}) => {
  return (
      <div className=' w-68 h-[440px] bg-linear-to-t from-secondary via-accent to-secondary/60 relative rounded-2xl overflow-hidden inset-shadow-sm inset-shadow-indigo-500 hover:shadow-xl/30 hover:shadow-secondary hover:inset-shadow-none transition-all duration-300 ease-in group/card'>
          <img src={image} alt="customer"  className='w-full h-full object-top object-cover'/>
          <div className='bg-black/80 backdrop-blur-md absolute bottom-0 left-0 w-full px-6 py-6'>   
            <h1 className='text-lg font-semibold'>{ customerName }</h1>
            <h1 className='text-xs text-secondary font-bold'>{ company }</h1>
          </div>
          <div className='absolute top-0 left-0 w-full h-full bg-black/70 backdrop-blur-md opacity-0 hover:opacity-100 transition-all duration-300 ease-in text-white flex flex-col justify-between p-6'>
              <p className='text-sm'>{comment}</p>
              <div className='flex-center'>
                    <div>   
                        <h1 className='text-sm font-bold text-accent'>{ customerName }</h1>
                        <h1 className='text-xs text-secondary'>{ company }</h1>
                    </div>
                    <div className="relative w-28 h-28">
                        {/* Circle background mask */}
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                            <img
                            src={image}
                            alt="profile"
                            className="w-full h-full object-cover object-top scale-110"
                            />
                        </div>

                        {/* Optional gradient border behind */}
                        <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-t from-primary via-secondary to-accent -z-10"></div>
                    </div>

              </div>
          </div>
    </div>
  )
}
