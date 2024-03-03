import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Shubham from '../Assets/Shubham.png';
import Pawan from '../Assets/Pawan.jpg';
import Pratik from '../Assets/Pratik.jpg';
import Raghvendra from '../Assets/Raghavendra.jpg';
import Prathmesh from '../Assets/Prathmesh.jpg';

function Team() {
    const data = [
        {
            id: 1,
            imgUrl: Pawan,
            name: "Pawan Maurya",
            designation: "Product Manager"
        },
        {
            id: 2,
            imgUrl: Shubham,
            name: "Shubham Tirthkar",
            designation: "User Experience Designer"
        },
        {
            id: 3,
            imgUrl: Pratik,
            name: "Pratik Gurav",
            designation: "Software Architect"
        },
        {
            id: 4,
            imgUrl: Raghvendra,
            name: "Raghavendra",
            designation: "Software Developer"
        },
        {
            id: 5,
            imgUrl: Prathmesh,
            name: "Prathmesh Lad",
            designation: "Business Development"
        }
    ];

    const firstRowMembers = data.slice(0, 3);
    const secondRowMembers = data.slice(3);

    return (
        <div className="py-5">
            <Container>
                <div className="text-center">
                    <h2 className='fw-bold' style={{ fontFamily: "Sedgwick Ave Display", color: '#6674cc' }}>OUR TEAM</h2>
                </div>

                <Row className="gy-4" style={{ paddingTop: '30px' }}>
                    {/* First Row */}
                    {firstRowMembers.map((member) => (
                        <Col key={member.id} lg={4} md={6} className="d-flex align-items-stretch">
                            <Card style={{ width: '18rem' }} className="mx-auto"
                                onMouseOver={(e) => (e.currentTarget.style = 'transform: scale(1.1); transition: transform 0.5s;')}
                                onMouseOut={(e) => (e.currentTarget.style = 'transform: scale(1); transition: transform 0.5s;')}
                            >
                                <Card.Img variant="top" src={member.imgUrl} alt="" style={{ maxHeight: "300px", objectFit: 'cover' }} />
                                <Card.Body className="text-center">
                                    <Card.Title>{member.name}</Card.Title>
                                    <Card.Text className='fw-bold'>{member.designation}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                    {/* Second Row */}
                    <Row className="gy-4 justify-content-center">
                        {secondRowMembers.map((member) => (
                            <Col key={member.id} lg={4} md={6} className="d-flex align-items-stretch">
                                <Card style={{ width: '18rem' }} className="mx-auto"
                                    onMouseOver={(e) => (e.currentTarget.style = 'transform: scale(1.1); transition: transform 0.5s;')}
                                    onMouseOut={(e) => (e.currentTarget.style = 'transform: scale(1); transition: transform 0.5s;')}
                                >
                                    <Card.Img variant="top" src={member.imgUrl} alt="" style={{ maxHeight: "300px", objectFit: 'cover' }} />
                                    <Card.Body className="text-center">
                                        <Card.Title>{member.name}</Card.Title>
                                        <Card.Text className='fw-bold'>{member.designation}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Row>
            </Container>
        </div>
    );
}


export default Team;
