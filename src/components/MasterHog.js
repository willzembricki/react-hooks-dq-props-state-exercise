import React, { useState } from "react";
import Master from "../assets/master-hog.png";
import BabyHog from "./BabyHog";
import offspring from "../data.js";

function MasterHog() {
  const [eyeColor, setEyeColor] = useState("blue");

  function handleChangeEyeColor(e) {
    setEyeColor(e.target.value);
  }

  const babies = offspring.map((hog) => (
    <BabyHog
      key={hog.id}
      name={hog.name}
      hobby={hog.hobby}
      eyeColor={eyeColor}
    />
  ));

  return (
    <div>
      <input
        type="radio"
        name="eyeColor"
        value="blue"
        checked={eyeColor === "blue"}
        onChange={handleChangeEyeColor}
      />
      Blue<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="sun"
        checked={eyeColor === "sun"}
        onChange={handleChangeEyeColor}
      />
      Sun<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="glowing"
        checked={eyeColor === "glowing"}
        onChange={handleChangeEyeColor}
      />
      Glowing<br></br>
      <h2>Name: Master Blaster</h2>
      <h3>Weight: 2.54 Tons</h3>
      <h3>Eye Color: {eyeColor}</h3>
      <div id="masters-domicile">
        <img id="master-blaster" src={Master} alt="" />
      </div>
      <ul className="hoglist">{babies}</ul>
    </div>
  );
}

export default MasterHog;
