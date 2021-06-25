import React from "react";
import "./Left.css";
import WidgetsIcon from "@material-ui/icons/Widgets";
import AddIcon from "@material-ui/icons/Add";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Avatar } from "@material-ui/core";

const Left = (props) => {
  return (
    <div className="left">
      <div className="left__card">
        <div className="left__cardUser">
          <div className="left__cardBackground"></div>
          <Link>
            <div className="left__cardPhoto">
              {props.user && props.user.photoURL ? (
                <Avatar src={props.user.photoURL} className="left__avatar" />
              ) : (
                <Avatar className="left__avatar" />
              )}
            </div>
            <div className="left__cardLink">
              Welcome, {props.user ? props.user.displayName : "there"}!
            </div>
          </Link>
          <Link>
            <div className="left__cardPhotoText">Add photo</div>
          </Link>
        </div>
        <div className="left__cardWidget">
          <Link>
            <div>
              <span>Connections</span>
              <span>Grow Your Network</span>
            </div>
            <WidgetsIcon />
          </Link>
        </div>
        <Link className="left__cardItem">
          <span>
            <TurnedInIcon />
            My Item
          </span>
        </Link>
      </div>
      <div className="left__cardCommunity">
        <Link>
          <span>Groups</span>
        </Link>
        <Link>
          <span>
            Events <AddIcon />
          </span>
        </Link>
        <Link>
          <span>Follow HashTags</span>
        </Link>
        <Link>
          <span>Discover more</span>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Left);
