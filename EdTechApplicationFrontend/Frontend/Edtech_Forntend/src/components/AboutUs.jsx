import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import About1 from '../Assets/EdTech.png'
import About2 from '../Assets/EdTech3.png'
const AboutUs = () => {
    return (
        <div>
            <div className="container px-5 masthead-img">
                <h2 className='fw-bold text-center pt-5' style={{ fontFamily: "Sedgwick Ave Display", color: '#6674cc' }}>ABOUT US</h2>
            </div>
            <Container className="">
                <Row className=" align-items-center">
                    <Col lg={7} order={1}>
                        <div className="">
                            <Image fluid src={About1} alt="..." />
                        </div>
                    </Col>
                    <Col lg={5} order={2}>
                        <div className="">
                            <p className='text-center' style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: "Sedgwick Ave Display", color: '#6674cc' }}>Hello! Welcome to Ed-Tech! <br></br>Really happy to see you here.</p>
                            <p style={{ textAlign: 'justify' }}>
                                "Thinking of taking a step towards a mentorship program? It can definitely seem a bit daunting at first. It's never easy to ask for someone's counsel or guidance, whether it's for studies or just in general.So, at EdTech, we are here to provide all the necessary counsel you might need for placement preparations, interview experiences, programming, etc.! For any additional questions, feel free to email us at customersupport@ed-tech.com."</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="grey-bg pt-0 py-5">
                <Container className="px-5">
                    <Row className="gx-5 align-items-center">
                        <Col lg={5}>
                            <div className=" text-justify pt-5">
                                <p className='text-center' style={{ fontSize: '30px', fontWeight: 'bold', fontFamily: "Sedgwick Ave Display", color: '#6674cc' }}>Our <span></span> Story</p>
                                <p className='text-justify' style={{ textAlign: 'justify' }}>
                                    "At Ed-Tech, we are dedicated to empowering new students with comprehensive mentorship and education to foster their learning and growth. Established in 2023 by CDAC members, Ed-Tech is committed to delivering 'to the point, short, and practical' educational content tailored for learning programming, coding, and excelling in job placements and interviews.

                                    As an online learning platform, we go beyond traditional methods, reaching students through our dynamic online platform that has already garnered more than 17 million views. Excitingly, we are poised to broaden our impact by extending our guidance to encompass an array of diverse courses through Ed-Tech.

                                    Whether you're delving into programming essentials, mastering coding languages, or preparing for professional milestones, Ed-Tech is your trusted online partner for transformative learning experiences. Join us on this educational journey, and let's unlock your full potential together!"
                                </p>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="py-5">
                                <Image fluid src={About2} alt="..." />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default AboutUs;
