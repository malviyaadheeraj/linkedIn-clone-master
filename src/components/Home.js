import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./Home.css";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

const Home = (props) => {
  return (
    <div className="home">
      {!props.user && <Redirect to="/"></Redirect>}
      <div className="home__section">
        <h5>
          <Link>Hiring in a hurry? -</Link>
          <p>Find talented pros in record with Upwork keep business moving</p>
        </h5>
      </div>
      <div className="home__layout">
        <Left />
        <Middle />
        <Right />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Home);
