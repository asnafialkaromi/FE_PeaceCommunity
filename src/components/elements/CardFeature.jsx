import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CardFeature = (props) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  const { Img, Title, desc } = props;
  return (
    <div data-aos="fade-down"
    data-aos-duration="2000">
      <div className="card md:w-fit sm:max-w-xl bg-slate-100 shadow-xl w-sm h-fit sm:flex-row px-10 py-4 justify-center items-center">
        <img className="h-fit w-fit" src={Img} alt="Shoes" />
        <div className="card-body sm:text-left text-center text-black">
          <h2 className="text-2xl font-bold">{Title}</h2>
          <p className="">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFeature;
