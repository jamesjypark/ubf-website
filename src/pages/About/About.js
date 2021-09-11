import LogoImage from "../../res/img/ubf_logo.png";

const About = () => {
  return (
    <div>
      <div>
        <b>Who We Are</b>
        <div>
          <img src={LogoImage} />
          <div>
            <b>University Bible Fellowship</b> (UBF) is an international
            evangelical church (non-denominational) and network of house
            churches dedicated to Christ and his kingdom. Our main focus is to
            study the Bible, grow in the grace and knowledge of our Lord and
            Savior Jesus Christ, and live according to his teachings.
          </div>
        </div>
      </div>

      <div>
        <b>What We Believe</b>
        <div>
          <b>We believe</b> that there is one God in three Persons: God the
          Father, God the Son, and God the Holy Spirit.
          <br />
          <b>We believe</b> that God created the heavens and the earth and all
          other things in the universe: that He is the Sovereign Ruler of all
          things; that the Sovereign God reveals Himself;we believe in his
          redemptive work and in his final judgment. <br />
          <b>We believe</b> that the Bible is inspired by God; that it is the
          truth; that it is the final authority in faith and practice.
          <br />
          <b>We believe</b> that since the fall of Adam, all people have been
          under the bondage and power of sin and are deserving of the judgment
          and wrath of God. We believe that Jesus Christ, who is God and man,
          through his atoning, sacrificial death on the cross for our sins and
          his resurrection, is the only way of salvation; he alone saves us from
          sin and judgment and purifies us from the contamination of the world
          caused by sin
        </div>
      </div>
    </div>
  );
};

export default About;
