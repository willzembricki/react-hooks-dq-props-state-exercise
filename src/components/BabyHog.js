import React, {useState} from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`
let eyeColorsrc;
function BabyHog({eyeColor, name, hobby}) {
  const [currentWeight, setCurrentWeight] = useState(25)
  function handleChangeWeight(e) {
   if(e.target.name=== "+"){
     setCurrentWeight(currentWeight + 1)
   }
   else if(e.target.name ==="-"){
     setCurrentWeight(currentWeight - 1)
   }
   
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
  }
  if (eyeColor === "sun"){
    eyeColorsrc = SunBaby
  }
  else if(eyeColor === "blue"){
    eyeColorsrc = BlueBaby
  }
  else if(eyeColor === "glowing"){
    eyeColorsrc = GlowingBaby
  }
  else{
    eyeColorsrc = normalBaby
  }
  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight:{currentWeight}</h3>
      <h3>Hobby:{hobby}</h3>
      <h4>Eye Color:{eyeColor}</h4>

      <button onClick = {handleChangeWeight} name="+">Increase Weight</button>
      <button onClick = {handleChangeWeight} name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorsrc}
          style={{ height: `${currentWeight * 5}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
