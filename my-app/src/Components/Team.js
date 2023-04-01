import React from "react";
import { Button, Image } from "react-bootstrap";
import Rafa from "../Img/portrait_rafa.png"
import Kevin from "../Img/portrait_kevin.png"
import Edward from "../Img/portrait_ed.png"
import Landon from "../Img/portrait_landon.png"
import Shawn from "../Img/portrait_shawn.png"
import Erin from "../Img/portrait_erin.png"
import Anna from "../Img/portrait_anna.png"
import Jet from "../Img/portrait_jet.png"
import Linkedin from "../Img/linkedin.png"
import Twitter from "../Img/twitter.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function About(){
    return(
        <div style={{display:"flex" ,position:"relative", background:"linear-gradient(to bottom, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 13%, 1) 100%)", color:"white"}}>
            <h1 id="team" style={{position:"absolute", textAlign:"center", top:"15vw", left:"50%", transform: "translate(-50%, -50%)", color:"#ff0f7b", fontSize:"6vw"}}>The Team</h1>
            <Container style={{marginTop:"30vw"}}>
                <Row>
                    <Col style={{textAlign:"center"}}>
                        <Image src={Edward} style={{width:"20vw"}}></Image>
                        <h1>Edward Chang</h1>
                        <p1>Creative Director<br></br></p1>
                        <Button href="https://twitter.com/Phalistafer" style={{backgroundColor:"transparent", borderColor:"transparent"}}>
                            <Image src={Twitter} style={{width:"7.5vw", top:"7.5vw"}}></Image>
                        </Button>
                        <Button href="https://www.linkedin.com/in/edward-dash-chang/" style={{backgroundColor:"transparent", borderColor:"transparent"}}>
                            <Image src={Linkedin} style={{width:"7.5vw", top:"7.5vw"}}></Image>
                        </Button>
                    </Col>
                    <Col style={{textAlign:"center"}}>
                        <Image src={Rafa} style={{width:"20vw"}}></Image>
                        <h1>Rafael Padilla</h1>
                        <p1>Executive Producer<br></br></p1>
                        <Button href="https://twitter.com/RafaGamedev" style={{backgroundColor:"transparent", borderColor:"transparent"}}>
                            <Image src={Twitter} style={{width:"7.5vw", top:"7.5vw"}}></Image>
                        </Button>
                        <Button href="https://www.linkedin.com/in/rafaelpadillaperez/" style={{backgroundColor:"transparent", borderColor:"transparent"}}>
                            <Image src={Linkedin} style={{width:"7.5vw", top:"7.5vw"}}></Image>
                        </Button>
                    </Col>
                    <Col style={{textAlign:"center"}}>
                        <Image src={Kevin} style={{width:"20vw"}}></Image>
                        <h1>Kevin Prakash</h1>
                        <p1>Technical Game Design Director<br></br></p1>
                        <Button href="https://twitter.com/kevprakash" style={{backgroundColor:"transparent", borderColor:"transparent"}}>
                            <Image src={Twitter} style={{width:"7.5vw", top:"7.5vw"}}></Image>
                        </Button>
                        <Button href="https://www.linkedin.com/in/kevprakash/" style={{backgroundColor:"transparent", borderColor:"transparent"}}>
                            <Image src={Linkedin} style={{width:"7.5vw", top:"7.5vw"}}></Image>
                        </Button>
                    </Col>

                </Row>
                <Row>
                <Col style={{textAlign:"center"}}>
                        <Image src={Landon} style={{width:"20vw"}}></Image>
                        <h1>Landon Ellis</h1>
                        <p1>Lead Character and Animation Artist<br></br></p1>
                        <Button href="" style={{backgroundColor:"transparent", borderColor:"transparent"}}>
                            <Image src={Twitter} style={{width:"7.5vw", top:"7.5vw"}}></Image>
                        </Button>
                        <Button href="" style={{backgroundColor:"transparent", borderColor:"transparent"}}>
                            <Image src={Linkedin} style={{width:"7.5vw", top:"7.5vw"}}></Image>
                        </Button>
                    </Col>
                    <Col style={{textAlign:"center"}}>
                        <Image src={Shawn} style={{width:"20vw"}}></Image>
                        <h1>Shawn Yao</h1>
                        <p1>Audio Director<br></br></p1>
                        <Button href="https://twitter.com/ShawnisShaya" style={{backgroundColor:"transparent", borderColor:"transparent"}}>
                            <Image src={Twitter} style={{width:"7.5vw", top:"7.5vw"}}></Image>
                        </Button>
                        <Button href="https://www.linkedin.com/in/shawnyaogameaudio/" style={{backgroundColor:"transparent", borderColor:"transparent"}}>
                            <Image src={Linkedin} style={{width:"7.5vw", top:"7.5vw"}}></Image>
                        </Button>
                    </Col>
                    <Col style={{textAlign:"center"}}>
                        <Image src={Erin} style={{width:"20vw"}}></Image>
                        <h1>Erin Kelley</h1>
                        <p1>Art Director<br></br></p1>
                        <Button href="" style={{backgroundColor:"transparent", borderColor:"transparent"}}>
                            <Image src={Twitter} style={{width:"7.5vw", top:"7.5vw"}}></Image>
                        </Button>
                        <Button href="https://www.linkedin.com/in/erin-kelley-a14b2a103/" style={{backgroundColor:"transparent", borderColor:"transparent"}}>
                            <Image src={Linkedin} style={{width:"7.5vw", top:"7.5vw"}}></Image>
                        </Button>
                    </Col>
                </Row>
                <Row>
                <Col style={{textAlign:"center"}}>
                        <Image src={Anna} style={{width:"20vw"}}></Image>
                        <h1>Anna Cagle</h1>
                        <p1>2D Artist<br></br></p1>
                        <Button href="" style={{backgroundColor:"transparent", borderColor:"transparent"}}>
                            <Image src={Twitter} style={{width:"7.5vw", top:"7.5vw"}}></Image>
                        </Button>
                        <Button href="" style={{backgroundColor:"transparent", borderColor:"transparent"}}>
                            <Image src={Linkedin} style={{width:"7.5vw", top:"7.5vw"}}></Image>
                        </Button>
                    </Col>
                    <Col style={{textAlign:"center"}}>
                        <Image src={Jet} style={{width:"20vw"}}></Image>
                        <h1>Jet</h1>
                        <p1>Marketing Director<br></br></p1>
                        <Button href="" style={{backgroundColor:"transparent", borderColor:"transparent"}}>
                            <Image src={Twitter} style={{width:"7.5vw", top:"7.5vw"}}></Image>
                        </Button>
                        <Button href="" style={{backgroundColor:"transparent", borderColor:"transparent"}}>
                            <Image src={Linkedin} style={{width:"7.5vw", top:"7.5vw"}}></Image>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default About;