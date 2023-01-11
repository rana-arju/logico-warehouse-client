import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

import banner from "../../images/Banner.png";

const Banner = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        maxWidth: "100%",
        height: "600px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="banner_contain">
          <h1 className="banner_heading">Up To 25% Discount Check it Out</h1>
          <p className="banner_contain_pre">
            Feature Packed at a better value then even Powerful sensors to
            monitor your fitness
          </p>
          <NavLink to="/" className=" inline-block border-0 no-underline pt-8">
            <button className=" flex text-[#fff] items-center xl:text-[18px] bg-[#ff7f50] px-[34px] py-[16px] rounded-3xl font-sans font-bold hover:bg-[#444c38] duration-300 ">
              Shop Now <AiOutlineArrowRight className="xl:text-[18px] ml-1" />
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Banner;
