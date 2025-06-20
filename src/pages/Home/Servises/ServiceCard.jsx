// src/components/ServiceCard.jsx
import {
  FaShippingFast,
  FaGlobe,
  FaBoxes,
  FaMoneyBillWave,
  FaBuilding,
  FaUndoAlt,
} from "react-icons/fa";

const iconMap = {
  "Express & Standard Delivery": (
    <FaShippingFast className="text-3xl text-primary" />
  ),
  "Nationwide Delivery": <FaGlobe className="text-3xl text-primary" />,
  "Fulfillment Solution": <FaBoxes className="text-3xl text-primary" />,
  "Cash on Home Delivery": (
    <FaMoneyBillWave className="text-3xl text-primary" />
  ),
  "Corporate Service / Contract In Logistics": (
    <FaBuilding className="text-3xl text-primary" />
  ),
  "Parcel Return": <FaUndoAlt className="text-3xl text-primary" />,
};

const ServiceCard = ({ service }) => {
  const { title, description } = service || {};
  return (
    <div className="card bg-base-100 shadow-xl hover:bg-[#CAEB66] space-y-8 p-10 transition-transform hover:scale-105 duration-300 text-center">
      <div className="flex justify-center">
        <h1 className="  bg-radial-[at_50%_75%] from-sky-200 via-blue-100 to-gray-400 to-90% rounded-full  p-10 w-28">{iconMap[title]}</h1>
      </div>
      <div className=" items-center  mb-4">
        <h2 className=" text-lg font-semibold text-center">{title}</h2>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
