
import * as React from 'react';
import dotaLogo from "./dota2.jpg"


function Projects() {
  return (
    <div className="CardMake">
        <div className="ProjectsHeading">
          <h1>Projects</h1>
        </div>
        <div className="ProjectCardMake">
            <img src={dotaLogo} alt="" class="CardImg"></img>
        
        </div>
    </div>
  );
}

export default Projects;
