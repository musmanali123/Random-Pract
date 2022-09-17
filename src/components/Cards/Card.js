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
      <p className="mt-2 text-2xl font-medium	not-italic" > Meet The Team</p>
      <div className="mt-6">
        <img src={"/images/images1.jpg"} width={400} />
        <div >
          <p>Monet Goode</p>
          <p>Founder</p>
        </div>
      </div>
      <div className="relative bottom-72 left-60">
        <img src={"/images/images3.jpg"} width={400} />
        <div >
          <p>Audrius Linkus</p>
          <p>Heade Of Interactive</p>
        </div>
      </div>
      <div className="-mt-60">
        <img src={"/images/images1.jpg"} width={400} />
        <div >
          <p>Monet Goode</p>
          <p>Founder</p>
        </div>
      </div>
      <div className="relative bottom-80 left-60">
        <img src={"/images/images4.jpg"} width={400} />
        <div >
          <p>Audrius Linkus</p>
          <p>Heade Of Interactive</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
