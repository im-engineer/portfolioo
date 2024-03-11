import React from "react";
import "./Contact.css";
export default function Footer() {
  return (
    <>
      <div className="contact">
        <h style={{ color: "#49b29b" }}>What's Next ?</h>
        <h1>Get In Touch</h1>
        <div className="say-hello">
          <a href="mailto:azmsiddhant@gmail.com">
            <button>Say Hello</button>
          </a>
        </div>
      </div>
      <div className="footer">
        <h5>Back On Top</h5>
      </div>
    </>
  );
}
