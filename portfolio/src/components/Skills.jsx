import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className='skill' id='skill'>
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2 className='gradtext'>Skills</h2>
                        <p>
                        I have a wide range of skills that cover both the front-end and the back-end development of web and mobile applications. I am proficient in using these technologies to create cross-platform apps that are fast, reliable, and easy to use.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className='item'>
                                <img src={meter1} alt="" />
                                <h5>Python</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt="" />
                                <h5>Flutter</h5>
                            </div>
                            <div className='item'>
                                <img src={meter3} alt="" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt="" />
                                <h5>Typescript</h5>
                            </div>
                            <div className='item'>
                                <img src={meter3} alt="" />
                                <h5>Javascript</h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt="" />
                                <h5>CSS 3</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt="" />
                                <h5>NodeJS</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt="" />
                                <h5>Firebase</h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt="" />
                                <h5>CouchDB</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} alt="" />
        </section>
    )
}

export default Skills