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
import { BiLinkExternal } from "react-icons/bi";

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
      title: "NFP Designs (JavaScript, Vue.js)",
      imgPath: nfpDesigns,
      description: "Was the first Vue 3 website I created. The site represents a non-for-profit company that provides software development services to other charity organisations at a cheap rate. I focused on learning how to manage state and pass data between different components. I also built my own custom accordion and modal in CSS and JavaScript.",
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
    },
      {
        title: "Space Game (C++)",
        imgPath: spaceGame,
        description: "Is the first video game I created from scratch utilising C++ and the SplashKit game library. Try it out where you play as a spaceship having to survive waves of infinite levels which increase the difficulty of surviving. It is compatible for MacOS and Windows.",
        firstPoint: "Delivered a spaceship game in C++ with a key focus on clean and understandable code.",
        secondPoint: "Constructed a cross-platform user-friendly game with a saving system using file I/O.",
        thirdPoint: "Established a reward and difficulty system to encourage players to stay engaged.",
        link: "https://github.com/Josh-Piper/Space-Game-ITP",
        onClick: () => handleShowProject([2])
      },
      {
        title: "Key Word Sign (React, Node.js)",
        imgPath: keywordSign,
        description: "A Hackathon application.",
        firstPoint: "Created the whole backend.",
        secondPoint: "Was the team leader orchestrating the idea and delivery of the project.",
        thirdPoint: "One of the finalists.",
        link: "https://github.com/Josh-Piper/Mlb-Hack-KeyWordSign",
        onClick: () => handleShowProject([4])

      },
      {
        title: "Swish Cards (Kotlin, Android)",
        imgPath: swishCards,
        description: "An Android application used as a flash card revision application. this was the first mobile application I created from scratch.",
        firstPoint: "Jetpack Compose when it was new",
        secondPoint: "Kotlin and MVVC architecture",
        thirdPoint: "Learning about callbacks and all sorts of stuff.",
        link: "https://github.com/Josh-Piper/Swish-Cards",
        onClick: () => handleShowProject([5])
      },
      {
        imgPath: timeTasker,
        title: "Time Tasker (C#, WinForms)",
        description: "A group project. A todo application..",
        firstPoint: "Worked in a team of 4 which I led and ensured smooth delivery after creating documentation and design proposal",
        secondPoint: "Assisted development used in the core platform.",
        thirdPoint: "Was a University project which achieved a High Distinction.",
        link: "https://github.com/RewForeN/Time-Tasker",
        onClick: () => handleShowProject([6])
      },
      {
        title: "Battleships (C#, .NET)",
        imgPath: battleships,
        description: "Was the first video game I created in a team. We leveraged the DotNet C# frameworks with the game library SplashKit after a migration from Visual Basic.",
        firstPoint: "Directed a team of 4 to upgrade the codebase for a Windows-based Battleship's game from Visual Basic to C#.",
        secondPoint: "Integrated CI/CD pipeline as well as architected synchronization between Discord, Trello, GitHub, and Visual Studio to allow for a single source of truth.",
        thirdPoint: "Managed weekly standup assigned team tasks, and responsible for collection and validation of all",
        link: "https://github.com/Josh-Piper/Battleships team documents and deliverables.",
        onClick: () => handleShowProject([1])
      },
      {
        title: "COVID-19 and Twitter Data Analysis (Python, Jupyter Notebooks)",
        imgPath: analytics,
        description: "A data analysis project was Numpy, Pandas and Matplotlib to understand how COVID has affected Australia in relation to its statistics and Twitter tweets. Note this was a University project achieving a High Distinction.",
        firstPoint: "Leveraged Matplotlib, Pandas, Scipy and Numpy to derive infographics to present information easier.",
        secondPoint: "Collected and cleaned over 10,000 data rows to ensure clean and concise data.",
        thirdPoint: "Performed clustering and classification to compare the ML processes given a specific dataset.",
        link: "N/A",
        onClick: () => handleShowProject([3])
      },
  ];

  const renderRedirectToProjectButton = (project) => {
    if (project.renderButtonToProject) {
      return project.renderButtonToProject();
    };
  }

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
                {renderRedirectToProjectButton(projectToShow)}
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
              <Col md={4} className="project-card" key={project.title}>
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
