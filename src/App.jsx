import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header/Header";
import Notification from "./notification/Notification";
import Img from "./assets/images/image-chess.webp";
import Mark from "./assets/images/avatar-mark-webber.webp";
import Angela from "./assets/images/avatar-angela-gray.webp";
import Jacob from "./assets/images/avatar-jacob-thompson.webp";
import Rizky from "./assets/images/avatar-rizky-hasanuddin.webp";
import Kim from "./assets/images/avatar-kimberly-smith.webp";
import Nathan from "./assets/images/avatar-nathan-peterson.webp";
import Anna from "./assets/images/avatar-anna-kim.webp";

function App() {
  function Notf(name, text, type, typeContent, time, img, seen) {
    this.name = name;
    this.text = text;
    this.type = type;
    this.typeContent = typeContent;
    this.time = time;
    this.img = img;
    this.seen = seen;
    // this.typeimg = typeimg;
  }
  const array = [
    new Notf(
      "Mark Webber",
      "reacted to your recent post",
      "post",
      "My first tournament today!",
      "1m ago",
      Mark,
      false
    ),
    new Notf("Angela Gray", "followed you", "none", "", "5m ago", Angela),
    new Notf(
      "Jacob Thompson",
      "has joined your group",
      "group",
      "Chess Club",
      "1 day ago",
      Jacob,
      false
    ),
    new Notf(
      "Rizky Hasanuddin",
      "sent you a private message",
      "message",
      "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
      "5 days ago",
      Rizky,
      true
    ),
    new Notf(
      "Kimberly Smith",
      "commented on your picture",
      "img",
      Img,
      "1 week ago",
      Kim,
      true
    ),
    new Notf(
      "Nathan Peterson",
      "reacted to your recent post",
      "post",
      "5 end-game strategies to increase your win rate",
      "2 weeks ago",
      Nathan,
      true
    ),
    new Notf(
      "Anna Kim",
      "left the group",
      "group",
      "Chess Club",
      "2 weeks ago",
      Anna,
      true
    ),
  ];

  const [ar, setar] = useState(array);
  return (
    <div className="main">
      <Header ar={ar} setar={setar} />
      <div className="notfs">
        {ar.map((el) => (
          <Notification p={el} key={el.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
