// import React, { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// gsap.registerPlugin(ScrollToPlugin)

// const Header = () => {

//     const linkRef = useRef(null);
//     const logoRef = useRef(null);
//     const headerBtn = useRef(null);

//     const navLinks = [
//         { name: 'Home', href: '#' },
//         { name: 'About', href: '#about' },
//         { name: 'Services', href: '#service' }, 
//         { name: 'Portfolio', href: '#portfolio' },
//         { name: 'Testimonials', href: '#testimonials' },
//         { name: 'Blog', href: '#blog' },
//     ]

//     const handleScrollTo = () => {
//         gsap.to(window, {duration: 1, scrollTo: {y: 0}})
//     }


// return (
//     <div className='bg-bg/80 backdrop-blur-md shadow-2xl fixed top-0 left-0 w-full z-50'>
//         <div className='flex-between px-[10%] py-2 shadow-2xl'>
//             <div className=" logo flex-between items-center justify-center gap-2 cursor-pointer" ref={logoRef}>
//                 <div className="icon-image"></div>
//                 <p onClick={() => handleScrollTo()} className="font-logo leading-none text-lg text-primary cursor-pointer">
//                     Elevare Design
//                 </p>
//             </div>
//             <nav>
//                 <ul className='flex-center gap-8 group'>
//                     {navLinks.map((link) => (
//                         <li key={link.name}  className='group border-2 border-red-900 links'>
//                             <a href={link.href} className="font-nav text-base group-hover:opacity-30 hover:opacity-100 hover:text-[#3abef9] transition-all duration-300 px-2 py-2">
//                                 {link.name}
//                             </a>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>
//             <button className=' btn btn-general' ref={headerBtn}>
//                 <a href="#contact" className="font-btn">Contact Us</a>
//             </button>
//         </div>
//     </div>
//     )
    
// }

// export default Header

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin)

const Header = () => {
    const linkRef = useRef(null);
    const logoRef = useRef(null);
    const headerBtn = useRef(null);
    const navRef = useRef(null);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#service' }, 
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Blog', href: '#blog' },
    ]

    const handleScrollTo = () => {
        gsap.to(window, {duration: 1, scrollTo: {y: 0}})
    }

    // GSAP Animations
    useEffect(() => {
        // Create a timeline for sequenced animations
        const tl = gsap.timeline();
        
        // Logo animation first
        tl.fromTo(logoRef.current, 
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
        );
        
        // Navigation links animation second (with stagger)
        tl.fromTo(navRef.current.children, 
            { opacity: 0, y: -20 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.5, 
                stagger: 0.1,
                ease: "back.out(1.7)"
            },
            "-=0.3" // Overlap slightly with previous animation
        );
        
        // Button animation last
        tl.fromTo(headerBtn.current, 
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
            "-=0.2" // Start slightly before previous animation ends
        );
    }, []);


    // Hover animations for links
    const handleLinkHover = (e) => {
        gsap.to(e.target, {
            duration: 0.3,
            color: "#3abef9",
            scale: 1.1,
            ease: "power1.out"
        });
    };

    const handleLinkHoverOut = (e) => {
        gsap.to(e.target, {
            duration: 0.3,
            color: "#ffffff",
            scale: 1,
            ease: "power1.out"
        });
    };

    return (
        <div className='bg-bg/80 backdrop-blur-md shadow-2xl fixed top-0 left-0 w-full z-50'>
            <div className='flex-between px-[10%] py-2 shadow-2xl'>
                <div className="logo flex-between items-center justify-center gap-2 cursor-pointer" ref={logoRef}>
                    <div className="icon-image"></div>
                    <p onClick={() => handleScrollTo()} className="font-logo leading-none text-lg text-primary cursor-pointer">
                        Elevare Design
                    </p>
                </div>
                <nav>
                    <ul className='flex-center gap-8 group' ref={navRef}>
                        {navLinks.map((link) => (
                            <li key={link.name} className='links'>
                                <a 
                                    href={link.href} 
                                    className="font-nav text-base text-white group-hover:opacity-30 hover:opacity-100 transition-all duration-300 px-2 py-2"
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkHoverOut}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className='btn btn-general' ref={headerBtn}>
                    <a href="#contact" className="font-btn">Contact Us</a>
                </button>
            </div>
        </div>
    )
}

export default Header