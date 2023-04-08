import React from "react";
import { Link } from "react-router-dom";
import BL from "../assets/GarbageBL.png";
import TR from "../assets/GarbageTR.png";

interface Props {}

const LandingPage = ({}) => {
  return (
    <div className="max-w-[1140px] h-[100vh] mx-auto flex flex-col justify-center items-center overflow-hidden">
      <div className="flex flex-col md:w-[904px] md:h-[524px] px-6">
        <div>
          <h1 className="Afont font-bold text-[7.5rem] text-center">GARBAGE</h1>
          <h3 className="Afont font-bold text-[3.8rem] tracking-wide text-center -mt-8 mb-8">
            Classification system
          </h3>
        </div>
        <p className="Afont px-4 font-semibold text-[1.8rem] text-center mb-8">
          Classifying garbage into 10 categories: metal, glass, Biological,
          Paper, Battery, Trash, Cardboard, Shoes, Clothes and Plastic.
        </p>
        <div className="w-full flex justify-center items-center py-2">
          <Link
            to={"/model"}
            className="px-8 py-1 text-[2rem] font-medium rounded-lg transition-all bg-blue-600 hover:bg-blue-800 active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </div>

      <img
        src={BL}
        alt="bl garbage image"
        className="fixed scale-90 -left-[56px] top-[590px]"
      />

      <img
        src={TR}
        alt="tr garbage image"
        className="fixed scale-90 left-[1050px] -top-[30px]"
      />
    </div>
  );
};

export default LandingPage;
