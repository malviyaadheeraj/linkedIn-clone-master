import React, { useState } from "react";
import "./PostModal.css";
import CloseIcon from "@material-ui/icons/Close";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CommentIcon from "@material-ui/icons/Comment";
import { Avatar } from "@material-ui/core";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import firebase from "firebase";
import { postArticleAPI } from "../actions";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`);
      return;
    }

    setShareImage(image);
  };

  const switchAssetArea = (area) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  };

  const postArticle = (e) => {
    e.preventDefault();
    if (e.target != e.currentTarget) {
      return;
    }

    const payload = {
      image: shareImage,
      video: videoLink,
      user: props.user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    };
    props.postArticle(payload);
    reset(e);
  };

  const reset = (e) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea("");
    setEditorText("");
    props.handleClick(e);
  };

  return (
    <>
      {props.showModal === "open" && (
        <div className="postModal">
          <div className="postModal__content">
            <div className="postModal__header">
              <h2>Create a post</h2>
              <button>
                <CloseIcon
                  onClick={(e) => reset(e)}
                  className="postModal__icon"
                />
              </button>
            </div>
            <div className="postModal__sharedContent">
              <div className="postModal__userInfo">
                {props.user && props.user.photoURL ? (
                  <Avatar
                    src={props.user.photoURL}
                    className="postModal__avatar"
                  />
                ) : (
                  <Avatar className="postModal__avatar" />
                )}
                {<span>{props.user.displayName}</span>}
              </div>
              <div className="postModal__editor">
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="what do you want to talk about"
                  autoFocus="true"
                />
                {assetArea === "image" ? (
                  <div className="postModal__uploadImage">
                    <input
                      type="file"
                      accept="image/gif, image/jpeg, image/png"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <p>
                      <label htmlFor="file" style={{ cursor: "pointer" }}>
                        Select an image to share
                      </label>
                    </p>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} />
                    )}
                  </div>
                ) : (
                  assetArea === "media" && (
                    <>
                      <input
                        type="text"
                        placeholder="pleaseinput a video link"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                      {videoLink && (
                        <ReactPlayer width={"100%"} url={videoLink} />
                      )}
                    </>
                  )
                )}
              </div>
            </div>
            <div className="postModal__sharedCreation">
              <div className="postModal__assets">
                <button onClick={() => switchAssetArea("image")}>
                  <ImageIcon />
                </button>
                <button onClick={() => switchAssetArea("media")}>
                  <YouTubeIcon />
                </button>
              </div>
              <div className="postModal__sharedComment">
                <div className="postModal__assets">
                  <button>
                    <CommentIcon /> Anyone
                  </button>
                </div>
              </div>
              <button
                className="postModal__postButton"
                disabled={!editorText ? true : false}
                onClick={(e) => postArticle(e)}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postArticle: (payload) => dispatch(postArticleAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
