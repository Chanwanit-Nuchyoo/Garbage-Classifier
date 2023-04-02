import { useState } from "react";

function App() {
  const [image, setImage] = useState(null);

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("picture", e.target.img.files[0]);

    const response = await fetch("http://localhost:8000/predict", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    setImage(`data:image/png;base64,${result.picture}`);
  };

  return (
    <div>
      <form method="post" onSubmit={handleImageSubmit}>
        <label htmlFor="img">Select image:</label>
        <input type="file" id="img" name="img" accept="image/*" />
        <input type="submit" value="Submit" />
      </form>

      {image && <img src={image} alt="Uploaded" />}
    </div>
  );
}

export default App;