import { Button } from "react-bootstrap";

import "./Home.css";

import BibleImage from "../../res/img/bible.png";
import ShareImage from "../../res/img/share.png";
import WorshipImage from "../../res/img/worship.png";

const Home = () => {
  return (
    <div>
      <div>
        We are a UVic student club dedicated to studying the <b>Bible</b>
      </div>

      <div>
        <b>What We Do</b>
        <div class="box">
          <div>
            <div>
              <img src={BibleImage} />
            </div>
            <b>Study the Bible</b>
            <div>
              We meet every week to read passages from the Bible, answer
              questions, and discuss ways to apply the teachings in the Bible to
              our day-to-day lives.
            </div>
          </div>
          <div>
            <div>
              <img src={ShareImage} />
            </div>
            <b>Share Reflections</b>
            <div>
              After every Bible study, we write brief personal reflections and
              share it with a small group. This way, we can see how the Bible is
              working in each of our lives.
            </div>
          </div>
          <div>
            <div>
              <img src={WorshipImage} />
            </div>
            <b>Worship On-campus</b>
            <div>
              We hold our worship service every Sunday at 11 AM on UVic campus.
            </div>
          </div>
        </div>
      </div>

      <div>
        <b>Contact Us</b>
        <div>
          We are always open to new members who would like to join our club!
        </div>

        <Button>Email Us</Button>
      </div>
    </div>
  );
};

export default Home;
