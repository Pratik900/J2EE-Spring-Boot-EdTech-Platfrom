import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Img from '../Assets/FirstSection.png';
import { Link } from 'react-router-dom';

function FirstSection() {
    const data = [
        {
            Count: '900K+',
            Info: 'Subscribers',
            Social: 'on Youtube'
        },
        {
            Count: '4K+',
            Info: 'Followers',
            Social: 'on Twitter'
        },
        {
            Count: '100K+',
            Info: 'Followers',
            Social: 'on Instagram'
        },
        {
            Count: '410K+',
            Info: 'Followers',
            Social: 'on Linkedin'
        },
    ];

    return (
        <section className='home-wrapper'>
            <Container>
                <Row className='justify-content-between'>
                    <Col lg={5} className='order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start'>
                        <h2 className='h2-wrap'>Upscaling Made<br />EASY with Ed-Tech</h2>
                        <p>Ed-Tech Skills is your one-stop-shop for upscaling.
                            Get maximum value for the time and resources you invest,
                            with job-ready courses & high-technology, available at the lowest cost.</p>
                        <div className='d-flex'>
                            <Link to="/courses" className='text-dark border-1 p-2 text-decoration-none rounded' style={{ background: '#6674cc' }}>
                                View Courses
                            </Link>
                        </div>
                    </Col>
                    <Col lg={5} className="order-1 order-lg-2 text-center text-lg-start">
                        <img src={Img} className="img-fluid" alt="Home" />
                    </Col>
                </Row>
                <Container fluid className='second-container' style={{ background: '#6674cc' }}>
                    <Row className='mt-5'>
                        {data.map((item, index) => (
                            <Col key={index} className='mb-4 mt-4 text-light text-center border-end'>
                                <div className='count-info '>
                                    <p className='count ' style={{ fontSize: '50px', fontWeight: 'bold' }}>{item.Count}</p>
                                    <p className='info ' style={{ color: 'white' }}>{item.Info}</p>
                                    <p className='social text-decoration-underline' style={{ color: 'white' }}>{item.Social}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default FirstSection;
