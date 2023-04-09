import Heading from "../components/Heading";
import ResultCard from "../components/ResultCard";
import { Link, redirect, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface Props {}

const Result = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { result } = location.state;

  return (
    <div className="max-w-[1140px] h-full mx-auto flex flex-col justify-start items-center py-[100px]">
      <Heading />

      <div className="w-full flex justify-center items-center mt-14 gap-4">
        <Link
          to="/"
          className="kanit flex justify-center items-center gap-2 w-[171px] bg-gray-300 py-2 text-blue-500 rounded-lg text-xl font-medium "
        >
          Back to home
        </Link>
        <Link
          to="/model"
          className="kanit flex justify-center items-center gap-2 w-[171px] bg-blue-500 py-2 text-white rounded-lg text-xl font-medium"
        >
          New Predict
        </Link>
      </div>

      <div className="w-full max-h-[720px] overflow-y-scroll flex flex-wrap justify-start mt-14 gap-6 overflow-hidden px-4">
        {result.length > 0 &&
          result.map((r: { imgName: string; imgData: string; output: string; }) => (
            <ResultCard
              filename={r.imgName}
              img={r.imgData}
              output={r.output}
            />
          ))}
      </div>
    </div>
  );
};

export default Result;
