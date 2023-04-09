import React from "react";

type Props = {
  img: string;
  filename: string;
  output: string;
};

const ResultCard = (props: Props) => {
  const { img, filename, output } = props;

  return (
    <div className="text-black select-none flex-shrink-0 flex flex-col w-[250px] h-full bg-white rounded-lg overflow-hidden">
      <div className="w-full h-[246px]">
        <img
          src={`data:image/jpeg;base64,${img}`}
          draggable="false"
          className="select-none w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 p-4">
        <div className="flex gap-2 justify-start items-center overflow-hidden">
          <p className=" text-xl text-gray-500">ชื่อไฟล์ :</p>
          <p className=" text-2xl truncate flex-1">{filename}</p>
        </div>
        <div className="flex gap-2 justify-start items-center overflow-hidden">
          <p className=" text-xl text-gray-500">ผลลัพธ์ :</p>
          <p className=" text-2xl truncate flex-1 text-blue-600">{output}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
