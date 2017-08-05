import React from 'react';
import Modal from 'react-modal';

const LoginModal = ({ isOpen, onRequestClose, style, fbLoginCallback, loginType }) => {

  let headerText, subHeaderText;
  headerText = 'WUT';
  subHeaderText = 'WUT';

  if (loginType === 'LOGIN') {
    headerText = 'Login';
    subHeaderText = 'Welcome back.';
  } else if (loginType === 'SIGNUP') {
    headerText = 'Join';
    subHeaderText = 'Be a part of Fire Feed.';
  }

  return (
  	<Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
  		onAfterOpen={() => {}}
      contentLabel="Modal"
      style={style}
  		contentLabel="Example Modal"
      >
  			<div className='modal-container'>
          <div className="ff-logo-container">
            <img src="../../../assets/ff_logo_1.png" alt="Fire Feed" />
          </div>

  				<div className='ff-welcome-text-container'>
  					<h3> {headerText} </h3>
  					<h6> {subHeaderText} </h6>

  					{/* <p className='ff-welcome-text'> Fire Feed is only as smart as you let it be! Login
  							to start liking 🔥 tracks to optimize your feed 😃 </p> */}
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
