

import React from "react";
import "./ImageComponent.css";


export default function ImageComponent({ imageUrl }) {
  console.log(imageUrl);
  return (
    <div>
      <img src={imageUrl} alt="meal Image" className="meal-image" />
    </div>
  );
}
