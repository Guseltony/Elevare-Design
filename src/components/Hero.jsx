import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
  const headerRef = useRef(null);
  const introRef = useRef(null);
  const paraRef = useRef(null);
  const portfolioBtnRef = useRef(null);
  const hireBtnRef = useRef(null);


    useEffect(() => {
        gsap.set("body", { overflow: "hidden" });
  const splitHeader = new SplitText(headerRef.current, {
    type: "words, chars",
    ignore: "br",
  });

  const splitParagraph = new SplitText(paraRef.current, {
    type: "lines, words",
  });

  const splitIntro = new SplitText(introRef.current, {
    type: "words, chars",
  });

  splitHeader.chars.forEach((char) => {
    if (char.closest(".header-word")) {
      char.classList.add(
        "bg-gradient-to-r",
        "from-primary",
        "via-secondary",
        "to-pink-500",
        "bg-clip-text",
        "text-transparent"
      );
    }
  });

  // main timeline
        const heroTl = gsap.timeline({
      delay: 2,
            onComplete: () => {
        gsap.set("body", { overflowY: "auto", overflowX: "hidden" });
      // buttons animate AFTER timeline finishes
      gsap.fromTo(portfolioBtnRef.current, {
        xPercent: -100,
        autoAlpha: 0,
      }, {
          autoAlpha: 1,
          xPercent: 0,
          duration: 0.8,
          ease:'power2.Out',
      });

      gsap.fromTo(hireBtnRef.current, {
        xPercent: 100,
        autoAlpha: 0,
      }, {
          autoAlpha: 1,
          xPercent: 0,
          duration: 0.8,
          ease:'power2.Out',
      });
    },
  });

  heroTl
    .from(splitHeader.chars, {
      y: () => gsap.utils.random(-200, 200),
      opacity: 0,
      stagger: 0.06,
      duration: .8,
      ease: "back.out(1.7)",
    })
    .from(
      splitIntro.words,
      {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.5"
    )
    .from(
      splitParagraph.lines,
      {
        y: 30,
        x: 50,
        opacity: 0,
        stagger: 0.06,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.5"
    );

  return () => {
    splitHeader.revert();
    splitParagraph.revert();
    splitIntro.revert();
  };
}, []);



  return (
    <section id="hero" className="w-screen h-[80dvh]">
      <div className="flex-center w-full h-full">
        <div className="left-col flex-center flex-col w-[50%]">
          <p ref={introRef} className="header-intro text-secondary text-lg">
            We elevate ideas into timeless designs.
          </p>
          <h1
            ref={headerRef}
            className="font-header text-7xl text-accent text-center"
          >
            Elevating Ideas Into <br />
            <span className="header-word">Visual Impact</span>
          </h1>
          <p ref={paraRef} className="hero-p text-white text-center">
            We believe great design is far more than just visual appeal—it is
            the true language of your brand. Every color, shape, and interaction
            communicates a story, and when done right, it resonates deeply with
            your audience. By merging artistry with strategy, we craft digital
            experiences that not only capture attention but also inspire trust,
            evoke emotion, and build meaningful connections. Our mission is to
            transform your ideas into powerful designs that leave a lasting
            impression and set your brand apart in today’s crowded digital
            landscape.
          </p>
          <div className="button flex-center gap-4 mt-8">
            <button
              ref={portfolioBtnRef}
              className="btn-portfolio opacity-0 btn font-btn btn-general"
            >
              Portfolio
            </button>
            <button
              ref={hireBtnRef}
              className="btn-hire opacity-0 btn font-btn bg-secondary text-white"
            >
              Hire Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
