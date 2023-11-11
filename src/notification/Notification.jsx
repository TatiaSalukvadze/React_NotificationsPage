import React from "react";
import "./Notification.css";

function Notification({ p }) {
  const temp = p.type + "div";
  const wrapper = p.seen ? "n seen" : "n unseen";
  return (
    <div className={wrapper}>
      <img src={p.img} alt="author" className="author" />
      <div className={temp}>
        <div>
          <div className="maintext">
            <span className="name">{p.name} </span>
            <span className="ntext">{p.text} </span>
            {p.type !== "message" && p.type !== "img" ? (
              <span className={p.type}>{p.typeContent}</span>
            ) : null}
            {p.seen ? null : <div className="ball"></div>}
          </div>
          <p className="time">{p.time}</p>
        </div>
        {p.type === "message" ? (
          <div className={p.type}>{p.typeContent}</div>
        ) : p.type === "img" ? (
          <img src={p.typeContent} className={p.type} />
        ) : null}
      </div>
    </div>
  );
}

export default Notification;
