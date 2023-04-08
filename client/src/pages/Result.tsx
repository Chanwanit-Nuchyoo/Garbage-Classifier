import Heading from "../components/Heading";
import battery from "../assets/battery1 1.png";
import bottle from "../assets/plasticbottle.jpg";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import ResultCard from "../components/ResultCard";
import { Link } from "react-router-dom";

interface Props {}

const Result = ({}) => {
  return (
    <div className="max-w-[1140px] h-full mx-auto flex flex-col justify-start items-center py-[100px]">
      <Heading />

      <div className="w-full flex justify-center items-center mt-14 gap-4">
        <Link
          to="/"
          className="kanit flex justify-center items-center gap-2 w-[171px] bg-gray-300 py-2 text-blue-500 rounded-lg text-xl font-medium "
        >
          Back
        </Link>
        <Link
          to="/model"
          className="kanit flex justify-center items-center gap-2 w-[171px] bg-blue-500 py-2 text-white rounded-lg text-xl font-medium"
        >
          New Predict
        </Link>
      </div>

      <div className="w-full flex flex-wrap justify-start mt-14 gap-8 overflow-hidden px-4">
        <ResultCard filename="a" img={battery} output="a" />
        <ResultCard filename="a" img={battery} output="a" />
        <ResultCard filename="a" img={battery} output="a" />
        <ResultCard filename="a" img={battery} output="a" />
        <ResultCard filename="a" img={battery} output="a" />
        <ResultCard filename="a" img={battery} output="a" />
        <ResultCard filename="a" img={battery} output="a" />
        <ResultCard filename="a" img={battery} output="a" />
      </div>
    </div>
  );
};

export default Result;
