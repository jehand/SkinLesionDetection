import axios from 'axios';

export const getImagePrediction = (data) => {
    return axios.post('/predict/image', data)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      alert(err);
    })
}