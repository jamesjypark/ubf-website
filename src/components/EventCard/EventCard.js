import React from "react";
import { Button, Badge } from "react-bootstrap";

import "./EventCard.css";

const eventType = 'Bible Study';
const title = 'Jesus is the Pioneer of Our Salvation';
const passage = "Hebrews 2:5-18";
const date = '3/20/2022, 9:47:45 PM'
const isLive = true;
const zoomLink = "https://us02web.zoom.us/j/87533101365?pwd=ZjNCbVBXd1pNanRCVXN4TTBKcHdsdz09";
const questions = "reference to PDF";

const EventCard = () => {
  return (
    <div className="EventCard">
      <div className="flex">
        <div>
          Image
        </div>
        <div className="left-align">
          <div>
            {eventType}
            <Badge className={isLive ? "" : "hidden"}bg="secondary">Live</Badge>

          </div>
          <div>
            {title}
          </div>
          <a href={`https://www.biblegateway.com/passage/?search=${passage}`}>
            <div>{passage}</div>
          </a>
          <div>
            {date}
          </div>
        </div>
      </div>
      <div className="right-align">
        <div>
          <Button className={zoomLink ? "" : "hidden"}>Join</Button>
        </div>
        <div>
         <Button className={questions ? "" : "hidden"}>Questions</Button>
        </div>
      </div>
    </div>
  )
}


export default EventCard;