import { useEffect, useState } from "react";
import { fetchCourses } from "../services/CourseService";
import { Button, Card, Row , Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export function DashBoard(){
    const [course, setCourse] = useState([]);
    const navigate = useNavigate();

    async function populateMachineState(){
        try {
            const data = await fetchCourses();
            setCourse(data);
            console.log(data);
        } catch(error) {
            console.log(error);
        } 
    }

    const handleFormSubmit = (event, courseId) => {
        event.preventDefault();
        navigate(`/viewcourse/${courseId}`);
    };

    useEffect(() => {
        populateMachineState();
    }, []);

    return (
        <Row xs={1} md={2} lg={3} xl={4} className="" style={{marginBottom:'160px'}}>
            {course.map((m) => (
                <Col key={m.id}>
                    <Card style={{ width: '18rem', margin: '10px', textAlign:'center' }} className="me-5 ms-5">
                        <Card.Body>
                            <Card.Title>
                                <img src={`/img/${m.courseimg}`} alt="Course" height="150" width="150" />
                                <h3>Title: {m.title}</h3>
                            </Card.Title>
                            <Card.Text>
                                <h5>Description: {m.description}</h5>
                                <h5>Duration: {m.duration} Weeks</h5>
                                <h6>Price: {m.price}</h6>
                            </Card.Text>
                            {/* Pass courseId to handleFormSubmit */}
                            <form onSubmit={(e) => handleFormSubmit(e, m.id)}>
                                <Button type="submit" variant="primary">Enroll Now</Button>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};
