import { useState } from "react";

function App() {
  const [image, setImage] = useState(null);
  const [output, setOutput] = useState(null);

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", e.target.img.files[0]);

    const response = await fetch("http://localhost:8000/predict", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    setImage(`data:image/png;base64,${result.image}`);
    setOutput(result.output)
  };

  return (
    <div className="my-4 w-full flex flex-col items-center justify-center">
      <form method="post" onSubmit={handleImageSubmit}>
        <label className="p-4" htmlFor="img">Select image:</label>
        <input className="p-4" type="file" id="img" name="img" accept="image/*" />
        <button className="p-1 bg-slate-600 rounded-lg text-white" type="submit">Predict</button>
      </form>

      <div className="w-[300px] h-[300px]">
        {image && <img className="rounded-lg mt-4" src={image} alt="Uploaded" />}
        {output && <p className="text-4xl font-bold text-center mt-4">Output : {output}</p>}
      </div>
    </div>
  );
}

export default App;