import React from 'react';
import Modal from 'react-modal';

const LoginModal = ({ isOpen, onRequestClose, style, fbLoginCallback}) => {
  return (
  	<Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
  		onAfterOpen={() => {}}
      contentLabel="Modal"
      style={style}
  		contentLabel="Example Modal">
  			<div className='modal-container'>
  				<div className='ff-welcome-text-container'>
  					<h4> Welcome to Fire Feed! </h4>

  					<p className='ff-welcome-text'> Fire Feed is only as smart as you let it be! Login
  							to start liking 🔥 tracks to optimize your feed 😃 </p>


  				</div>
  				<div className="fb-login-container">


          	<img className="login-out-img"
                 onClick={fbLoginCallback}
                 src='../../assets/fb_login.png' />

          </div>
  			</div>
    </Modal>
  )
};

export default LoginModal;
