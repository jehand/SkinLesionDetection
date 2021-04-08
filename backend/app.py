from flask import Flask, request, jsonify
# Import your modelst
from predictor import predict_cancer, predict_diagnosis

app = Flask(__name__)

# Base endpoint to perform prediction.
@app.route('/predict/cancer', methods=['POST'])
def make_image_prediction():
    prediction_canc = predict_cancer(request)
    print(prediction_canc)
    return str(prediction_canc)

@app.route('/predict/diagnosis', methods=['POST'])
def make_diagnosis_prediction():
    prediction_diag = predict_diagnosis(request)
    print(prediction_diag)
    return str(prediction_diag)

if __name__ == '__main__':
    app.run(debug=True)