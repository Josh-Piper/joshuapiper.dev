import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Like many programmers, my love for this field stemmed from videogames.
              Throughout High School I pioneered the Minecraft server field by owning
              various servers with over 100 concurrent players and moderating those with
              thousands of concurrent players.
              
              <br />
              <br />

              After High School I majored in network and system
              administration at Swinburne University. I built my skills regarding Routing & Switching, Windows Servers, and
              virtualising software driven networks. However, a specific class introduced me to programming
              where I set up a website, GUI client and a console application to automatically link DNS records with a BIND09 FreeBSD server.
              My passion for programming was then lit, and I changed majors to focus on software.

              <br />
              <br />

              I am currently in my last year of University after interning as a full-stack developer at Fontis e-commerce consulting group and am
              now employeed as a graduate software engineer at Tyro Payments. 
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> WHAT CAN YOU DO?  </span>
            </h1>
            <p className="home-about-body">
              I'm glad you asked!
              
              <br />
              <br />
            </p>
          </Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Josh-Piper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/joshua-e-piper/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:josh.piper1505@yahoo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
