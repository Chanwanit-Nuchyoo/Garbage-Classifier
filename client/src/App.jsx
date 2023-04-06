import { useState, useEffect } from "react";
import FileUploadArea from "./components/FileUploadArea";
import FilePreview from "./components/FilePreview";
import Results from "./components/Results";

function App() {
  const [images, setImages] = useState([]);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function onImagesDrop(image) {
    const newImages = [...images];
    image.forEach((i) => newImages.push(i));
    setImages(newImages);
  }

  function onImageDelete(index) {
    const newImages = images.filter((img, i) => i !== index);
    setImages(newImages);
  }

  const handleImageSubmit = async () => {
    if (images.length <= 0) {
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    setImages([]);

    const response = await fetch("http://localhost:8000/predict", {
      method: "POST",
      body: formData,
    })
      .then((r) => r.json())
      .catch((err) => setError(err.message));

    // const newResult = response.image.map((r) => {
    //   const imageUrl = URL.createObjectURL(new Blob([r.image]));
    //   return { image: imageUrl, name: r.name, output: r.output };
    // });

    setResults(response);
    setIsLoading(false);
  };

  return (
    <div>
      <div className="container mx-auto p-4 w-full min-h-[100vh] max-w-[1000px]">
        <div className="flex gap-4 justify-start items-start mx-auto mb-10">
          <FileUploadArea setImages={onImagesDrop} />
          <FilePreview
            images={images}
            onDelete={onImageDelete}
            onSubmit={handleImageSubmit}
            setLoad={setIsLoading}
          />
        </div>
        {results.length !== 0 && <Results results={results} />}
      </div>
    </div>
  );
}

export default App;
