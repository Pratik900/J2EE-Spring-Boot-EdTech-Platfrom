import { Alert, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { FetchCourseId, updateCourse } from "../services/CourseService";

export function CourseUpdate() {
  const navigate = useNavigate();

  const params = useParams();
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    duration: "",
    price: "",
  });
  const [isSubmitted, setisSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setisSubmitted(true);
    setTimeout(() => {
      setisSubmitted(false);
    }, 1500);
    try {
      setTimeout(() => {
        const result = updateCourse(formData, params.id);
        console.log(result);
        navigate("/allcourses");
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  const populateMachineState = async () => {
    try {
      const result = await FetchCourseId(params.id);
      setFormData(result);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    populateMachineState();
  }, []);

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div style={{ maxWidth: '500px', width: '100%' }}>
        <Form onSubmit={handleSubmit}  style={{
           
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            padding: '30px',
            borderRadius: '10px',
            backgroundColor: '#f8f9fa',
            
        }}>
          {/* <Form.Group className="mb-3">
            <Form.Label>Course ID</Form.Label>
            <Form.Control
              type="text"
              value={formData.id}
              placeholder="Enter Course ID"
              name="id"
              onChange={handleChange}
            />
          </Form.Group> */}

          <Form.Group className="mb-3">
            <Form.Label>Course Title</Form.Label>
            <Form.Control
              type="text"
              value={formData.title}
              placeholder="Enter Course Title"
              name="title"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Course Description</Form.Label>
            <Form.Control
              type="text"
              value={formData.description}
              placeholder="Enter Course Description"
              name="description"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Course Duration</Form.Label>
            <Form.Control
              type="text"
              value={formData.duration}
              placeholder="Enter Course Duration"
              name="duration"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Course Price</Form.Label>
            <Form.Control
              type="text"
              value={formData.price}
              placeholder="Enter Course Price"
              name="price"
              onChange={handleChange}
            />
          </Form.Group>

          <div className="d-flex justify-content-center mt-3">
                        
                        <Button className='border-0 text-dark mb-3 w-75' type='submit' style={{ backgroundColor: '#6674cc' }}>
                            Update
                        </Button>
                    </div>

          <Form.Group className="mt-3">
            {isSubmitted && <Alert variant="success">Details Updated</Alert>}
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};
