import {CSSTransition} from 'react-transition-group'
import {useState} from 'react';
import dotaLogo from "./dota2.jpg"

function FlipCard(props) {

    const[showFront, setShowFront] = useState(true);

    return (
        <div className="flippable-card-container">
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames="flip"
            >
                <div className="flip-Card"
                    onClick={() =>{
                        setShowFront((v) => !v)
                    }}>
                    <div className="card-back">
                        <h2 className="card_back_heading">{props.backTitle}</h2>
                        <h3 className="card_back_role">{props.role}</h3>
                        <h4 className="card_back_timeline">{props.timeline}</h4>
                        <p className="card_back_description">{props.description}</p>

                    </div>
                    <div className="card-front">
                        <img src={props.backgroundFront} className="flip_Card_ImageV"/>
                        <h2 className="card_front_heading">{props.frontTitle}</h2>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
  }
  
  export default FlipCard;