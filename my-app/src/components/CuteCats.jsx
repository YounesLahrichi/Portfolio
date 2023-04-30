import { Button } from "@material-ui/core";
import dotaLogo from "./dota2.jpg"

function CuteCats() {
    return (
      <div className="CardMake">
        <div className="ProjectsHeading">
            <h1 className="pageHeading">Cat / Kitten Generator</h1>
          </div>
          <div className="catWrapper">
              <img src={dotaLogo} className="catPicture"/>
              <div className="buttonCats">
                <div className="buttonCatsChild">
                  <Button sx = {{width:300}}size="large" variant="outlined">Cute Cat</Button>
                </div>
                <div className="buttonCatsChild">
                  <Button variant="outlined">Cute Kitten</Button>
                </div>
              </div>
          </div>
      </div>
    );
  }
  
  export default CuteCats;
  