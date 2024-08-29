import React from 'react';
import coin from "../../assets/Coins.png";

function PricingTable() {
  const plans = [
    {
      title: "BASIC",
      price: "₹59",
      period: "/100",
      features: [
        { text: "No Ads", note: null },
        { text: "Notes", note: null },
        { text: "MCQ Test", note: null },
        { text: "Playback", note: null },
        { text: "Doubt Session (2 Sessions)", note: null },
        { text: "Feedback Report", note: null },
      ],
      badge: "BASIC",
      badgeColor: "bg-yellow-200 text-blue-500",
      borderColor: "border-gray-500",
    },
    {
      title: "STANDARD",
      price: "₹99",
      period: "/100",
      features: [
        { text: "No Ads", note: null },
        { text: "Notes", note: null },
        { text: "MCQ Test", note: "(Moderate)" },
        { text: "Playback", note: null },
        { text: "Doubt Session (5 Sessions)", note: null },
        { text: "Feedback Report", note: null },
      ],
      badge: "STANDARD",
      badgeColor: "bg-yellow-200 text-blue-500",
      borderColor: "border-yellow-400",
    },
    {
      title: "PREMIUM",
      price: "₹149",
      period: "/100",
      features: [
        { text: "No Ads", note: null },
        { text: "Notes", note: null },
        { text: "MCQ Test", note: "(Plentiful)" },
        { text: "Playback", note: null },
        { text: "Doubt Session (No Limit)", note: null },
        { text: "Feedback Report", note: null },
      ],
      badge: "PREMIUM",
      badgeColor: "bg-yellow-200 text-blue-500",
      borderColor: "border-gray-500",
    },
  ];

  return (
    <div className="video-page-background py-12 text-center flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl md:text-5xl font-bold font-[poppins]">Choose The Plan That’s Right For You</h1>
      <p className="text-lg mt-4 font-medium grad font-[poppins] bg-gradient-to-b from-[#969696] to-[#303030] text-transparent bg-clip-text">Affordable and scalable options for everyone.</p>
      <div className="flex flex-col md:flex-row w-[90%] md:w-[80%] justify-center gap-6 md:gap-16 items-center lg:bg-opacity-30 lg:bg-[#FFFFFF] mt-10 py-10 px-4 md:px-8 rounded-3xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-[#000000] text-white shadow-lg rounded-lg p-8 w-full md:w-[28%] ${
              index === 1 ? 'md:scale-110 md:z-10' : 'bg-opacity-70'
            } transition-all duration-300 `}
          >
            <span className={`absolute top-0 left-0 text-xs ml-4 mt-4 px-3 py-1 rounded-full ${plan.badgeColor}`}>
              {plan.badge}
            </span>
            <div className="flex items-center justify-between mt-8">
              <h2 className="lg:text-3xl  font-bold text-white text-left">
                {plan.price}
                <span className="text-2xl"> {plan.period} </span>
              </h2>
              <img src={coin} alt="Coin" className="w-6 h-6 ml-2" />
            </div>
            <p className="text-lg mt-3 text-left">What's included</p>
            <ul className="mt-4 space-y-3 text-sm text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill='white'
                    className="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0z" />
                    <path d="M10.97 5.97a.75.75 0 0 1 1.07 1.05L7.477 11.6l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.42 2.42 3.48-3.48z" />
                  </svg>
                  <span className="ml-3">
                    {feature.text}
                    {feature.note && <span className="text-sm text-gray-400">{feature.note}</span>}
                  </span>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-white text-blue-500 text-sm font-semibold py-3 rounded border-2 border-blue-500 hover:bg-gray-100 transition">
              Continue 🡥
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingTable;
