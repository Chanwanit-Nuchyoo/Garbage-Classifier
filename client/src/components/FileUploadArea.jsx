import React from "react";
import Dropzone from "react-dropzone";
import {AiOutlineCloudUpload} from 'react-icons/ai'

const FileUploadArea = ({setImages:onImagesDrop}) => {
  return (
    <div className="flex-[1] flex flex-col justify-center items-center text-base font-semibold">
      <div className="text-xl">Upload files</div>
      <div className="mb-4">Accept only : <span className="text-red-500">Image files</span></div>
      <Dropzone onDrop={onImagesDrop}>
        {({ getRootProps, getInputProps, isDragActive }) => (
          <section className="flex flex-col justify-center items-center select-none cursor-pointer">
            <div
              className={`p-4 flex flex-col justify-center items-center text-center w-[600px] h-[400px] border-2 border-slate-600 rounded-lg border-dashed bg-slate-100`}
              {...getRootProps()}
            >
              <input {...getInputProps()} accept="image/*" />
              <div className="flex flex-col items-center">
                <AiOutlineCloudUpload className="text-3xl" />
                <p>Drop files here or click to upload.</p>
              </div>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
};

export default FileUploadArea;
