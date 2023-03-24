import React from "react";
import { Image } from "react-bootstrap";
import Rafa from "../Img/portrait_rafa.png"
import Kevin from "../Img/portrait_kevin.png"
import Edward from "../Img/portrait_ed.png"
import Landon from "../Img/portrait_landon.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function About(){
    return(
        <div style={{display:"flex" ,position:"relative", background:"linear-gradient(to bottom, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 13%, 1) 100%)", color:"white"}}>
            <h1 id="team" style={{position:"absolute", textAlign:"center", top:"17.5%", left:"50%", transform: "translate(-50%, -50%)", background:"#ff0f7b", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",fontSize:"7vw", whiteSpace:"nowrap", clipPath:"inset(1px)"}}>The Team</h1>
            <Container style={{marginTop:"30vw"}}>
                <Row>
                    <Col>
                        <Image src={Edward} style={{width:"20vw"}}></Image>
                        <h1>Edward Chang</h1>
                        <p1>Creative Director</p1>
                    </Col>
                    <Col>
                        <Image src={Rafa} style={{width:"20vw"}}></Image>
                        <h1>Rafael Padilla</h1>
                        <p1>Executive Producer</p1>
                    </Col>
                    <Col>
                        <Image src={Kevin} style={{width:"20vw"}}></Image>
                        <h1>Kevin Prakash</h1>
                        <p1>Technical Game Design Director</p1>
                    </Col>

                </Row>
                    <Col>
                        <Image src={Landon} style={{width:"20vw"}}></Image>
                        <h1>Landon Ellis</h1>
                        <p1>Lead Character and Animation Artist</p1>
                    </Col>
                <Row>
                </Row>
            </Container>
            
        </div>
    );
}
export default About;