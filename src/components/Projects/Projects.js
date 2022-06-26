import React, { useState } from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nfpDesigns from "../../Assets/Projects/nfp-designs.png";
import battleships from "../../Assets/Projects/battleships.png";
import spaceGame from "../../Assets/Projects/spacegame.png";
import keywordSign from "../../Assets/Projects/key-word-sign.png";
import swishCards from "../../Assets/Projects/swish-cards.jpeg";
import timeTasker from "../../Assets/Projects/time-tasker.jpeg";
import analytics from "../../Assets/Projects/analytics.png";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { BiLinkExternal, BiCode } from "react-icons/bi";

/**
 * To Do
 * - Make project pictures to be the same. Similar to LaithHarb
 * Might use a Macbook as the presentation.
 * 
 * - Add a second click to view the website (NFP Designs)
 */
function Projects() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [projectToShow, setProjectToShow] = useState({});
  const handleShowProject = (index) => {
    handleShow();
    setProjectToShow(projects[index]);
  }
  const projects = [
    {
      title: "NFP Designs (Vue.js)",
      imgPath: nfpDesigns,
      description: "The first Vue.js website I created managing state and creating a custom accordion and modal.",
      firstPoint: "Engineering owner of the E2D experience for the responsive web design targeting primary device types including mobile, tablet and desktop layouts.",
      secondPoint: "Integrated a variety of Vue.js coding practices including mixins, TypeScript support and routing to provide a seamless interaction between the different components.",
      thirdPoint: "Organised robust sorting mechanisms considering the different implementations for best performance.",
      link: "https://github.com/Josh-Piper/nfp-designs",
      onClick: () => handleShowProject([0]),
      renderButtonToProject: () => (
        <Button variant="light" href="http://nfp-designs.herokuapp.com/" target="_blank">
        <BiLinkExternal /> &nbsp;
          View Website
      </Button>
      )
      // Create a render function to render second link to show the website
      // For NFP Designs site and Key Word Sign. And when I create the DSEC website.
    },
    {
        title: "Battleships (C#, .NET)",
        imgPath: battleships,
        description: "A DotNet SplashKit battleships game create in C# after migrating it from Visual Basic.",
        firstPoint: "Directed a team of 4 to upgrade the codebase for a Windows-based Battleship's game from Visual Basic to C#.",
        secondPoint: "Integrated CI/CD pipeline as well as architected synchronization between Discord, Trello, GitHub, and Visual Studio to allow for a single source of truth.",
        thirdPoint: "Managed weekly standup assigned team tasks, and responsible for collection and validation of all",
        link: "https://github.com/Josh-Piper/Battleships team documents and deliverables.",
        onClick: () => handleShowProject([1])
      },
      {
        title: "Space Game (C++, SplashKit)",
        imgPath: spaceGame,
        description: "Another SplashKit video game created in C++. With a focus of clean code.",
        firstPoint: "Delivered a spaceship game in C++ with a key focus on clean and understandable code.",
        secondPoint: "Constructed a cross-platform user-friendly game with a saving system using file I/O.",
        thirdPoint: "Established a reward and difficulty system to encourage players to stay engaged.",
        link: "https://github.com/Josh-Piper/Space-Game-ITP",
        onClick: () => handleShowProject([2])
      },
      {
        title: "COVID-19 and Twitter Data Analysis",
        imgPath: analytics,
        description: "Add bullet points here.",
        firstPoint: "Leveraged Matplotlib, Pandas, Scipy and Numpy to derive infographics to present information easier.",
        secondPoint: "Collected and cleaned over 10,000 data rows to ensure clean and concise data.",
        thirdPoint: "Performed clustering and classification to compare the ML processes given a specific dataset.",
        link: "N/A",
        onClick: () => handleShowProject([3])
      },
      {
        title: "Key Word Sign (Hackathon)",
        imgPath: keywordSign,
        description: "Sup dup.",
        firstPoint: "Some reason",
        secondPoint: "Some reason",
        thirdPoint: "Some reason",
        link: "https://github.com/Josh-Piper/Mlb-Hack-KeyWordSign",
        onClick: () => handleShowProject([4])

      },
      {
        title: "Swish Cards",
        imgPath: swishCards,
        description: "Swooh.",
        firstPoint: "Some reason",
        secondPoint: "Some reason",
        thirdPoint: "Some reason",
        link: "https://github.com/Josh-Piper/Swish-Cards",
        onClick: () => handleShowProject([5])
      },
      {
        imgPath: timeTasker,
        title: "Time Tasker",
        description: "Swooh.",
        firstPoint: "Some reason",
        secondPoint: "Some reason",
        thirdPoint: "Some reason",
        link: "https://github.com/RewForeN/Time-Tasker",
        onClick: () => handleShowProject([6])
      }
  ];

  return (
    <Container fluid className="project-section">
      <Modal
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {projectToShow.title}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ul>
            <li>
              {projectToShow.firstPoint}
            </li>
            <li>
              {projectToShow.secondPoint}
            </li>
            <li>
              {projectToShow.thirdPoint}
            </li>
          </ul>
        </Modal.Body>

        <Modal.Footer>
          {
            projectToShow.link === "N/A"
            ? 
              <Button variant="secondary" disabled>
                No Repository
              </Button>
            : 
              <>
                { projectToShow.renderButtonToProject && projectToShow.renderButtonToProject() }
                <Button variant="primary" href={projectToShow.link} target="_blank">
                  <BiLinkExternal /> &nbsp;
                  Goto Repository
                </Button>
              </>
          }
        </Modal.Footer>
      </Modal>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Learning <strong className="purple">Portfolio</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects that I've used to learn specific languages and frameworks on the side.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {
            projects.map((project) => (
              <Col md={4} className="project-card">
                <ProjectCard
                  title={project.title}
                  imgPath={project.imgPath}
                  description={project.description}
                  link={project.link}
                  onClick={project.onClick}
                  />
              </Col>
            ))
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
