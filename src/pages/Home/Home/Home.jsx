import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Servises/Services";
import ClientLogos from "../ClientLogos/ClientLogos";
import Benefits from "../Benefits/Benefits";
import BeMerchant from "../BeMerchant/BeMerchant";
import ReviewPagination from "../ReviewPagination/ReviewPagination";
import FAQSecion from "../FAQSection/FAQSecion";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <ClientLogos />
      <Benefits />
      <BeMerchant />
      <ReviewPagination />
      <FAQSecion />
    </div>
  );
};

export default Home;
