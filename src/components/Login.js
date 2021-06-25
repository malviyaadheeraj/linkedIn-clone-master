import React from "react";
import "./Login.css";
import imgLogo from "../images/login-logo.svg";
import imgHero from "../images/login-hero.svg";
import imgGoogleLogo from "../images/google.svg";
import { connect } from "react-redux";
import { signInAPI } from "../actions";
import { Redirect, Link } from "react-router-dom";

const Login = (props) => {
  return (
    <div className="login">
      {props.user && <Redirect to="/home"></Redirect>}
      <div className="login__container">
        <Link>
          <img src={imgLogo} alt="" />
        </Link>
        <div>
          <Link className="login__joinButton">Join Now</Link>
          <Link className="login__signInButton">Sign In</Link>
        </div>
      </div>
      <div className="login__body">
        <div className="login__bodyTop">
          <h1>Welcome to your professional community</h1>
          <img src={imgHero} alt="" />
        </div>
        <div className="login__form">
          <button onClick={() => props.signIn()}>
            <img src={imgGoogleLogo} alt="" /> Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
