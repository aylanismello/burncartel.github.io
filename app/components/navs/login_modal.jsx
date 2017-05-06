import React from 'react';
import Modal from 'react-modal';

const LoginModal = ({open, close}) => {
  const style = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  return(
    <Modal
      isOpen={open}
      onRequestClose={close}
      contentLabel="Modal"
      style={style}>
    </Modal>
  );
};

export default LoginModal;
