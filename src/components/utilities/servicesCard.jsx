import React from 'react'

export const ServicesCard = ({ icon: Icon, title, info, cta }) => {
  return (
    <div className='flex-center flex-col w-[300px] py-8 px-4 bg-bg/80 backdrop-blur-md rounded-3xl inset-shadow-sm inset-shadow-indigo-500 hover:-translate-y-1.5 transition-all duration-800 ease-in group-hover:translate-y-2 hover:shadow-xl/30 hover:shadow-secondary hover:inset-shadow-none group/card'>
      {Icon && <Icon className="text-5xl text-indigo-600 mb-6 group-hover:scale-[0.5] group-hover/card:scale-[1.5] transition-all duration-500 ease-in" />}
      <h1 className="font-header capitalize text-primary font-extrabold mb-4">{title}</h1>
      <p className='text-sm mb-4 text-center'>{info}</p>
      <button className='fonts-btn px-2 py-2 border-b-2 border-b-accent transition-all duration-300 ease-in w-fit text-xs hover:bg-secondary'><a href="#">{cta}</a></button>
    </div>
  )
}
