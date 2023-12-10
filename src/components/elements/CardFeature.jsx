import React from "react";
import AdminControl from "../../assets/img/admin-control.png";

const CardFeature = () => {
  return (
    <div>
      <div className="card md:w-fit sm:max-w-xl bg-slate-100 shadow-xl w-sm h-fit sm:flex-row px-10 py-4 justify-center items-center">
        <img className="h-fit w-fit" src={AdminControl} alt="Shoes" />
        <div className="card-body sm:text-left text-center text-black">
          <h2 className="text-2xl font-bold">User Control</h2>
          <p className="">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardFeature;
