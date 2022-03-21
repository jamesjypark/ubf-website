import React from "react";
import { Button } from "react-bootstrap";

const eventType = 'Bible Study';
const title = 'Jesus is the Pioneer of Our Salvation';
const passage = "Hebrews 2:5-18";
const date = '3/20/2022, 9:47:45 PM'
const isLive = true;
const zoomLink = "https://us02web.zoom.us/j/87533101365?pwd=ZjNCbVBXd1pNanRCVXN4TTBKcHdsdz09";
const questions = "reference to PDF";

const EventCard = () => {
  return (
    <div className="FlexContainer">
      <div>
        <div>
          {eventType}
          {isLive ? "LIVE" : ""}
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
      <div>
        <div>
          {zoomLink ? <Button>Join</Button> : ""}
        </div>
        <div>
          {questions ? <Button>Questions</Button> : ""}
        </div>
      </div>
    </div>
  )
}


export default EventCard;