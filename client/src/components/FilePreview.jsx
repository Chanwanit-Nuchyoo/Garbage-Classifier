import React from "react";
import { AiFillFileImage } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const FilePreview = ({ images, onDelete, onSubmit, setLoad }) => {
  return (
    <div className="flex-[1] w-full h-[468px] flex flex-col justify-end border">
      <div className="w-full h-[400px] rounded-lg flex flex-col items-center bg-slate-100 shadow-md overflow-hidden">
        <div className="w-full flex justify-center items-center p-4 bg-gray-800 text-white">
          Files
        </div>
        <div className="flex flex-col w-full h-full">
          <div className="w-full h-[260px] py-3 px-4 overflow-y-scroll">
            {images &&
              images.map((img,index) => (
                <div key={index} className="flex justify-start items-center">
                  <div className="flex-[3] flex gap-2 justify-start items-center pl-4 overflow-hidden">
                    <AiFillFileImage className="text-3xl" />
                    <p className="truncate w-[200px]">
                      {img.name}
                    </p>
                  </div>
                  <div className="flex-[1] text-2xl flex items-center justify-center">
                    <RxCross2 onClick={()=>{onDelete(index)}} className="hover:text-red-500 hover:scale-[1.1] transition-all" />
                  </div>
                </div>
              ))}
          </div>
          <div className="flex-1 flex justify-center items-center">
            <button onClick={()=>{
                setLoad(true)
                onSubmit();
            }} className="px-8 py-2 rounded-lg text-base">Predict</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilePreview;
