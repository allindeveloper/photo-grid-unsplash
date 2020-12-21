import React, { useState } from "react";
import "./photomodal.scoped.scss";

const PhotoModal = (props) => {
  console.log("props in image modal", props);
  const [className, setclassName] = useState("overlay");
  return (
    <div id="myModal" style={{display:props.show ? "block":"none"}} class="modal">
      <span class="close" onClick={props.toggleModal}>&times;</span>
      <div className="main-content">
      <img class="modal-content"style={{width:'100%'}} src={props.data.urls.regular}id="img01" />
      <div >
        <h3>Lagos Nigeria</h3>
      </div>
      </div>
    </div>
  );
};

export default PhotoModal;
