import Fab from "@mui/material/Fab";
import InfoIcon from "@mui/icons-material/Info";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PetsIcon from "@mui/icons-material/Pets";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import "./components.css";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import StartPageInfoCard from "./StartPageInfoCard";
import Projects from "./Projects.jsx";
import Experience from "./Experience";
import ContactMe from "./ContactMe";
import CuteCats from "./CuteCats";

const classes = makeStyles();

function NavBar() {

  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);

  const [home, setHome] = useState(true);
  const [projects, setProjects] = useState(false);
  const [experience, setExperience] = useState(false);
  const [contactMe, setContactMe] = useState(false);
  const [cuteCats, setcuteCats] = useState(false);

  return (
    <div className="App">
      <div className="CardLocation">
        {home && <StartPageInfoCard/>}
        {projects && <Projects/>}
        {experience && <Experience/>}
        {contactMe && <ContactMe/>}
        {cuteCats && <CuteCats/>}
      </div>
      <div className="NavBarLocation">
      <div className="SpaceNavButtons">
        <Fab
          color="primary"
          aria-label="aboutMe"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          className={classes.iconHover}
          variant="extended"
          onClick={() => {
            setHome(true);
            setProjects(false);
            setExperience(false);
            setContactMe(false);
            setcuteCats(false);
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
            setHome(false);
            setProjects(true);
            setExperience(false);
            setContactMe(false);
            setcuteCats(false);
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
            setHome(false);
            setProjects(false);
            setExperience(true);
            setContactMe(false);
            setcuteCats(false);
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
            setHome(false);
            setProjects(false);
            setExperience(false);
            setContactMe(true);
            setcuteCats(false);
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
            setHome(false);
            setProjects(false);
            setExperience(false);
            setContactMe(false);
            setcuteCats(true);
            console.log("i was clicked");
          }}
        >
          {hover4 ? "Cute Cats" : <PetsIcon />}
        </Fab>
      </div>
      </div>
    </div>
  );
}

export default NavBar;
