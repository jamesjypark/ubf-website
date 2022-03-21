import React from 'react';

import EventCard from "../../components/EventCard/EventCard";

import "./Events.css";

const Events = () => {
  return (
    <div class="EventsContainer content-container">
      <div class="Header1">Events</div>
      <div>We study the word of God every week through worship service and group Bible studies. <br/> Everyone is welcome at all of our sessions.</div>
      <EventCard />
    </div>
  );
};

export default Events;
