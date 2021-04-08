import React,{ Fragment,useState,useEffect,createRef,Component } from 'react';
import axios from 'axios';
import { getCancerPrediction, getDiagnosisPrediction } from 'api';
import Button from '@material-ui/core/Button';
import { MDBCloseIcon } from "mdbreact";

import './App.css';

const App = ()=> {
  const [predictionCancer, setPredictionCancer] = useState(-1);
  const [predictionDiagnosis, setPredictionDiagnosis] = useState(-1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    getCancerPrediction(formData)
    .then(res => {
      setPredictionCancer(res);
    })
    getDiagnosisPrediction(formData)
    .then(diag => {
      setPredictionDiagnosis(diag);
    })
  }

  const setFileAndImage = (file) => {
    setSelectedFile(file);
    if (file !== null){
      setImage(URL.createObjectURL(file));
    } else{
      setImage(null);
      setPredictionCancer(-1);
      setPredictionDiagnosis(-1);
    }
  }

  const removeImage = (file) => {
    // this is the line that you are looking for
    setImage((null));
    setPredictionCancer(-1);
    setPredictionDiagnosis(-1);
    document.getElementById("submit-image").reset();
  };

  useEffect(() => {
    //fake fetch data
    setImage(null);
  }, []);

  return (
    <div className="background">
       <div className="main-grid-container">
         <main className="main">
         <div className="skin-lesion"> <h1>Skin Lesion</h1><h1>Detection</h1></div>
         <div><h2>Find the type of skin lesion present in an image and be given the best method for detection</h2></div>
         <form id="submit-image" onSubmit={e => submitForm(e)} >
          <input 
            type="file"
            accept="image/x-png,image/jpeg"
            onChange={e => setFileAndImage(e.target.files[0])}
          /> <br/>
          <div className="user-image-div">
            {image == null ? null : (
            <img className="user-image" src={image}/>)}
            <Button className="cross" onClick={() => removeImage(image)}>{image == null ? null : (
              <h2>X</h2>) }
            </Button>
          </div>
          <Button className="predict" type="submit">
            <h3>Get Prediction</h3>
          </Button>
        </form>

        <p>{predictionCancer == -1 ? <h4>By Jehan Dastoor and Gargi Singh</h4> : <h5>The current prediction is: <span>{predictionCancer}</span></h5>}</p>
        <p>{predictionDiagnosis == -1 ? "" : <h5>Previously used method for diagnosis was: <span>{predictionDiagnosis}</span></h5>}</p>

         </main>

          <div className="image-div">
            <img className="main-image" src="https://i.imgur.com/bEEYOVI.png"/>
          </div>
      </div>
     
  </div>
  )
}

export default App;