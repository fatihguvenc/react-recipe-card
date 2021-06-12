import React from "react";
import "./Card.css";
import heartOutline from "../../assets/heart-outline.png"; // Tell webpack this JS file uses this image
import heartFill from "../../assets/heart-fill.png"; // Tell webpack this JS file uses this image

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{props.item.author[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{props.item.title}</h5>
          <div className="card-date">{props.item.date}</div>
        </div>
      </div>
      <img className="card-image" src={props.item.image} alt="Logo" />
      <div className="card-text">{props.item.description}</div>
      <div className="card-like-bar">
        {props.item.isLiked ? (
          <img className="card-like-icon" src={heartFill} alt="Logo" />
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" />
        )}
        <div className="like-text">
          <b>{props.item.likeCount}</b> kişi bu tarifi beğendi.
        </div>
      </div>
    </div>
  );
}
