import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

// withRouter is a HOC that returns a modified component, allows you access to history prop above
export default withRouter(MenuItem);
