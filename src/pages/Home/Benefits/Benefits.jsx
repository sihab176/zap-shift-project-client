import React from "react";

// You can replace these images with real ones in /assets or /public
import TrackingImg from "../../../assets/live-tracking.png";
import SafeDeliveryImg from "../../../assets/safe-delivery.png";
import SupportImg from "../../../assets/safe-delivery.png";

const benefits = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: TrackingImg,
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: SafeDeliveryImg,
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: SupportImg,
  },
];

const Benefits = () => {
  return (
  <section className="py-10 px-4 bg-base-100">
  <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>

  <div className="space-y-8 max-w-6xl mx-auto">
    {benefits.map((item) => (
      <div
        key={item.id}
        className="flex flex-col md:flex-row md:items-stretch gap-6 bg-base-200 shadow-md p-6 rounded-xl"
      >
        {/* Left image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={item?.image}
            alt={item.title}
            className="w-24 h-24 object-contain mx-auto md:mx-0"
          />
        </div>

        {/* Vertical divider for desktop, horizontal divider for mobile */}
        <div className="hidden md:block border-l-2 border-dashed border-gray-400 mx-2"></div>
        <div className="block md:hidden border-t-2 border-dashed border-gray-400 my-2"></div>

        {/* Right content */}
        <div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default Benefits;
