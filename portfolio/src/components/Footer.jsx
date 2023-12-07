import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo1 from '../assets/img/aurora1.png'
import logo2 from '../assets/img/sadiatedlogo.png'
import logo4 from '../assets/img/logo_transparent.png'
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo1} className='footerlogo' alt="Logo" />
            <img src={logo2} className='footerlogo s' alt="Logo" />
            <img src={logo4} className='footerlogo g' alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sean-churu-759490249/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BNDJzb0%2FDQW%2BTOqdbl07DBA%3D%3D"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100095249820256"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/churu_sean/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
