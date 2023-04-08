import Dropzone from "react-dropzone";
import imglogo from "../assets/imglogo.png";
import React from "react";

type Props = {};

const FileUploadArea = (props: Props) => {
  return (
    <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div
            className="border-[3px] border-spacing-4 border-dashed border-black w-[560px] h-[460px] bg-white rounded-lg text-black flex flex-col justify-center items-center"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <img src={imglogo} />
            <p className=" mt-8 text-2xl font-medium">
              <span className=" text-[#007AFF]">Drop files here</span> or Click
              to upload
            </p>
            <p className=" mt-2 text-slate-700 text-base">Supports: JPG, PNG</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default FileUploadArea;
