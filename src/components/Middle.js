import React, { useState, useEffect } from "react";
import "./Middle.css";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventIcon from "@material-ui/icons/Event";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import HorizontalSplitRoundedIcon from "@material-ui/icons/HorizontalSplitRounded";
import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import TelegramIcon from "@material-ui/icons/Telegram";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PostModal from "./PostModal";
import { getArticleAPI } from "../actions";
import ReactPlayer from "react-player";
import { Posts } from "../dummyData";

const Middle = (props) => {
  const [showModal, setShowModal] = useState("close");
  const [like, setLike] = useState(0);
  const [comment, setComment] = useState(0);

  useEffect(() => {
    props.getArticles();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };

  return (
    <>
      <div className="middle">
        <div className="middle__shareBox">
          <div className="middle__input">
            {props.user && props.user.photoURL ? (
              <Avatar src={props.user.photoURL} className="middle__avatar" />
            ) : (
              <Avatar className="middle__avatar" />
            )}
            <button
              onClick={handleClick}
              disabled={props.loading ? true : false}
            >
              Start a post
            </button>
          </div>
          <div className="middle__buttons">
            <button>
              <ImageIcon className="middle__photo" />
              <span>Photo</span>
            </button>
            <button>
              <YouTubeIcon className="middle__video" />
              <span>Video</span>
            </button>
            <button>
              <EventIcon className="middle__event" />
              <span>Event</span>
            </button>
            <button>
              <AssignmentIcon className="middle__write" />
              <span>Write Article</span>
            </button>
          </div>
        </div>
        <div className="middle__content">
          {props.loading && (
            <img
              className="middle__contentImage"
              src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
            />
          )}
          {Posts.map((post) => (
            <div className="middle__article" key={post.id}>
              <div className="middle__actor">
                <Avatar src={post.profilePicture} />
                <Link>
                  <div>
                    <span>{post.username}</span>
                    <span>{post.date}</span>
                  </div>
                </Link>
                <button>
                  <MoreHorizIcon />
                </button>
              </div>
              <div className="middle__description">{post?.desc}</div>
              <div className="middle__images">
                <Link>
                  <img src={post.photo} />
                </Link>
              </div>
              <div className="middle__action">
                <button>
                  <ThumbUpOutlinedIcon />
                  <span>
                    <p>Like</p> {post.like}
                  </span>
                </button>
                <button>
                  <CommentOutlinedIcon />
                  <span>
                    <p>Comments</p> {post.comment}
                  </span>
                </button>
                <button>
                  <ShareOutlinedIcon />
                  <span>
                    <p>Share</p>
                  </span>
                </button>
                <button>
                  <TelegramIcon />
                  <span>
                    <p>Send</p>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <PostModal showModal={showModal} handleClick={handleClick} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticleAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Middle);
