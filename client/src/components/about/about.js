import React from "react";
import fast from "./logo/001-fast.png";
import responsive from "./logo/002-responsive.png";
import intuitive from "./logo/004-lightbulb.png";
import dynamic from "./logo/006-startup.png";

export default function About() {
  return (
    <div>
      <div>
        <img src={fast} alt="fast" />
        <h3>Fast</h3>
        <p>Fast load times and lag free interaction, my highest priority.</p>
      </div>
      <div>
        <img src={responsive} alt="responsive" />
        <h3>Responsive</h3>
        <p>My layouts will work on any device, big or small.</p>
      </div>
      <div>
        <img src={intuitive} alt="intuitive" />
        <h3>Intuitive</h3>
        <p>My layouts will work on any device, big or small.</p>
      </div>
      <div>
        <img src={dynamic} alt="dynamic" />
        <h3>Dynamic</h3>
        <p>Websites don't have to be static, I love making pages come to life.</p>
      </div>
    </div>
  );
}
