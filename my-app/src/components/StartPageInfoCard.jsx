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

function StartPageInfoCard() {
  const transRef = useRef(null);
  return (
    <div className="CardMake">
      <div id="StartInfo" className="StartInfo">
        <div className="ImageContent">
          <span className="Overlay"></span>
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
          <h2 className="Name">Hi i'm Younes Lahrichi</h2>
          <p className="Description">
            {" "}
            BLAHBLAHBALBJALkjflsadkjfaslkdfjaslkdfjasldfkjasldkfjaslkdfjaskld;fjasdlkfjasklfjaslfsdaf
          </p>

        </div>
      </div>
    </div>
  );
}

export default StartPageInfoCard;
