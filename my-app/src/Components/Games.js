import Image from 'react-bootstrap/Image'

import Furi from "../Img/Furi.gif"
import Shogoro from "../Img/Shogoro.gif"
import Gameplay from "../Img/Gameplay.gif"
function Games() {
    return (
        // Div for section
        <div id='games'  style={{display:"flex", position: "relative", background:"linear-gradient(to top, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 13%, 1) 100%)", width:"100%", paddingBottom:"5vw", paddingTop:"40vw"}}>
            <h1 style={{ position: "absolute", textAlign: "center", top: "25%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor:"#ff0f7b", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", fontSize: "7vw", clipPath:"inset(1px)"}}>
                Games
            </h1>
            <iframe style={{position: "relative", left: "50%", transform: "translate(-50%, -50%)"}} src="https://store.steampowered.com/widget/2336840/" frameborder="0" width="646" height="190"></iframe>
            <Image src={Shogoro} style={{position:"absolute", top:"40vw", left:"5%", height:"25%"}}></Image>
            <Image src={Furi} style={{position:"absolute", top:"75%", left:"20%", height:"25%"}}></Image>
        </div>
    );
}

export default Games;