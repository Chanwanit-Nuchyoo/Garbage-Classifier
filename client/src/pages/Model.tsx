import React, { useState } from "react";
import Heading from "../components/Heading";
import FileUploadArea from "../components/FileUploadArea";
import FilePreview from "../components/FilePreview";

interface Props {}

const Model = ({}) => {
  const [imageFiles, setImageFiles] = useState([]);
  return (
    <div className="max-w-[1140px] h-full mx-auto flex flex-col justify-start items-center py-[100px]">
      <Heading />
      <p className="mt-8 text-2xl text-center px-9 font-bold Afont">
        Classifying garbage into 10 categories: metal, glass, Biological, Paper,
        Battery, Trash, Cardboard, Shoes, Clothes and Plastic.
      </p>
      <div className="flex justify-center items-center w-full mt-14 gap-4">
        <FileUploadArea />
        <FilePreview />
      </div>
    </div>
  );
};

export default Model;
