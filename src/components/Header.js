import React from "react";
import "./Header.css";
import imgHomeLogo from "../images/home-logo.svg";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SmsIcon from "@material-ui/icons/Sms";
import WorkIcon from "@material-ui/icons/Work";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import { connect } from "react-redux";
import { signOutAPI } from "../actions";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <span className="header__logo">
          <Link to="/home">
            <img src={imgHomeLogo} alt="" />
          </Link>
        </span>
        <div className="header__search">
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <div className="header__SearchIcon">
            <SearchIcon />
          </div>
        </div>
        <div className="header__nav">
          <ul className="header__navList">
            <li className="header__navItem active">
              <Link>
                <HomeIcon />
                <span>Home</span>
              </Link>
            </li>
            <li className="header__navItem">
              <Link>
                <SupervisorAccountIcon />
                <span>My Network</span>
              </Link>
            </li>
            <li className="header__navItem">
              <Link>
                <WorkIcon />
                <span>Jobs</span>
              </Link>
            </li>
            <li className="header__navItem">
              <Link>
                <SmsIcon />
                <span>Messaging</span>
              </Link>
            </li>
            <li className="header__navItem">
              <Link>
                <NotificationsIcon />
                <span>Notifications</span>
              </Link>
            </li>
            <div className="header__user">
              <Link>
                {props.user && props.user.photoURL ? (
                  <Avatar
                    src={props.user.photoURL}
                    className="header__avatar"
                  />
                ) : (
                  <Avatar className="header__avatar" />
                )}
                <div className="header__me">
                  <span>Me</span>
                  <ArrowDropDownIcon className="header__meIcon" />
                </div>
              </Link>
              <div className="header__signOut">
                <Link onClick={() => props.signOut()}>Sign Out</Link>
              </div>
            </div>
            <div className="header__work">
              <Link>
                <AppsIcon />
                <span>
                  Work <ArrowDropDownIcon />
                </span>
              </Link>
            </div>
          </ul>
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
  signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
