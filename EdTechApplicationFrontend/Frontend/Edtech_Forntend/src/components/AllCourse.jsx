import { useEffect, useState } from "react";
import { deleteCourse, fetchCourses } from "../services/CourseService";
import { Button, Table, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function AllCourse() {
    const [course, setcourse] = useState([]);
    const navigate = useNavigate();

    async function populateMachineState() {
        try {
            const data = await fetchCourses()
            console.log(data);
            setcourse(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteClick = async (id) => {
        try {
            await deleteCourse(id);
            populateMachineState();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateMachineState();
    }, []);

    return (
        <Container style={{ margin: 50, marginBottom: '300px' }} className="d-flex justify-content-center align-items-center">
            <Table responsive bordered hover>
                <thead style={{ background: '#6674cc', color: 'white' }}>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {course.map((m) => (
                        <tr key={m.id}>
                            <td>{m.title}</td>
                            <td>{m.description}</td>
                            <td>{m.duration} weeks</td>
                            <td>{m.price}</td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() => {
                                        handleDeleteClick(m.id);
                                    }}
                                >
                                    Delete
                                </Button>{' '}
                                <Button
                                    onClick={() => {
                                        navigate(`/edit/${m.id}`);
                                    }}
                                >
                                    Update
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};