import React from "react";
import Marquee from "react-fast-marquee";

// Import each logo individually (from /src/assets/logos/)
import Amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import StartPeople from "../../../assets/brands/start-people 1.png";
import Start from "../../../assets/brands/start.png";

const ClientLogos = () => {
  return (
    <div className="py-8 mx-20 bg-base-100">
      <h2 className="text-2xl font-bold text-center mb-6">
        We've helped thousands of sales teams
      </h2>

      <Marquee
        direction="left"
        speed={50}
        gradient={false}
        pauseOnHover
        className="flex items-center"
      >
        <div className="mx-12">
          <img src={Amazon} alt="Google" className=" w-auto" />
        </div>
        <div className="mx-12">
          <img src={amazon_vector} alt="Meta" className=" w-auto" />
        </div>
        <div className="mx-12">
          <img src={casio} alt="Amazon" className=" w-auto" />
        </div>
        <div className="mx-12">
          <img src={moonstar} alt="Netflix" className=" w-auto" />
        </div>
        <div className="mx-12">
          <img src={randstad} alt="Apple" className=" w-auto" />
        </div>
        <div className="mx-12">
          <img src={StartPeople} alt="Microsoft" className=" w-auto" />
        </div>
        <div className="mx-12">
          <img src={Start} alt="Tesla" className=" w-auto" />
        </div>
      </Marquee>
    </div>
  );
};

export default ClientLogos;
