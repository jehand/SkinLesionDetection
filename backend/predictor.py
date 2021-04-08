import numpy as np
import tensorflow as tf
from keras.preprocessing import image
from keras.models import load_model
from PIL import Image
import os

print(os.getcwd())
size = (64,64)
cancer_types = ["Melanoma", "Melanocytic Nevus", "Basal Cell Carcinoma", "Actinic Keratosis / Bowen’s Disease (Intraepithelial Carcinoma)",
                "Benign Keratosis (Solar Lentigo / Seborrheic Keratosis / Lichen Planus-Like Keratosis)", "Dermatofibroma", 
                "Vascular Lesion"]

diagnosis_types = ["Reflectance Confocal Microscopy", "Histopathology", "Lesion Did Not Change During Digital Dermatoscopic Follow Up Over Two Years With At Least Three Images", "Consensus Of At Least Three Expert Dermatologists From A Single Image"]

def preprocess_image(pic):
    #img = image.load_img(pic, color_mode="rgb", target_size=size)
    img = Image.open(pic)
    img = img.resize(size)
    input_arr = image.img_to_array(img)
    input_arr = np.array([input_arr])  # Convert single image to a batch.
    return input_arr

def predict_cancer(request):
    f = request.files['image']
    img = preprocess_image(f)
    cancer = load_model("models/cancer_model.h5")
    predict_canc = cancer_types[np.argmax(cancer.predict(img))]
    return predict_canc
    
def predict_diagnosis(request):
    f = request.files['image']
    img = preprocess_image(f)
    diagnosis = load_model("models/diagnosis_model.h5")
    predict_diagnosis = diagnosis_types[np.argmax(diagnosis.predict(img))]
    return predict_diagnosis