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
                    <div className="card-back">back</div>
                    <div className="card-front">
                        <img src={dotaLogo} className="flip_Card_ImageV"/>
                        <h2 className='headingTest'>Hello</h2>

                    </div>
                </div>
            </CSSTransition>
        </div>
    );
  }
  
  export default FlipCard;