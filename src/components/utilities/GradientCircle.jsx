import React from 'react'

export const GradientCircle = ({left, right, top, bottom, rightB, leftB}) => {
return (
    <>
        <div className={`circle-2 w-[250px] h-[250px] rounded-full absolute bg-linear-to-b from-accent to-secondary ${left} ${top} ${rightB}`}></div>
        <div className="circle-1 w-[250px] h-[250px] rounded-full absolute bg-linear-to-b from-accent to-secondary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className={`circle-1 w-[250px] h-[250px] rounded-full absolute bg-linear-to-b from-accent to-secondary ${bottom} ${right} ${leftB}`}></div>
    </>
)
}
