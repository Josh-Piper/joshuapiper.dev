import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="NFP Designs (Vue.js)"
              description="Add bullet points here."
              link="https://github.com/JOsh-Piper/nfp-designs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Battleships (C#, .NET)"
              description="Add bullet points here."
              link="https://github.com/Josh-Piper/Battleships"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Space Game (C++, SplashKit)"
              description="Add bullet points here."
              link="https://github.com/Josh-Piper/Space-Game-ITP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="COVID-19 and Twitter Data Analysis"
              description="Add bullet points here."
              link="N/A"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Key Word Sign (Hackathon)"
              description="Sup dup."
              link="https://github.com/Josh-Piper/Mlb-Hack-KeyWordSign"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Swish Cards"
              description="Swooh."
              link="https://github.com/Josh-Piper/Swish-Cards"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
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
