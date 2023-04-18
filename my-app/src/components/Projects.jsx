
import * as React from 'react';
import dotaLogo from "./dota2.jpg"
import FlipCard from "./FlipCard";
import questionMark from "./questionMark.png"
import portfolioPicture from "./portfolioPicture.jpeg"

function Projects() {
  return (
    <div className="CardMake">
        
          <div className="ProjectsHeading">
            <h1 className="pageHeading">Projects</h1>
          </div>
          <div className="WrapperV">
            <FlipCard
              backgroundFront={questionMark}
              frontTitle="Coming Soon"
              backTitle="Coming Soon"
              frontRole=""
              role=""
              description=""
            />
            <FlipCard
              backgroundFront={portfolioPicture}
              frontTitle="Personal Portfolio"
              backTitle="Personal Portfolio"
              frontRole="Full Stack Developer"
              role="Full Stack Developer"
              description=""
            />
            <FlipCard
              backgroundFront={dotaLogo}
              frontTitle="Counter Pickr"
              backTitle="Counter Pickr"
              frontRole="Software Engineer"
              role="Software Engineer"
              description="
              • Technologies: Android Studio, Kotlin, and SQLite
              • Designed and built a mobile application for the popular MOBA game Dota 2.
              • The program utilized current game trends to suggest the optimal hero counter pick.
              • Boosted draft win rates by 40%.
              • 50+ concurrent users"
            />
          </div>
          
      </div>
  );
}

export default Projects;
