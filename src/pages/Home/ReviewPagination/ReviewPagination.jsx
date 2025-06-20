import React, { useState } from "react";
import quotetion from "../../../assets/reviewQuote.png"

const testimonials = [
  {
    id: 1,
    name: "Rosel Ahamed",
    role: "CTO",
    message:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    id: 2,
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    message:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    id: 3,
    name: "Nasir Uddin",
    role: "CEO",
    message:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
];

const ReviewPagination = () => {
  const [current, setCurrent] = useState(1); // Starts from 1-based index

  const handlePrev = () => {
    setCurrent((prev) => (prev === 1 ? testimonials.length : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length ? 1 : prev + 1));
  };

  return (
    <section className="py-16 bg-base-100 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-4">
        What our customers are sayings
      </h2>
      <p className="max-w-xl mx-auto text-base-content mb-12">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>

      <div className="flex justify-center items-center gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={t.id}
            className={` rounded-xl p-10 shadow-md max-w-md w-full transition-opacity duration-500 ${
              idx + 1 === current ? "opacity-100 bg-[#CAEB66]" : "opacity-30 "
            }`}
          >
            <div>
                <img src={quotetion} alt="" />
            </div>
            <p className="text-sm text-base-content mb-4 border-b border-dashed border-gray-400 pb-4">
              “{t.message}”
            </p>
            <div className="flex items-center gap-3 mt-4 justify-center">
              <div className=" ">
                {" "}
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                  </div>
                </div>
              </div>
              <div className="text-left">
                <p className="font-bold">{t.name}</p>
                <p className="text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button onClick={handlePrev} className="btn btn-circle btn-sm">
          ❮
        </button>

        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i + 1 === current ? "bg-primary" : "bg-base-300"
            }`}
          ></div>
        ))}

        <button onClick={handleNext} className="btn btn-circle btn-sm">
          ❯
        </button>
      </div>
    </section>
  );
};

export default ReviewPagination;
