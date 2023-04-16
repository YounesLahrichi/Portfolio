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
            .typeString("Hi There! I'm Younes Lahrichi!")
            .start();
            }}
            /></h1>
          <p className="Description">
            {" "}
            A paragraph should ideally be a smooth, succinct experience that goes through a bit of exposition, illustrates an idea, sums up the point, and primes the reader for the next paragraph.

Ideally.

In practice, a writer can get too caught up in all the things they have to say and fail to organize it all into bits an ordinary human being would be able to digest. The end result is a huge run-on paragraph that makes it difficult to recall the original point of it if there was one in the first place. The reader's eyes glaze over and all they see is a wall of text.

This afflicts all written media, but it is particularly infamous for its effect on Comic Books. One of the first things learned in comics is how to use dialogue bubbles effectively; a writer not allocating space carefully will end up covering their panel with a bunch of text and white space. Eventually, the reader will realize that they're primarily looking at plain text rather than the vivid form of visual storytelling that comic books are famed for. TL;DR indeed.          </p>

        </div>
      </div>
    </div>
  );
}

export default StartPageInfoCard;
