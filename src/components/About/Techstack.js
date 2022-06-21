import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
          <CgCPlusPlus title="C++"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> 
        {/* Replace this */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDb" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        {/* Replace this */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        {/* Replace this */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        {/* Replace this */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
        {/* Replace this */}
      </Col>
    </Row>
  );
}

export default Techstack;
