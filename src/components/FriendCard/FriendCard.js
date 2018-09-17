import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div
    className="card"
    value={props.id}
    onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>

    <div className="content">
      <ul>
        <li>
          <strong>{props.name}</strong>
        </li>
      </ul>
    </div>
  </div>
);

export default FriendCard;
