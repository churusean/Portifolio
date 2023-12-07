import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/traveller.PNG";
import projImg2 from "../assets/img/marble.PNG";
import projImg3 from "../assets/img/pindrop.PNG";
import projImg4 from "../assets/img/poultry.PNG";
import projImg5 from "../assets/img/startup.PNG";
import projImg6 from "../assets/img/portfolio.PNG";
import projImg7 from "../assets/img/ziva.PNG";
import projImg9 from "../assets/img/hms.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "Traveller",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Resturant",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "PinDrop",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Startup",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Poultry",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];
  const projects1 = [
    {
      title: "ZIVA",
      description: "SMS under AURORA",
      imgUrl: projImg7,
    },
    {
      title: "AURORA",
      description: "HMS under AURORA",
      imgUrl: projImg9,
    },

  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {(isVisible) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInDown" : ""
                  }
                >
                  <h2 className="gradtext">Projects</h2>
                  <p>
                    Welcome to my projects tab, where you can see some of the
                    amazing digital products that I have created as a full stack
                    developer and a mobile and web developer. You can see the mockups, ideas, and
                    features of these projects, as well as the challenges and
                    goals that I have for them. I hope you enjoy browsing
                    through my projects and feel free to contact me if you have
                    any feedback or suggestions.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Completed</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">In Progress</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Prospects</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects1.map((project,index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>
                    Nothing at the Moment
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};

export default Projects;
