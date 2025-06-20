import React from "react";
import Image from "../../../assets/location-merchant.png";

const BeMerchant = () => {
  return (
    <div className="">
      <div className="flex items-center p-20 rounded-2xl bg-[#03373D] my-20 bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat">
        <div className="text-white space-y-6">
          <h1 className="text-4xl">
            Merchant and Customer Satisfaction <br /> is Our First Priority
          </h1>
          <p>
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex gap-6">
            <button className="px-5 py-2 rounded-full bg-[#CAEB66] text-black">
              Become a Merchant
            </button>
            <button className="px-5 py-2 rounded-full text-[#CAEB66] border border-[#CAEB66]">
              Earn with Profast Courier
            </button>
          </div>
        </div>
        <div>
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BeMerchant;
