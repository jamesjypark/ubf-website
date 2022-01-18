import React from 'react';
import { Button } from "react-bootstrap";

import "./About.css";

import LogoImage from "../../res/img/ubf_logo.png";

const About = () => {
  return (
    <div class="AboutContainer">
      <div class="spacer"></div>
      <div class="Header1">Who We Are</div>
      <img class="Image" src={LogoImage} alt="" />
      <div>
        University Bible Fellowship (UBF) is an international evangelical
        church (non-denominational) and network of house churches dedicated
        to Christ and his kingdom. Our main focus is to study the Bible,
        grow in the grace and knowledge of our Lord and Savior Jesus Christ,
        and live according to his teachings.
      </div>

      <div class="Header1">What We Believe</div>
      <div class="BeliefContainer">
        <b>We believe</b> that there is one God in three Persons: God the
        Father, God the Son, and God the Holy Spirit.
        <br />
        <br />
        <b>We believe</b> that God created the heavens and the earth and all
        other things in the universe: that He is the Sovereign Ruler of all
        things; that the Sovereign God reveals Himself;we believe in his
        redemptive work and in his final judgment.
        <br />
        <br />
        <b>We believe</b> that the Bible is inspired by God; that it is the
        truth; that it is the final authority in faith and practice.
        <br />
        <br />
        <b>We believe</b> that since the fall of Adam, all people have been
        under the bondage and power of sin and are deserving of the judgment
        and wrath of God.
        <br />
        <br />
        <b>We believe</b> that Jesus Christ, who is God and man, through his
        atoning, sacrificial death on the cross for our sins and his
        resurrection, is the only way of salvation; he alone saves us from sin
        and judgment and purifies us from the contamination of the world
        caused by sin
      </div>

      <div class="ContactContainer">
        <div class="Header1">Contact Us</div>
        <div>
          Send us an email if you
          have any questions about us and we'll get back to you shortly.
        </div>

        <Button href="mailto:victoriaubf@gmail.com">Email Us</Button>
      </div>
    </div>
  );
};

export default About;
