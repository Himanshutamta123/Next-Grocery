import React from "react";
const facliltyData = [
  {
    head: "Best prices & offers",
    para: "Orders $50 or more",
  },
  {
    head: "Free delivery",
    para: "24/7 amazing services",
  },
  {
    head: "Great daily deal",
    para: "When you sign up",
  },
  {
    head: "Wide assortment",
    para: "Mega Discounts",
  },
  {
    head: "Easy returns",
    para: "Within 30 days",
  },
];

const Facility = () => {
  return (
    <div className="w-[94%] max-w-[100rem] m-auto grid grid-cols-5 gap-6 my-10">
        {facliltyData.map((items) => {
            return(
                <div className="bg-[#F4F6FA] rounded-lg p-4 text-center">
                    <h3 className="font-semibold text-lg">{items.head}</h3>
                    <p className="text-[#7E7E7E]">{items.para}</p>
                </div>
            )
        })}
    </div>
  );
};

export default Facility;
