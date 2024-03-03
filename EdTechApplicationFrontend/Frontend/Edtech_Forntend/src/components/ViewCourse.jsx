import React, { useEffect, useState } from "react";
import { FetchCourseId } from "../services/CourseService";
import { Button, Card, Row, Col, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "../css/ViewCourse.css";

export function ViewCourse() {
  const [course, setCourse] = useState([]);
  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    async function populateCourse() {
      try {
        const data = await FetchCourseId(param.id);
        setCourse(data);
        console.log(data);
        console.log(data.coursevideo);
      } catch (error) {
        console.log(error);
      }
    }
    populateCourse();
  }, []);

  return (
    <Container className="course-detail-container">
      <Row className="justify-content-center align-items-center">
        <Col md={12} className="video-col">
          {course.coursevideo && (
            <video controls autoPlay className="course-video">
              <source src={`/video/${course.coursevideo}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </Col>
        <Col md={12} className="content-col mt-4">
          <Card className="course-card shadow">
            <Card.Body>
              <Row className="align-items-center">
                <Col md={3} className="text-center">
                  <img
                    src={`/img/${course.courseimg}`}
                    alt="Course"
                    className="course-img img-fluid"
                  />
                </Col>
                <Col md={9}>
                  <div className="d-flex justify-content-end">
                    <Button
                      onClick={() => navigate("/dashboard")}
                      variant="primary"
                    >
                      Back to Courses
                    </Button>
                  </div>
                  <Card.Text className="course-description">
                    <p>{course.description}</p>
                    <p>
                      <strong>Duration:</strong> {course.duration} Weeks
                    </p>
                    <p>
                      <strong>Video Name:</strong> {course.coursevideo}
                    </p>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="Notes-section shadow mt-4">
            <Card.Body>
              <h3 className="text-center mb-4">Notes</h3>
              <Form>
                <Form.Group controlId="commentTextarea">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Write your Notes here..."
                  />
                </Form.Group>
                <div className="text-center mt-4">
                  <Button variant="primary">Add Notes</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
