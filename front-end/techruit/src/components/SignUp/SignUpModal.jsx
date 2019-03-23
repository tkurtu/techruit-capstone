import React from 'react';
import './SignUpModal.css';
//the modal once it's popped up

const Modal = props => {
  return (
    <div className="modal-position">
      <form
        className="modal-wrapper"
        style={{
          transform: props.openModal ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: props.openModal ? '1' : '0'
        }}
      >
        <div>
          <h3>signup to TECHruit</h3>
        </div>
        <div className="modal-body">
          <p>{props.children}</p>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={props.closeModal}>
            cancel
          </button>
          <button className="btn-continue">submit</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
