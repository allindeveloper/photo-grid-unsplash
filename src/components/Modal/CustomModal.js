import React, { useState } from "react"
import Modal from "react-modal";
import "./modal.scoped.css"


Modal.setAppElement('#root');
const CustomModal = (props) => {
    console.log("props in image modal",props)
    const [className, setclassName] = useState("overlay")
    
  return (
    <Modal
        isOpen={props.show}
        onRequestClose={props.toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="modal-content">
          <img style={{width:'100%',maxWidth:'300px'}} src={props.data.urls.small}/>
        </div>
        <span onClick={props.toggleModal} class="close-modal">&times;</span>
      </Modal>
    
  )
}

export default CustomModal
