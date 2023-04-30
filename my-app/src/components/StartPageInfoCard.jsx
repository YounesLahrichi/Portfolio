import selfie from "./Lahrichi_Younes.JPG";
import resume from "./Resume_Lahrichi_Younes.pdf";
import Fab from "@mui/material/Fab";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import Tooltip from "@mui/material/Tooltip";
import * as React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useState, useRef } from "react";
import Typewriter from "typewriter-effect";

function StartPageInfoCard() {
  const transRef = useRef(null);
  return (
    <div className="CardMake">
      <div id="StartInfo" className="StartInfo">
        <div className="ImageContent">
          <div className="CardImage">
            <img src={selfie} alt="" class="CardImg"></img>
            <div className="ButtonLinks">
              <a
                href="https://www.linkedin.com/in/younes-lahrichi-0894721a1/"
                target="_blank"
                rel="noreferrer"
              >
                <Tooltip title="LinkedIn Profile">
                  <Fab size="small" color="primary" aria-label="LinkedIn">
                    <LinkedInIcon />
                  </Fab>
                </Tooltip>
              </a>
              <a
                href="https://github.com/YounesLahrichi"
                target="_blank"
                rel="noreferrer"
              >
                <Tooltip title="GitHub Profile">
                  <Fab
                    size="small"
                    color="primary"
                    aria-label="GitHub"
                    onClick={() => {
                      console.log("i was clicked");
                    }}
                  >
                    <GitHubIcon />
                  </Fab>
                </Tooltip>
              </a>
              <Tooltip title="Resume Download">
                <Fab
                  size="small"
                  color="primary"
                  aria-label="Resume"
                  onClick={() => {
                    window.open(resume);
                    console.log("i was clicked");
                  }}
                >
                  <DescriptionIcon />
                </Fab>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="CardContent">
          <h1 className="Name">
            <Typewriter
            onInit={(typewriter)=> {

            typewriter
            .typeString("Hello World!")
            .start();
            }}
            /></h1>
          <p className="Description">
            {" "}
            Hey there, My name is Younes Lahrichi. I am currently a Computer Engineering senior who is also pursuing minors in Computer Science and Software Engineering, Mathematics, and Data Science at the University of Washington. I am also proud to say that I have been a Dean's list recipient for a number of quarters throughout my education.
            {'\n'}{'\n'}
             It all started when I was 11 years old, I was developing small games on Scratch. I was able to not only understand how some of my favorite games worked, but make some new games that applied the same fundamentals that I learned.
            {'\n'}{'\n'}
            This led me to choose a path in education that aligned with my interests. Since then I have been able to take countless courses that challenged me intellectually such as Data Structures and Algorithms, Operating Systems, and Embedded Systems. 
            {'\n'}{'\n'}
            Although my major is a mix of Computer Science and Electrical Engineering, my interests lean more toward the computer science. To supplement any of my deficiencies in this field I have done countless side projects and jumped at any work experience opportunities.
            {'\n'}{'\n'}
            Through these different projects I have gained a unique set of skills. Most notably Java, JavaScript, TypeScript, HTML, CSS, GIT, React, SQL Express.js, Node.js, Postman. </p>

        </div>
      </div>
    </div>
  );
}

export default StartPageInfoCard;
