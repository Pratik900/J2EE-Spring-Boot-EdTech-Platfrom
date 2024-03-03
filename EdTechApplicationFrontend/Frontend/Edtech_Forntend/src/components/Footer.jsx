
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Linkedin } from 'react-bootstrap-icons';

// Import your logo image
import LogoImage from '../Assets/logo2.png';

const Footer = () => {
    return (
        <footer className="footer mt-5 bottom" style={{ background: '#6674cc', color: '#fff', fontFamily: 'Arial, sans-serif', paddingTop: '20px' }}>
            <Container>
                <Row>
                    {/* Logo Column */}
                    <Col md={3} className="d-flex align-items-center">
                        {/* Wrap the logo in a Link */}
                        <Link to="/">
                            <img src={LogoImage} alt="Company Logo" style={{ maxWidth: '60%', height: 'auto' }} />
                        </Link>
                    </Col>
                    {/* Company Column */}
                    <Col md={3}>
                        <h4 style={{ textDecoration: 'underline' }}>Company</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li><Link to="/about-us" style={{ textDecoration: 'none', color: '#fff' }}>About Us</Link></li>
                            <li><Link to="/contact-us" style={{ textDecoration: 'none', color: '#fff' }}>Contact Us</Link></li>
                        </ul>
                    </Col>
                    {/* Products Column */}
                    <Col md={3}>
                        <h4 style={{ textDecoration: 'underline' }}>Products</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {/* Removed PW Skills Lab and Job Portal */}
                            <li><Link to="#" style={{ textDecoration: 'none', color: '#fff' }}>Job Assurance</Link></li>
                            <li><Link to="#" style={{ textDecoration: 'none', color: '#fff' }}>Experience Portal</Link></li>
                            <li><Link to="#" style={{ textDecoration: 'none', color: '#fff' }}>Become an Affiliate</Link></li>
                        </ul>
                    </Col>
                    {/* Follow Us Column */}
                    <Col md={3} className="d-flex flex-column align-items-center">
                        <h4 style={{ textDecoration: 'underline' }}>Follow Us</h4>
                        <div className="social-links d-flex">
                            <a href="#" className="twitter m-1" style={{ textDecoration: 'none', color: '#fff' }}>
                                <Twitter size={25} />
                            </a>
                            <a href="#" className="facebook m-1" style={{ textDecoration: 'none', color: '#fff' }}>
                                <Facebook size={25} />
                            </a>
                            <a href="#" className="instagram m-1" style={{ textDecoration: 'none', color: '#fff' }}>
                                <Instagram size={25} />
                            </a>
                            <a href="#" className="linkedin m-1" style={{ textDecoration: 'none', color: '#fff' }}>
                                <Linkedin size={25} />
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col>
                        <div className="copyright border-top border-secondary text-center py-2">
                            © Copyright <strong>Ed-Tech</strong>. All Rights Reserved
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
