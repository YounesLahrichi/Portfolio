
import dotaLogo from "./dota2.jpg"

function IndividualCardH(props) {
    return (

        <div className="CardMain">
            <div className="CardBody">
                <img src={props.img} className="Card_Image"/>
                <div className="Card_Content">
                    <h2 className="CardTitle">{props.title}</h2>
                    <h4 className="CardTitle">{props.techStack}</h4>
                    <p className="CardDescription"> {props.description}</p>
                </div>
                
            </div>
        </div>
    );
  }
  
  export default IndividualCardH;