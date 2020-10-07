import React from 'react'
import './css/ModalContent.css'

const ModalContent = ({setModalOff}) => {
    return(
        <div className="modal-container">
            
            <div className="modal-sticky-container"></div>
            <div className="modal-opacity" onClick={setModalOff}></div>
        </div>
        
    )
}

export default ModalContent