import { useState } from "react";

const data=[{
  WomenImage:"/images/images1.jpg",
  WomenName:"Monet Goode",
  WomenTitle:"Founder",
  MenImage:"/images/images3.jpg",
  MenName:'Manvydas Kugis',
  MenTitle:'Digital art Director'
}]

const Card = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="mt-2 text-2xl font-medium	not-italic  md:mt-2 text-lg text-center font-mono	not-italic  hover:text-tahiti " > Meet The Team</p>
      <div className="mt-6  ">
        <img src={"/images/images1.jpg"} width={400} />
        <div >
          <p className="text-xl font-mono text-metal ">Monet Goode</p>
          <p className="text-xl font-mono  text-bermuda">Founder</p>
        </div>
      </div>
      <div className="relative bottom-72 left-60">
        <img src={"/images/images3.jpg"} width={400}  class=" hover:animate-waving-hand  md:w-80 right-20" />
        <div className=" text-center sm:text-left">
          <p className="text-xl font-mono text-metal  sm:text-left">Audrius Linkus</p>
          <p className="text-xl font-mono  text-bermuda">Heade Of Interactive</p>
        </div>
      </div>
      <div className="-mt-60 sm:text-left">
        <img src={"/images/images1.jpg"} width={400} />
        <div  >
          <p className="text-xl font-mono text-metal">Monet Goode</p>
          <p className="text-xl font-mono  text-bermuda">Founder</p>
        </div>
      </div>
      <div className="relative bottom-80 left-60">
        <img src={"/images/images4.jpg"} width={400}  class=" hover:animate-waving-hand md:w-80" />
        <div className=" text-center sm:text-left" >
          <p className="text-xl font-mono text-metal  sm:text-left">Audrius Linkus</p>
          <p className="text-xl font-mono text-bermuda">Heade Of Interactive</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
