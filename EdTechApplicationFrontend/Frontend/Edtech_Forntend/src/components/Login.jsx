import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image, FormGroup, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { getByName, sentlogin } from '../services/CourseService';
import Cookies from 'js-cookie';

const Login = ({ setUserRole }) => {
    
    const loginImageUrl = 'https://accounts.pwskills.com/images/signin-banner.svg'; 
    const [token, setToken] = useState(null);

    const [data, setData] = useState({});
    const navigate = useNavigate();
    const [isSubmitted, setisSubmitted] = useState(false);

    const handleForm = async (e) => {
        e.preventDefault();
    
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    
        if (!passwordRegex.test(data.password)) {
            setisSubmitted(true);
            setTimeout(() => {
                setisSubmitted(false);
            }, 1500);
            return;
        }
    
        console.log(data);
    
        try {
            //console.log(data.name,"name")
            const result = await getByName(data.name,data.password);
            console.log(result.role);
           
            setData({
                name: "",
                password: "",
            });
    
            if (result.role!=null) {
                setUserRole(result.role); 
                const authToken = result.password;
                Cookies.set('token', authToken);
                setToken(authToken);

                navigate("/home");
            } else {
                setisSubmitted(true);
                setTimeout(() => {
                    setisSubmitted(false);
                }, 1500);
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <Container fluid>
            <Row>
                <Col lg={7} className="d-none d-lg-block mt-5">
                    <Image src={loginImageUrl} alt="register" fluid />
                </Col>

                <Col lg={5} className="p-5">
                <Form onSubmit={handleForm}>
                <FormGroup>
                            <Form.Label className="font-weight-bold ">Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Username"
                                id="name"
                                required
                                onChange={(e) => setData({ ...data, name: e.target.value })}
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

                    <div>
                        <Button
                        className="border-0 text-dark mb-3 mt-3 w-100"
                        type="submit"
                        style={{ backgroundColor: '#6674cc' }}>
                        Login
                        </Button>
                    </div>

                    {isSubmitted && (
                        <Alert variant="danger" className="mt-3">
                            Invalid Password or Username..!
                        </Alert>
                    )}
                    </Form>
                    <p className="mt-3">
                        Don't have an account?
                        <Link to="/" style={{ color: '#6674cc', marginLeft: '5px' }}>
                        Register here
                        </Link>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;