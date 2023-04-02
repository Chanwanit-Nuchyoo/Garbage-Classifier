from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import base64
from io import BytesIO

app = FastAPI()

# Allow all origins to make requests to our API
origins = ["*"]

# Add the CORS middleware to the application
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"Hello": "World"}


@app.post("/predict")
async def predict(picture: UploadFile):

    if not picture.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Uploaded file is not an image")

    image_bytes = await picture.read()
    encoded_image = base64.b64encode(image_bytes).decode("utf-8")

    return {
        "filename": picture.filename,
        "picture": encoded_image,
        "predicted_class": "shiba inu",
    }