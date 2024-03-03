import React from 'react';
import { Row, Col, Container, Card, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
    const iconStyle = { color: 'red' };

    const handleChange = () => {
        alert('Form Submitted Successfully!');
    }
    const handleSubmit = () => {
        alert('Form Submitted Successfully!');
    }
    return (
        <Container className="p-5">
            <h2 className="fw-bold text-center pb-5" style={{ fontFamily: 'Sedgwick Ave Display', color: '#6674cc' }}>
                CONTACT US
            </h2>
            <Row className="gy-4">
                <Col md={6} className="text-center">
                    <Card className="bg-light">
                        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faMapMarkerAlt} color='#6674cc' className="icon flex-shrink-0 pb-1" size='2x' />
                            <div>
                                <h3>Head Office</h3>
                                <p>Tilak Road, Near SP College Pune, 411041</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="bg-light">
                        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faEnvelope} color='#6674cc' className="icon flex-shrink-0  pb-1" size='2x' />
                            <div className='text-center'>
                                <h3>Email Us</h3>
                                <p>enquiry@ed-tech.com</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="bg-light text-center">
                        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                            <FontAwesomeIcon size='2x' color='#6674cc' icon={faPhone} className="icon flex-shrink-0  pb-1" />
                            <div>
                                <h3>Call Us</h3>
                                <p>+91 97303 53639</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="bg-light text-center">
                        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                            <FontAwesomeIcon size='2x' color='#6674cc' icon={faClock} className="icon flex-shrink-0  pb-1" />
                            <div>
                                <h3>Get in Touch</h3>
                                <p>Our Support team will get back to you within 24 hours.</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Container style={{ boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.1)' }} className='mt-5 bg-light rounded'>
                <Form className="php-email-form p-3 p-md-4" onSubmit={handleSubmit}>
                    <Container>
                        <Row >
                            <Col xl={6} className="form-group mb-3">
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    // value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                            <Col xl={6} className="form-group">
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    // value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                        </Row>
                        <Form.Group className="form-group mb-3">
                            <Form.Control
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                // value={form.subject}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Control
                                as="textarea"
                                name="message"
                                rows="5"
                                placeholder="Message"
                                // value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <div className="my-3">

                            <div className="error-message"></div>
                        </div>
                        <div className='d-flex justify-content-center '>
                            <Button className='border-0 text-dark mb-3 w-25 ' style={{ backgroundColor: '#6674cc' }}>Send Message</Button>
                        </div>
                    </Container>
                </Form>
            </Container>
        </Container>
    );
};

export default ContactUs;
