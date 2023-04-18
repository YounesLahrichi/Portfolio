import Fab from "@mui/material/Fab";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PetsIcon from "@mui/icons-material/Pets";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from '@mui/icons-material/Home';
import "./components.css";
import { useState, useRef , useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import StartPageInfoCard from "./StartPageInfoCard";
import Projects from "./Projects.jsx";
import Experience from "./Experience";
import ContactMe from "./ContactMe";
import CuteCats from "./CuteCats";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import FlipCard from "./FlipCard";
import { WidthFull } from "@mui/icons-material";
import EngineeringIcon from '@mui/icons-material/Engineering';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';

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

  const [toggle, setToggle] = useState(false);

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const transRef = useRef(null);

  return (
    <div className="App">
      <div className="NavButtonLocations">
            <div className="SpaceNavButtons">
              <a 
              href="#" 
              class="button"
              onClick={async () => {
                setHome(true);
                setProjects(false);
                setExperience(false);
                setContactMe(false);
                setcuteCats(false);
                setToggle(true);
                await delay(400);
                setToggle(false)
                console.log("i was clicked");
              }}>
                <span class="icon"><HomeIcon fontSize="large"/></span>
                <span class="text">About Me</span>
              </a>
            </div>
            <div className="SpaceNavButtons">
              <a 
              href="#" 
              class="button"
              onClick={async() => {
                setHome(false);
                setProjects(true);
                setExperience(false);
                setContactMe(false);
                setcuteCats(false);
                setToggle(true);
                await delay(400);
                setToggle(false)
                console.log("i was clicked");
              }}>
                <span class="icon"><AutoAwesomeMotionIcon fontSize="large"/></span>
                <span class="text">Projects</span>
              </a>
            </div>
            <div className="SpaceNavButtons">
              <a 
              href="#" 
              class="button"
              onClick={async () => {
                setHome(false);
                setProjects(false);
                setExperience(true);
                setContactMe(false);
                setcuteCats(false);
                setToggle(true);
                await delay(400);
                setToggle(false)
                console.log("i was clicked");
              }}>
                <span class="icon"><EngineeringIcon fontSize="large"/></span>
                <span class="text">Experience</span>
              </a>
            </div>
            <div className="SpaceNavButtons">
              <a 
              href="#" 
              class="button"
              onClick={async () => {
                setHome(false);
                setProjects(false);
                setExperience(false);
                setContactMe(true);
                setcuteCats(false);
                setToggle(true);
                await delay(400);
                setToggle(false)
                console.log("i was clicked");
              }}>
                <span class="icon"><EmailIcon fontSize="large"/></span>
                <span class="text">Contact Me</span>
              </a>
            </div>
            <div className="SpaceNavButtons">
              <a 
              href="#" 
              class="button"
              onClick={async () => {
                setHome(false);
                setProjects(false);
                setExperience(false);
                setContactMe(false);
                setcuteCats(true);
                setToggle(true);
                await delay(400);
                setToggle(false)
                console.log("i was clicked");
              }}>
                <span class="icon"><PetsIcon fontSize="large"/></span>
                <span class="text">CuteCats</span>
              </a>
            </div>

           
          </div>
      <CSSTransition
        transRef={transRef}
        in={toggle}
        timeout={400}
        classNames="my-node"
      >
        <div className="CardLocation">
          {/* <div className="NavButtonLocations">
            <div className="SpaceNavButtons">
              <a 
              href="#" 
              class="button"
              onClick={async () => {
                setHome(true);
                setProjects(false);
                setExperience(false);
                setContactMe(false);
                setcuteCats(false);
                setToggle(true);
                await delay(400);
                setToggle(false)
                console.log("i was clicked");
              }}>
                <span class="icon"><HomeIcon fontSize="large"/></span>
                <span class="text">About Me</span>
              </a>
            </div>
            <div className="SpaceNavButtons">
              <a 
              href="#" 
              class="button"
              onClick={async() => {
                setHome(false);
                setProjects(true);
                setExperience(false);
                setContactMe(false);
                setcuteCats(false);
                setToggle(true);
                await delay(400);
                setToggle(false)
                console.log("i was clicked");
              }}>
                <span class="icon"><AutoAwesomeMotionIcon fontSize="large"/></span>
                <span class="text">Projects</span>
              </a>
            </div>
            <div className="SpaceNavButtons">
              <a 
              href="#" 
              class="button"
              onClick={async () => {
                setHome(false);
                setProjects(false);
                setExperience(true);
                setContactMe(false);
                setcuteCats(false);
                setToggle(true);
                await delay(400);
                setToggle(false)
                console.log("i was clicked");
              }}>
                <span class="icon"><EngineeringIcon fontSize="large"/></span>
                <span class="text">Experience</span>
              </a>
            </div>
            <div className="SpaceNavButtons">
              <a 
              href="#" 
              class="button"
              onClick={async () => {
                setHome(false);
                setProjects(false);
                setExperience(false);
                setContactMe(true);
                setcuteCats(false);
                setToggle(true);
                await delay(400);
                setToggle(false)
                console.log("i was clicked");
              }}>
                <span class="icon"><EmailIcon fontSize="large"/></span>
                <span class="text">Contact Me</span>
              </a>
            </div>
            <div className="SpaceNavButtons">
              <a 
              href="#" 
              class="button"
              onClick={async () => {
                setHome(false);
                setProjects(false);
                setExperience(false);
                setContactMe(false);
                setcuteCats(true);
                setToggle(true);
                await delay(400);
                setToggle(false)
                console.log("i was clicked");
              }}>
                <span class="icon"><PetsIcon fontSize="large"/></span>
                <span class="text">CuteCats</span>
              </a>
            </div>

           
          </div> */}
          {home && <StartPageInfoCard/>}
          {projects && <Projects/>}
          {experience && <Experience/>}
          {contactMe && <ContactMe/>}
          {cuteCats && <CuteCats/>}
      </div>
      </CSSTransition>

    </div>
  );
}

export default NavBar;
