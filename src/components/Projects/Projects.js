import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nfpDesigns from "../../Assets/Projects/nfp-designs.png";
import battleships from "../../Assets/Projects/battleships.png";
import spaceGame from "../../Assets/Projects/spacegame.png";
import keywordSign from "../../Assets/Projects/key-word-sign.png";
import swishCards from "../../Assets/Projects/swish-cards.jpeg";
import timeTasker from "../../Assets/Projects/time-tasker.jpeg";
import analytics from "../../Assets/Projects/analytics.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nfpDesigns}
              isBlog={false}
              title="NFP Designs (Vue.js)"
              description="Add bullet points here."
              link="https://github.com/JOsh-Piper/nfp-designs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={battleships}
              isBlog={false}
              title="Battleships (C#, .NET)"
              description="Add bullet points here."
              link="https://github.com/Josh-Piper/Battleships"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spaceGame}
              isBlog={false}
              title="Space Game (C++, SplashKit)"
              description="Add bullet points here."
              link="https://github.com/Josh-Piper/Space-Game-ITP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={analytics}
              isBlog={false}
              title="COVID-19 and Twitter Data Analysis"
              description="Add bullet points here."
              link="N/A"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keywordSign}
              isBlog={false}
              title="Key Word Sign (Hackathon)"
              description="Sup dup."
              link="https://github.com/Josh-Piper/Mlb-Hack-KeyWordSign"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swishCards}
              isBlog={false}
              title="Swish Cards"
              description="Swooh."
              link="https://github.com/Josh-Piper/Swish-Cards"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={timeTasker}
              isBlog={false}
              title="Time Tasker"
              description="Swooh."
              link="https://github.com/RewForeN/Time-Tasker"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
