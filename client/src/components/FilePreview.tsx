import File from "./File";
import arrow from "../assets/arrow.png";

interface Props {}

const FilePreview = (props: Props) => {
  return (
    <div className="w-[460px] h-[460px] bg-white rounded-lg flex flex-col text-black overflow-hidden">
      <div className="kanit w-full flex justify-center items-center h-[54px] bg-gray-200 text-2xl font-medium">
        Files
      </div>
      <div className="px-8 py-4 flex flex-col gap-1 h-[340px] overflow-y-scroll scrollbar scrollbar-rounded-full scrollbar-thumb-gray-900 scrollbar-track-gray-100">
        <File filename="hello.jpg" index={0} />
      </div>
      <div className="flex justify-center items-center flex-1">
        <button className="flex gap-2 bg-blue-500 px-8 py-2 text-white rounded-lg text-xl font-medium">
          <img className="scale-75" src={arrow} />
          <p className="kanit">Predict</p>
        </button>
      </div>
    </div>
  );
};

export default FilePreview;
