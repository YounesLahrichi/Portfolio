

import dotaLogo from "./dota2.jpg"

function IndividualCardV(props) {
    return (

        <div className="CardMainV">
            <div className="CardBodyV">
                <img src={props.img} className="Card_ImageV"/>
                    <h2 className="CardTitleV">{props.title}</h2>
                    <h3 className="CardTitleV">{props.company}</h3>
                    <h4 className="CardTitleV">{props.time}</h4>
                    <p className="CardDescriptionV"> {props.description}</p>
                
            </div>
        </div>
    );
  }
  
  export default IndividualCardV;