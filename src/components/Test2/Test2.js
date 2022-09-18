import { motion, useScroll } from "framer-motion";
import { useEffect } from "react";
import ParallaxText from "./Parallex";
const windowInnerWidth = window.innerWidth;
const windowInnerHeight = window.innerHeight;

const dataupper = [
  {
    text: "  Lorem Ipsum is simply dummy Lorem Ipsum",
    baseVelocity:1
  },
  {
    text: "  Lorem Ipsum is simply dummy Lorem Ipsum",
    baseVelocity:2
  },
  {
    text: "  Lorem Ipsum is simply dummy Lorem Ipsum",
    baseVelocity:3
  },
];

const datalower = [
  {
    text: "  Lorem Ipsum is simply dummy Lorem Ipsum",
    baseVelocity:4
  },
  {
    text: "  Lorem Ipsum is simply dummy Lorem Ipsum",
    baseVelocity:5
  },
  {
    text: "  Lorem Ipsum is simply dummy Lorem Ipsum",
    baseVelocity:6
  },
];

const Test = () => {
  const { scrollYProgress } = useScroll();
  console.log("🚀 ~ scrollYProgress", scrollYProgress);

  return (
    <div>
      <div className="flex grid-flow-row-dense align-text-top">
        <img
          src={"/images/Image.jpeg"}
          // width={1500}
          className="object-cover xl:w-1/2 h-96 lg:w-96 h-96 md:w-64 h-64 sm:w-44 h-44 "
        />
        <img src={"/images/patternfills.gif"} className='xl:w-1/2 h-96 lg:w-96 h- md:w-64 h-64 sm:w-44 h-44 ' />
        {/* <div class="mix-blend-hard-light"></div> */}
        <img
          src={"/images/screen-s.jpg"}
          className="z-20 relative xl:w-1/2 h-96 lg:w-96 h-96 md:w-64 h-64 sm:w-44 h-44 "
          // width={250}
        />
      </div>
      
      <div className="flex justify-evenly xl: bg-baby-Pinl pt-6 pb-3 h-auto">
        <img src={"/images/download.jpg"} width={80} />
        <div className="flex justify-around">
          <span className="  xl:text-sm relative right-6 lg:text-sm relative right-6 md:text-xs relative right-1  sm:text-xs font-bold">
            Gas Records
          </span>
          <div className=" relative ml-4 text-sm font-mono font-bold ">
            <p>hbuvivi</p>
            <p>hbuvivi</p>
            <p>hbuvivi</p>
            <p>hbuvivi</p>
          </div>
          <div className=" relative ml-8 text-sm font-mono font-bold ">
            <p>hbuvivi</p>
            <p>hbuvivi</p>
            <p>hbuvivi</p>
          </div>
        </div>
        <img src={"/images/patternfills.gif"} width={800} className="h-20" />
      </div>
      <div className="flex mb-4 bg-forest-green  hover:bg-baby-Pinl border-x-midnight text-white font-mono font-semibold text-lg">
        <p className="ml-16">link</p>
        <span className="ml-6">|</span>
        <p className="ml-9">NOMOM NKINININN</p>
      </div>
      <div className="flex flex-col justify- mt-1 bg-tahiti">
        {datalower.map(({ text,baseVelocity }) => {
          return (
            <>
              <div className=" text-white  pb-5">
                <ParallaxText
                  baseVelocity={baseVelocity}
                  className=" xl:text-6xl mb-2 font-mono bg-forest-green hover:bg-red-clr lg:text-6xl mb-2 font-mono bg-forest-green hover:bg-red-clr md:text-3xl mb-2 font-mono bg-forest-green hover:bg-red-clr"
                >
                  {text}
                </ParallaxText>
              </div>
            </>
          );
        })}
         <img
          src={"/images/screen-s.jpg"}
          className="z-20 absolute right-0 mb-1"
          width={20}
        />
        <div className="pt-1">
        {dataupper.map(({ text,baseVelocity }) => {
          return (
            <>
              <div className=" text-white  pb-5">
                <ParallaxText
                  baseVelocity={baseVelocity}
                  className=" xl:text-6xl mb-2 font-mono bg-forest-green hover:bg-red-clr lg:text-6xl mb-2 font-mono bg-forest-green hover:bg-red-clr md:text-3xl mb-2 font-mono bg-forest-green hover:bg-red-clr"
                  >
                  {text}
                </ParallaxText>
              </div>
            </>
          );
        })}
          
        </div>
      </div>
      <div className="flex flex-row justify-around bg-red-clr">
        <p className=" xl:text-5xl lg:text-4xl md:text-lg" >INFO@JSNJSDSDJSD</p>
        <span className=" xl:text-5xl lg:text-4xl md:text-lg" >|</span>
        <p className=" xl:text-5xl lg:text-4xl md:text-xs" >©
2022 GASS RECORDS. DESIGN AND DEVELOPMENT BY ERIC HU.<br/>
GASS WORDMARK DRAWN FROM THE TYPEFACE MILLIONAIRE, PUBLISHED BY ALTIPLANO.
</p>
      </div>
    </div>
  );
};

export default Test;
