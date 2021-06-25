import React from "react";
import "./Right.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import ErrorIcon from "@material-ui/icons/Error";
import { Link } from "react-router-dom";

const Right = (props) => {
  return (
    <div className="right">
      <div className="right__card">
        <div className="right__cardTitle">
          <h2>Add to your feed</h2>
          <ErrorIcon />
        </div>
        <ul className="right__feedList">
          <li>
            <Link className="right__avatar"></Link>
            <div>
              <span>Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <Link className="right__avatar"></Link>
            <div>
              <span>Video</span>
              <button>Follow</button>
            </div>
          </li>
        </ul>
        <Link className="right__recomendation">
          View all recomendations
          <ArrowRightAltIcon />
        </Link>
      </div>
      <div className="right__banner">
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Right;
