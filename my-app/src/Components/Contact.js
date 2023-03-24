import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import React from "react";
import Mailbox from "../Img/Mailbox.png"

function Contact() {
    return (
        <div style={{display: 'flex', position:"relative", justifyContent:'center', alignItems:'center', height: 'auto', width: 'auto', paddingTop:"60%", background:"linear-gradient(to Bottom, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 13%, 1) 100%)"}}>
            <h1 id="contact" style={{ position: "absolute", top: "25%", textAlign: "center", left: "50%", transform: "translate(-50%, -50%)", background: "#ff0f7b", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: "7vw",clipPath:"inset(1px)" }}>
                Let's talk
            </h1>
            <h1 id="email" style={{ position: "absolute", top: "40%", textAlign: "center", left: "50%", transform: "translate(-50%, -50%)", color:"white", fontSize: "5vw"}}>
                contact@triplecritical.com
            </h1>

            <Button href='mailto: contact@triplecritical.com'  style={{position:"absolute", backgroundColor:"transparent", borderColor:"transparent", top:"50%"}}>
                <Image src={Mailbox} style={{width:"15%"}}></Image>
            </Button>
        </div>
    );
}


export default Contact;