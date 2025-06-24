import React from "react";

import { useLoaderData } from "react-router";
import MapComponent from "./MapComponent ";

const Coverage = () => {
  const serviceCenters = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        We are available in 64 districts
      </h1>

      {/* Later you can add your search box here */}
      {/* <SearchDistrictBox /> */}

      <MapComponent serviceCenters={serviceCenters} />
    </div>
  );
};

export default Coverage;
