import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser"

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs.sendForm('service_8ravcv7','template_bcwh383',e.target,'eAc26TKBw-5invVfZ').then((response)=>{
      setButtonText("Send");
      setFormDetails(formInitialDetails);
        setStatus({ succes: true, message: "Message sent successfully" });
    }).catch((err)=>{
      setButtonText("Send");
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    })
   
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <h1>Get In Touch</h1>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    name="first_name"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    name="last_name"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="email"
                    name="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="tel"
                    name="phone"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    name="message"
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
