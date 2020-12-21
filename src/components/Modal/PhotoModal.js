import React, { useState } from "react";
import "./photomodal.scoped.scss";

const PhotoModal = (props) => {
  console.log("props in image modal", props);
  const {data} = props;
  const [className, setclassName] = useState("overlay");
  return (
    <div id="myModal" style={{display:props.show ? "block":"none"}} className="modal">
      <span className="close" onClick={props.toggleModal}>&times;</span>
      <div className="main-content">
      <img className="modal-content col-6 col-s-9" src={data.urls.regular}id="img01" />
      <div className="bottom-content">
        <h3>{data.user.name}</h3>
        <h4>{data.user.location}</h4>
      </div>
      </div>
    </div>
  );
};

export default PhotoModal;
