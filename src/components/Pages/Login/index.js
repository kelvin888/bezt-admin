import React from 'react';
import { signUserIn } from '../../../actions/index';
import { useDispatch } from 'react-redux';

function Login(props) {
  let dispatch = useDispatch();

  function logUserIn() {
    dispatch(signUserIn({ name: 'Kelvin' }));
    props.history.push('/dashboard');
  }

  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="login_heading">
          <i className="zmdi zmdi-google-drive login_heading_icon"></i>
          <span className="login_heading_text">Bezt Admin</span>
        </div>
        <div className="login_title_container">
          <div className="login_title">Login</div>
          <div className="login_sub_title">
            Lets get you started easily on the go
          </div>
        </div>
        <div className="login_input_container_dotted">
          <div className="login_input_label">Email Address</div>
          <div className="login_input">
            <input className="login_input_field" type="text" />
          </div>
        </div>
        <div className="login_input_container">
          <div className="login_input_label">Password</div>
          <div className="login_input">
            <input className="login_input_field" type="password" />
            <i className="zmdi zmdi-lock login_input_lock_icon"></i>
          </div>
        </div>
        <div className="forgot_password_link">Forgot Password?</div>
        <button onClick={() => logUserIn()} className="login_button">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;
