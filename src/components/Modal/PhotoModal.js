import React, { useState } from "react";
import "./photomodal.scoped.scss";

const PhotoModal = (props) => {
  console.log("props in image modal", props);
  const [className, setclassName] = useState("overlay");
  return (
    <div id="myModal" style={{display:props.show ? "block":"none"}} className="modal">
      <span className="close" onClick={props.toggleModal}>&times;</span>
      <div className="main-content">
      <img className="modal-content"style={{width:'100%'}} src={props.data.urls.regular}id="img01" />
      <div className="bottom-content">
        <h3>Fredrick Apata</h3>
        <h4>Lagos, Nigeria</h4>
      </div>
      </div>
    </div>
  );
};

export default PhotoModal;
