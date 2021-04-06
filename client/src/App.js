import React,{Fragment,useState,useEffect,createRef,Component} from 'react'
import axios from 'axios';
import { getImagePrediction } from 'api';
import Button from '@material-ui/core/Button'

import './App.css';

const App = ()=> {
  const [prediction, setPrediction] = useState(-1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    getImagePrediction(formData)
    .then(res => {
      setPrediction(res);
    })
  }

  const setFileAndImage = (file) => {
    setSelectedFile(file);
    if (file !== null){
      setImage(URL.createObjectURL(file));
    } else{
      setImage(null);
      setPrediction(null);
    }
  }

  return (
    <div className="background">
       <div className="main-grid-container">
         <main className="main">
         <div className="skin-lesion"> <h1>Skin Lesion</h1><h1>Detection</h1></div>
         <div><h2>Find the type of skin lesion present in an image and be given the probability and best method for detection</h2></div>
         <form onSubmit={e => submitForm(e)} >
          <input 
            type="file"
            onChange={e => setFileAndImage(e.target.files[0])}
          /> <br/>
          <div className="user-image-div">
            <img className="user-image" src={image}/>
          </div>
          <Button type="submit">
            <h3>Get Prediction!</h3>
          </Button>
        </form>

        
        <p>{prediction == -1 ? <h4>*Images must be larger than 64 x 64px</h4> : <h5>The current prediction is {prediction}</h5>}</p>

         </main>

          <div className="image-div">
            <img className="main-image" src="https://cdn.animaapp.com/projects/6015a5662fef2ded030dfd20/releases/606a4eaeab2c12180fafb8dd/img/desktop-image@1x.svg"/>
          </div>
      </div>
     
  </div>
  )
}

export default App;