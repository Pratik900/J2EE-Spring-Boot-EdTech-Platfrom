import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image, FormGroup, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { sentlogin } from '../services/CourseService';

const Register = () => {
    
    const loginImageUrl = 'https://accounts.pwskills.com/images/signin-banner.svg';
    
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        role: "s"
    });
    const navigate = useNavigate();
    const [isSubmitted, setisSubmitted] = useState(false);

    const handleForm = (e) => {
        try {
            if(data.password === data.confirmpassword)
            {
                const result = sentlogin(data);
                setData({
                    name: "",
                    email: "",
                    password: "",
                    confirmpassword:"",
                    role:""
                });
                navigate("/login");
            }
            else{
                setisSubmitted(true);
                setTimeout(() => {
                    setisSubmitted(false);
                }, 1500);
            }
        } catch (error) {
            console.log(error);
        }
        e.preventDefault();
    };
    return (
        <Container fluid>
            <Row>
                {/* Image Section */}
                <Col lg={7} className="d-none d-lg-block mt-5">
                    <Image src={loginImageUrl} alt="Login" fluid />
                </Col>

                {/* Form Section */}
                <Col lg={5} className="p-5">
                <Form onSubmit={handleForm}>
                    <FormGroup>
                            <Form.Label className="font-weight-bold ">Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                id="name"
                                required
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                            />
                    </FormGroup>
                    <FormGroup>
                            <Form.Label className="font-weight-bold ">Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Email"
                                id="email"
                                required
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                            />
                    </FormGroup>
                    <FormGroup>
                            <Form.Label className="font-weight-bold ">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                id="password"
                                required
                                onChange={(e) => setData({ ...data, password: e.target.value })}
                            />
                    </FormGroup>
                    <FormGroup>
                            <Form.Label className="font-weight-bold ">Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                id="password"
                                required
                                onChange={(e) => setData({ ...data, confirmpassword: e.target.value })}
                                />
                                <span>eg (Example@2000) </span>
                    </FormGroup>
 
                    <div>
                        <Button
                        className="border-0 text-dark mb-3 mt-3 w-100"
                        type='submit' 
                        style={{ backgroundColor: '#6674cc' }}>
                        Register
                        </Button>
                    </div>

                    {isSubmitted && (
                        <Alert variant="danger" className="mt-3">
                            password and confirm password should macthed
                        </Alert>
                    )}
                    </Form>

                    <p className="mt-3">
                        already have an account?
                        <Link to="/login" style={{ color: '#6674cc', marginLeft: '5px' }}>
                        Login 
                        </Link>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;