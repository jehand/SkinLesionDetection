import axios from 'axios';

export const getCancerPrediction = (data) => {
    return axios.post('/predict/cancer', data)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      alert(err);
    })
}

export const getDiagnosisPrediction = (data) => {
  return axios.post('/predict/diagnosis', data)
  .then(res => {
    return res.data;
  })
  .catch(err => {
    alert(err);
  })
}