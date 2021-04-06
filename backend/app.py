from flask import Flask, render_template, request
# Import your models
from predictor import predict

app = Flask(__name__)

# Base endpoint to perform prediction.
"""
@app.route('/', methods=['POST'])
def make_prediction():
    prediction = predict(request)
    return render_template('index.html', prediction=prediction, generated_text=None, tab_to_show='mnist')


@app.route('/', methods=['GET'])
def load():
    return render_template('index.html', prediction=None, generated_text=None, tab_to_show='mnist')
"""

@app.route('/predict/image', methods=['POST'])
def make_image_prediction():
    prediction = predict(request)
    print(prediction)
    return str(prediction)

if __name__ == '__main__':
    app.run(debug=True)