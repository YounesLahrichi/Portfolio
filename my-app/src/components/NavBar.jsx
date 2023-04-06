import Fab from "@mui/material/Fab";
import InfoIcon from "@mui/icons-material/Info";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PetsIcon from "@mui/icons-material/Pets";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import "./components.css";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const classes = makeStyles();

function NavBar() {
  const AboutMe = document.getElementById("StartInfo");
  const doClickAboutMe = () => AboutMe.scrollIntoView({ behavior: "smooth" });

  const Projects = document.getElementById("Projects");
  const doClickProjects = () => Projects.scrollIntoView({ behavior: "smooth" });

  const Experience = document.getElementById("Experience");
  const doClickExperience = () =>
    Experience.scrollIntoView({ behavior: "smooth" });

  const ContactMe = document.getElementById("ContactMe");
  const doClickContactMe = () =>
    ContactMe.scrollIntoView({ behavior: "smooth" });

  const CuteCats = document.getElementById("CuteCats");
  const doClickCuteCats = () => CuteCats.scrollIntoView({ behavior: "smooth" });

  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);

  return (
    <div>
      <div className="SpaceNavButtons">
        <Fab
          color="primary"
          aria-label="aboutMe"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          className={classes.iconHover}
          variant="extended"
          onClick={() => {
            doClickAboutMe();
            console.log("i was clicked");
          }}
        >
          {hover ? "About Me" : <InfoIcon />}
        </Fab>
      </div>

      <div className="SpaceNavButtons">
        <Fab
          color="primary"
          aria-label="projects"
          onMouseOver={() => setHover1(true)}
          onMouseOut={() => setHover1(false)}
          className={classes.iconHover}
          variant="extended"
          onClick={() => {
            doClickProjects();
            console.log("i was clicked");
          }}
        >
          {hover1 ? "Projects" : <AccountTreeIcon />}
        </Fab>
      </div>

      <div className="SpaceNavButtons">
        <Fab
          color="primary"
          aria-label="experience"
          onMouseOver={() => setHover2(true)}
          onMouseOut={() => setHover2(false)}
          className={classes.iconHover}
          variant="extended"
          onClick={() => {
            doClickExperience();
            console.log("i was clicked");
          }}
        >
          {hover2 ? "Experience" : <WorkIcon />}
        </Fab>
      </div>

      <div className="SpaceNavButtons">
        <Fab
          color="primary"
          aria-label="contactMe"
          onMouseOver={() => setHover3(true)}
          onMouseOut={() => setHover3(false)}
          className={classes.iconHover}
          variant="extended"
          onClick={() => {
            doClickContactMe();
            console.log("i was clicked");
          }}
        >
          {hover3 ? "Contact Me" : <EmailIcon />}
        </Fab>
      </div>

      <div className="SpaceNavButtons">
        <Fab
          color="primary"
          aria-label="cuteCats"
          onMouseOver={() => setHover4(true)}
          onMouseOut={() => setHover4(false)}
          className={classes.iconHover}
          variant="extended"
          onClick={() => {
            doClickCuteCats();
            console.log("i was clicked");
          }}
        >
          {hover4 ? "Cute Cats" : <PetsIcon />}
        </Fab>
      </div>
    </div>
  );
}

export default NavBar;
