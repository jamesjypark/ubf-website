import React from "react";

import "./InstagramFeed.css";

import SkatingNight from "../../res/img/insta/skating-night.jpg";
import JamNightWinter from "../../res/img/insta/jam-night-winter.jpg";
import ClubsFair from "../../res/img/insta/clubs-fair.jpg";
import JamNightSpring from "../../res/img/insta/jam-night-spring.jpg";

// Posts from instagram.com/victoria_ubf, newest first. Each tile links to
// the post. To feature a new post: save its image to src/res/img/insta/,
// import it above, and add an entry here.
const POSTS = [
  {
    image: SkatingNight,
    url: "https://www.instagram.com/p/DVVIpo4jqIz/",
    alt: "Skating and testimony sharing jam night invitation",
  },
  {
    image: JamNightWinter,
    url: "https://www.instagram.com/p/DUEIuBhARD7/",
    alt: "Jam night — reflection sharing, dinner, and fellowship",
  },
  {
    image: ClubsFair,
    url: "https://www.instagram.com/p/DTkBTuKFTGc/",
    alt: "Our table at the UVic clubs fair",
  },
  {
    image: JamNightSpring,
    url: "https://www.instagram.com/p/DTdV9ZdDxme/",
    alt: "Spring kick-off jam night — fellowship in Christ",
  },
];

const InstagramFeed = () => {
  return (
    <div className="InstaGrid">
      {POSTS.map((post) => (
        <a
          key={post.url}
          className="InstaTile"
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={post.image} alt={post.alt} loading="lazy" />
        </a>
      ))}
    </div>
  );
};

export default InstagramFeed;
