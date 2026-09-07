import React from "react";

import "./Home.css";

import InstagramFeed from "../../components/InstagramFeed/InstagramFeed";

import HeroImage from "../../res/img/photos/hero-group.jpg";
import WorshipImage from "../../res/img/photos/worship.jpg";
import StudyImage from "../../res/img/photos/study.jpg";
import FellowshipImage from "../../res/img/photos/fellowship.jpg";
import CampusImage from "../../res/img/photos/campus.jpg";

const Home = () => {
  return (
    <div id="top">
      {/* ============ Hero ============ */}
      <section className="Hero">
        <div className="HeroText">
          <div className="Kicker">University Bible Fellowship · UVic</div>
          <h1 className="HeroTitle">
            A church <em>on campus</em>.
          </h1>
          <p className="HeroLead">
            We're a community of students and friends at the University of
            Victoria who worship together, study the Bible one-to-one, and
            share the good news of Jesus right where we are.
          </p>
          <div className="HeroFacts">
            <span>Sundays · 11 AM</span>
            <span className="FactDivider" aria-hidden="true"></span>
            <span>Clearihue Building, Room A207</span>
          </div>
          <a className="Button" href="#visit">
            Plan a visit
          </a>
        </div>
        <figure className="HeroFigure">
          <img
            src={HeroImage}
            alt="Our community gathered outdoors at a spring retreat"
          />
          <figcaption>Spring retreat, together in the mountains</figcaption>
        </figure>
      </section>

      {/* ============ About ============ */}
      <section className="Section" id="about">
        <div className="Kicker">Who we are</div>
        <h2 className="SectionTitle">Rooted in the Word, at home at UVic</h2>
        <div className="AboutColumns">
          <p>
            University Bible Fellowship is an international, non-denominational
            evangelical church with a simple calling: to help students meet
            Jesus through the Bible. Our Victoria chapter is small, warm, and
            genuinely glad to see you.
          </p>
          <p>
            We don't meet across town — we worship, study, and pray on campus,
            in the middle of student life. Whether you've followed Jesus for
            years or have never opened a Bible, there is a seat for you here.
          </p>
        </div>
        <div className="Mission">
          <div className="MissionItem">
            <span className="MissionNumber">01</span>
            <p>Share the gospel on campus.</p>
          </div>
          <div className="MissionItem">
            <span className="MissionNumber">02</span>
            <p>
              Grow as disciples of Jesus who share the gospel themselves.
            </p>
          </div>
        </div>
        <blockquote className="Verse">
          <p>“Come and see.”</p>
          <cite>— John 1:46</cite>
        </blockquote>
      </section>

      {/* ============ Gather ============ */}
      <section className="Section SectionDeep" id="gather">
        <div className="Kicker">How we gather</div>
        <h2 className="SectionTitle">Three rhythms, every week</h2>

        <div className="Rhythm">
          <figure className="RhythmFigure">
            <img
              src={WorshipImage}
              alt="Smiling faces gathered after Sunday worship service"
            />
          </figure>
          <div className="RhythmText">
            <h3>Sunday Worship</h3>
            <div className="RhythmMeta">Sundays · 11 AM · Clearihue A207</div>
            <p>
              Our worship service is the heart of our week — songs, prayer, and
              a message from the Bible, right on campus. It's unpolished in the
              best way: real people worshipping a real God, and lunch together
              afterward more often than not.
            </p>
          </div>
        </div>

        <div className="Rhythm RhythmReverse">
          <figure className="RhythmFigure">
            <img
              src={StudyImage}
              alt="Students in conversation around a table"
            />
          </figure>
          <div className="RhythmText">
            <h3>One-to-One Bible Study</h3>
            <div className="RhythmMeta">Weekly · scheduled around you</div>
            <p>
              We study the Bible one-to-one — just you and a study partner,
              working through a passage at your pace. No prior knowledge
              needed, no question too basic. It's the quiet core of everything
              we do.
            </p>
          </div>
        </div>

        <div className="Rhythm">
          <figure className="RhythmFigure">
            <img
              src={FellowshipImage}
              alt="Our group sharing reflections together in a common space"
            />
          </figure>
          <div className="RhythmText">
            <h3>Reflection Sharing</h3>
            <div className="RhythmMeta">Weekly · at the library</div>
            <p>
              Once a week we gather at the library to share short written
              reflections on what we've been studying. Hearing how the same
              passage lands in different lives is one of the best parts of our
              week.
            </p>
          </div>
        </div>
      </section>

      {/* ============ Visit ============ */}
      <section className="Section" id="visit">
        <div className="Kicker">Plan a visit</div>
        <h2 className="SectionTitle">Sundays at 11, Clearihue A207</h2>
        <div className="VisitGrid">
          <div className="VisitText">
            <p>
              We meet every Sunday at <strong>11 AM</strong> in{" "}
              <strong>Room A207 of the Clearihue Building</strong> — the
              A-wing, second floor. Clearihue sits right off the Quad in the
              centre of campus.
            </p>
            <p>
              Come as you are: no dress code, no expectations, no pressure to
              say or give anything. Just find a seat — we'll be glad you came.
            </p>
            <a
              className="Button ButtonGhost"
              href="https://www.uvic.ca/search/maps-buildings/buildings/clearihue.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find Clearihue on the UVic map
            </a>
          </div>
          <figure className="VisitFigure">
            <img
              src={CampusImage}
              alt="A tree-lined path on the UVic campus in morning light"
            />
            <figcaption>The walk in — UVic on a Sunday morning</figcaption>
          </figure>
        </div>
      </section>

      {/* ============ Instagram ============ */}
      <section className="Section SectionDeep" id="life">
        <div className="Kicker">Life together</div>
        <h2 className="SectionTitle">Follow along on Instagram</h2>
        <p className="InstaLead">
          Retreats, picnics, worship, and everything in between — see what
          we've been up to at{" "}
          <a
            href="https://www.instagram.com/victoria_ubf"
            target="_blank"
            rel="noopener noreferrer"
          >
            @victoria_ubf
          </a>
          .
        </p>
        <InstagramFeed />
        <div className="InstaFollow">
          <a
            className="Button ButtonGhost"
            href="https://www.instagram.com/victoria_ubf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow @victoria_ubf
          </a>
        </div>
      </section>

      {/* ============ Beliefs ============ */}
      <section className="Section" id="beliefs">
        <div className="Kicker">What we believe</div>
        <h2 className="SectionTitle">The faith we hold</h2>
        <ul className="BeliefList">
          <li>
            There is one God in three Persons — Father, Son, and Holy Spirit.
          </li>
          <li>
            God created all things, rules over all things, and reveals Himself
            to us; we trust His redemptive work and await His final judgment.
          </li>
          <li>
            The Bible is inspired by God — the truth, and our final authority
            in faith and practice.
          </li>
          <li>
            Since the fall, all people are under the power of sin and in need
            of God's grace.
          </li>
          <li>
            Jesus Christ — fully God and fully man — through His death on the
            cross and His resurrection is the only way of salvation.
          </li>
        </ul>
      </section>

      {/* ============ Connect ============ */}
      <section className="Section Connect" id="connect">
        <div className="Kicker">Say hello</div>
        <h2 className="SectionTitle">We'd love to meet you</h2>
        <p className="ConnectLead">
          Questions, curiosity, or just want someone to walk in with on your
          first Sunday? Send us an email — a real person reads it, and we
          answer.
        </p>
        <div className="ConnectLinks">
          <a className="Button" href="mailto:victoriaubf@gmail.com">
            Email victoriaubf@gmail.com
          </a>
          <a
            className="Button ButtonGhost"
            href="https://www.instagram.com/victoria_ubf"
            target="_blank"
            rel="noopener noreferrer"
          >
            @victoria_ubf on Instagram
          </a>
        </div>
      </section>

      <footer className="Footer">
        <div>University Bible Fellowship · Victoria</div>
        <div className="FooterMeta">
          Sundays 11 AM · Clearihue A207 · University of Victoria
        </div>
      </footer>
    </div>
  );
};

export default Home;
