import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../_utils_/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
useEffect (() =>{ 
    axiosWithAuth()
    .get('http://localhost:5000/api/colors')
    .then(res => {
      // (console.log('res',res))
      setColorList(res.data.map(color => {
        return color
      }))
      })
    .catch(err => console.log('err',err.response))
    }, [])
  return (
    <>
      
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
