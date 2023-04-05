
import selfie from './whiteGUY.jpg';
import Button from '@mui/material/Button';



function StartPageInfoCard(){

    return(
        
        <div className="Card">
            <div className="ImageContent"> 
                <span className="Overlay"></span>
                <div className = "CardImage">

                    <img src = {selfie} alt = "" class = "CardImg"></img>
                </div>
            </div>
            <div className = "CardContent">
                    <h2 className = "Name"> Younes Lahrichi</h2>
                    <p className = "Description"> BLAHBLAHBALBJALkjflsadkjfaslkdfjaslkdfjasldfkjasldkfjaslkdfjaskld;fjasdlkfjasklfjaslfsdaf</p>
                    <Button 
                    variant="contained" 
                    className = "LearnButton"
                    onClick={() => {console.log("i was clicked")}}>About Me!</Button>
                </div>

        </div>
        
    );
}

export default StartPageInfoCard;