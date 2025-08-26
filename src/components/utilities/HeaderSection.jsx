import React from 'react'

export const HeaderSection = ({intro, header, details}) => {
return (
    <div>
        <p className='text-xs text-primary font-bold'>{intro}</p>
        <h1 className="font-header uppercase text-2xl inline-flex font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent my-2">{header}</h1>
        <p className='text-sm'>{details}</p>
    </div>
)
}
