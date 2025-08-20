// src/components/InstagramLatest.jsx
import React, { useEffect, useState } from "react";

const InstagramLatest = () => {
  const [posts, setPosts] = useState([]);
  const accessToken = "YOUR_INSTAGRAM_ACCESS_TOKEN"; // Replace with your token
  const userId = "victoria_ubf";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,permalink,media_type&access_token=${accessToken}`
        );
        const data = await res.json();
        setPosts(data.data?.slice(0, 3) || []); // take only latest 3
      } catch (err) {
        console.error("Failed to fetch IG posts:", err);
      }
    };

    fetchPosts();
  }, []);

  if (!posts.length) return <p>Loading Instagram posts...</p>;

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {posts.map((post) => (
        <div key={post.id} style={{ maxWidth: "300px" }}>
          {post.media_type === "IMAGE" ||
          post.media_type === "CAROUSEL_ALBUM" ? (
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
              <img
                src={post.media_url}
                alt={post.caption || "Instagram post"}
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </a>
          ) : post.media_type === "VIDEO" ? (
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
              <video
                controls
                style={{ width: "100%", borderRadius: "8px" }}
                src={post.media_url}
              />
            </a>
          ) : null}
          {post.caption && <p>{post.caption}</p>}
        </div>
      ))}
    </div>
  );
};

export default InstagramLatest;
