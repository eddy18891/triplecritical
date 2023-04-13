import Image from 'react-bootstrap/Image'
import Logo from "../Img/Logo.png"
import { Button } from 'react-bootstrap';

function Cover(){
    return(
        <div id='home' style={{display: 'flex', position:"relative", justifyContent:'left', alignItems:'center', height: 'auto', width: 'auto', paddingTop:"20vh", background:"linear-gradient(to top, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 13%, 1) 100%)"}}>
                <Image src={Logo} style={{overflowX:"hidden", opacity:1, height:"50vw"}}></Image>
                <h1 style={{position:"absolute", textAlign:"center", top:"40%", left:"70%", transform: "translate(-50%, -50%)", color:"#ff0f7b", fontSize:"7vw", whiteSpace:"nowrap"}}>Triple Critical</h1>
                <h2 style={{width: "50vw", position:"absolute", textAlign:"center", top:"55%", left:"70%", transform: "translate(-50%, -50%)", color:"white", fontSize:"3vw"}}>Games by <b>everyone</b> for <b>everyone</b>.</h2>
                <p style={{position:"absolute", textAlign:"center", top:"70%", left:"70%", overflowWrap:"normal", transform: "translate(-50%, -50%)", color:"white", fontSize:"2.5vw"}}>We empower careers in gaming and create limitless games for global play.</p>
                <Button href='#team' variant="light" style={{position:"absolute", textAlign:"center", top:"85%", left:"70%", transform: "translate(-50%, -50%)", fontSize:"2vw"}}>The team</Button>
        </div>
    );
}
export default Cover;