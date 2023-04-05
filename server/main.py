from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import base64
from io import BytesIO
from keras import models # load model
from PIL import Image # open and resize image
import numpy as np 

model = models.load_model('./best_model.h5')

CATEGORIES = ['Metal', 'Glass', 'Biological', 'Paper', 'Battery', 'Trash', 'Cardboard', 'Shoes', 'Clothes', 'Plastic']

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

def preprocess_image(image_object):
    # resize image
    img = image_object.resize((100, 100))

    # convert image to numpy array
    img_array = np.array(img)

    # if the image is grayscale, convert it to RGB
    if len(img_array.shape) == 2:
        img_array = np.stack((img_array,) * 3, axis=-1)

    # ensure the image has 3 color channels
    if img_array.shape[2] == 4:
        img_array = img_array[..., :3]

    # reshape to required shape
    img_array = img_array.reshape(1, 100, 100, 3)

    # convert to float32
    img_array = img_array.astype('float32')
    
    # max-min normalize
    img_array /= 255
    
    # output = model.predict(x=img_array, batch_size=1, verbose=0)
    return img_array

@app.post("/predict")
async def predict(image: UploadFile):

    if not image.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Uploaded file is not an image")

    img_bytes = BytesIO(await image.read())

    img = Image.open(img_bytes)
    # image_bytes = await image.read()

    img_array = preprocess_image(img)

    output = CATEGORIES[np.argmax(model.predict(x=img_array, batch_size=1, verbose=0))]

    encoded_image = base64.b64encode(img_bytes.getvalue()).decode("utf-8")

    return {
        "filename": image.filename,
        "image": encoded_image,
        "output": output,
    }