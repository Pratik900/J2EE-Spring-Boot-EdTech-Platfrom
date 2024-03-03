import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import s1 from '../Assets/s1.jpg'
import s2 from '../Assets/s2.png'
import s3 from '../Assets/s3.jpg'
import s4 from '../Assets/s4.jpg'
import s5 from '../Assets/s5.png'
import s6 from '../Assets/s6.jpg'

const Services = () => {
    const servicesData = [
        {
            title: 'Web Development Bootcamp',
            image: s1,
            description:
                "Join our comprehensive web development course and dive into the world of coding. Our experienced instructors will guide you through the fundamentals of HTML, CSS, and JavaScript, empowering you to create interactive and engaging websites. Explore real-world projects and enhance your skills to become a proficient web developer.",
        },
        {
            title: 'Digital Marketing Mastery',
            image: s2,
            description:
                "Unlock the secrets of digital marketing with our intensive online course. Learn the latest strategies for social media marketing, SEO, email campaigns, and more. Our expert instructors will provide practical insights and hands-on experience, equipping you with the knowledge and tools to excel in the dynamic field of digital marketing.",
        },
        {
            title: 'Data Science Essentials',
            image: s3,
            description:
                "Immerse yourself in the world of data science through our comprehensive online program. Master essential concepts in statistics, machine learning, and data analysis. Engage in real-world projects to apply your knowledge and gain practical experience. Prepare for a rewarding career in data science with our expert-led courses.",
        },
        {
            title: 'Graphic Design Fundamentals',
            image: s4,
            description:
                "Unleash your creativity with our graphic design fundamentals course. From mastering design software to understanding visual communication principles, our instructors will guide you through the essentials. Develop a strong portfolio and acquire the skills needed to pursue a successful career in graphic design.",
        },
        {
            title: 'Language Learning Hub',
            image: s5,
            description:
                "Embark on a language learning journey with our immersive courses. Whether you're a beginner or looking to enhance your language skills, our platform offers a variety of language courses. Dive into interactive lessons, practice with native speakers, and achieve fluency in your chosen language. Explore new cultures and connect with people worldwide through the power of language.",
        },
        {
            title: 'Professional Development Series',
            image: s6,
            description:
                "Invest in your professional growth with our comprehensive professional development series. From effective communication to leadership skills, our courses cover a range of topics to elevate your career. Gain valuable insights from industry experts and acquire the tools needed to succeed in today's competitive professional landscape.",
        },
    ];

    return (
        <section id="services" className="">
            <Container>
                <Row className="text-center">
                    <Col xs={12} className="section-intro">
                        <h3 className='fw-bold' style={{ fontFamily: "Sedgwick Ave Display", color: '#6674cc', paddingTop: '5px' }}>
                            Why Ed-Tech?
                        </h3>
                        <h2 className='fw-bold display-4 mb-4' style={{ fontSize: '2.5rem' }}>
                            Making learning easier and <br /> more convenient for you.
                        </h2>
                    </Col>
                </Row>

                <Row>
                    {servicesData.map((service, index) => (
                        <Col key={index} lg={4} sm={6} className="p-4 mb-4 d-flex flex-column align-items-center border rounded shadow">
                            <div
                                className="icon-box ms-5 mb-3"
                                style={{ position: 'relative', height: '150px', width: '150px' }}
                                onMouseOver={(e) => (e.currentTarget.style = 'height: 180px; width: 180px;')}
                                onMouseOut={(e) => (e.currentTarget.style = 'height: 150px; width: 150px;')}
                            >
                                <Image src={service.image} className='img-thumbnail' style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                            <h5 className="title-sm mt-4 text-center fw-bold" style={{ fontFamily: 'Sedgwick Ave Display', color: '#6674cc' }}>
                                {service.title}
                            </h5>
                            <p style={{ textAlign: 'justify', fontSize: '14px' }}>{service.description}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );


}


export default Services;

