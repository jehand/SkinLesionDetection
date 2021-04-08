# Skin Lesion Detection Using Machine Learning!

A webapp made to automatically detect the type of skin lesion present using a CNN and also give the user the predicted optimal technique for detection. The model was built using Tensorflow with data from Task 3 of the ISIC2018 challenge.

## Table of Contents

1. Backend - Contains Python files and the Flask server to make a prediction
2. Client - Contains the code to run the webapp
3. Deliverables - Contains PDFs of all the deliverable files
4. Plots - Training plot and confusion matrix for the cancer model
5. Project.ipynb - Notebook for the training of the models

## Running the app
To run the webapp, we first need to install all dependencies and get the flask server running! To do this, we first need to move into the "backend" directory. We do this using the command:
```
cd backend
```
Now, to install all backend dependencies run the command:
```
pip install -r requirements.txt
```
After this, you should be able to start the Flask server. We do this by running:
```
python app.py
```
The Flask server should begin running after this. If not, feel free to reach out to us and we will look into it! Now for the frontend. Open a new terminal window (to not disturb the server) and switch into the client directory using:
```
cd client
```
Next, install the frontend dependencies using:
```
npm install
```
Finally, we can now run the webapp! Run the following commands and the webapp should open in your http://localhost:3000 (if it does not, again feel free to contact us).
```
npm run build
npm run start
```
Once the webpage opens, upload your image and click "Get Prediction" to get your prediction on the type of skin lesion present and the best methods for diagnosis. Happy predicting!

## Data

Our data was extracted from the “ISIC 2018: Skin Lesion Analysis Towards Melanoma Detection” grand challenge datasets [1][2].

[1] Tschandl P., Rosendahl C. & Kittler H. The HAM10000 dataset, a large collection of multi-source dermatoscopic images of common pigmented skin lesions. Sci. Data 5, 180161 doi.10.1038/sdata.2018.161 (2018)

[2] Noel Codella, Veronica Rotemberg, Philipp Tschandl, M. Emre Celebi, Stephen Dusza, David Gutman, Brian Helba, Aadi Kalloo, Konstantinos Liopyris, Michael Marchetti, Harald Kittler, and Allan Halpern: “Skin Lesion Analysis Toward Melanoma Detection 2018: A Challenge Hosted by the International Skin Imaging Collaboration (ISIC)”, 2018; arXiv:1902.03368.
