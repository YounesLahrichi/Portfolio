import selfie from "./whiteGUY.jpg";
import resume from "./Resume_Lahrichi_Younes.pdf";
import Fab from "@mui/material/Fab";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import Tooltip from "@mui/material/Tooltip";

function StartPageInfoCard() {
  return (
    <div className="Card">
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
          <p className="Description">
            {" "}
            BLAHBLAHBALBJALkjflsadkjfaslkdfjaslkdfjasldfkjasldkfjaslkdfjaskld;fjasdlkfjasklfjaslfsdaf
          </p>
        </div>
      </div>

      <div id="Projects" className="Projects"></div>

      <div id="Experience" className="Experience"></div>

      <div id="ContactMe" className="ContactMe"></div>

      <div id="CuteCats" className="CuteCats"></div>
    </div>
  );
}

export default StartPageInfoCard;
