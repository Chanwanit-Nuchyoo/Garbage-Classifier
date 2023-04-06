import React from "react";

const Results = ({ results }) => {
  return (
    <div>
      <h1>Result</h1>
      <div className="flex flex-col gap-4">
        {results &&
          results.map((r, index) => (
            <div key={index} className="w-full flex gap-4 justify-start items-center rounded-lg shadow-lg border-2 border-black bg-yellow-100">
              <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src={`data:image/jpeg;base64,${r.imgData}`}
                  alt={r.imgName}
                />
              </div>
              <div>
                  <h3>ชื่อไฟล์ : {r.imgName}</h3>
                  <h3>ผลลัพธ์ : {r.output}</h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Results;
