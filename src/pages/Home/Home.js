import React from "react";
import { Button } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

import "./Home.css";

import BibleImage from "../../res/img/bible.png";
import ShareImage from "../../res/img/share.png";
import WorshipImage from "../../res/img/worship.png";
import Arrow from "../../res/img/down-arrow.png";

const Home = () => {
  return (
    <div>
      <div class="SplashScreen">
        <div class="MainText">
          A Christian student club at UVic where we explore the <b>Bible</b>{" "}
          together.
        </div>
        <Link class="LinkContainer" to="#what-we-do">
          <img class="Arrow MainText" src={Arrow} alt=""></img>
        </Link>
        <div class="Overlay"></div>
      </div>

      <div id="what-we-do"></div>
      <div className="content-container">
        <div class="Header1">What We Do</div>
        <div class="FlexContainer">
          <div class="FlexItem">
            <div>
              <img src={BibleImage} alt="" />
            </div>
            <div class="Header2">Study the Bible</div>
            <div>
              We meet every week to read passages from the Bible, answer
              questions, and discuss ways to apply the teachings in the Bible to
              our day-to-day lives.
            </div>
          </div>
          <div class="FlexItem">
            <div>
              <img src={ShareImage} alt="" />
            </div>
            <div class="Header2">Share Reflections</div>
            <div>
              After every Bible study, we write brief personal reflections and
              share it with a small group. This way, we can see how the Bible is
              working in each of our lives.
            </div>
          </div>
          <div class="FlexItem">
            <div>
              <img src={WorshipImage} alt="" />
            </div>
            <div class="Header2">Worship On-campus</div>
            <div>
              We hold our worship service every Sunday at 11 AM on UVic campus
              in Clearihue A217.
            </div>
          </div>
        </div>
        <div class="ContactContainer">
          <div class="Header1">Join Us</div>
          <div>
            We welcome everyone to our club! If you want to stay up to date --
            join our Discord server!
            <br />
          </div>
          <Button target="_blank" href="https://discord.gg/YyYzvkVJfB">
            Join Discord
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
