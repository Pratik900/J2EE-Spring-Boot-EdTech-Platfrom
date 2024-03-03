import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import NavbarComponentAdmin from './components/NavbarComponentAdmin';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Courses from './components/Courses';
import Register from './components/Register';
import Login from './components/Login';
import { AddCourse } from './components/AddCourse';
import { AllCourse } from './components/AllCourse';
import { DashBoard } from './components/DashBoard';
import { CourseUpdate } from './components/CourseUpdate';
import { ViewCourse } from './components/ViewCourse';
import { Statistics } from './components/Statistcis';
import { Headlines } from './components/Headlines';

// Placeholder component for restricted access routes
const RestrictedAccess = () => {
  return (
    <div>
      <h1>You do not have permission to access this page.</h1>
      {/* Add any other content you want to display */}
    </div>
  );
};

const App = () => {
  const [userRole, setUserRole] = useState("s");

  return (
    <Router>
      <div style={{ background: '#f0f0f0' }}>
        {userRole === "a" || userRole === "t" ? <NavbarComponentAdmin /> : <NavbarComponent />}

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login setUserRole={setUserRole} />} />
          <Route path="/courses" element={<Courses />} />
          {userRole === "a" || userRole === "t" ? (
            <>
              <Route path="/addcourses" element={<AddCourse />} />
              <Route path="/allcourses" element={<AllCourse />} />
              <Route path="/edit/:id" element={<CourseUpdate />} />
            </>
          ) : (
            // Render RestrictedAccess component for restricted routes
            <>
              <Route path="/addcourses" element={<RestrictedAccess />} />
              <Route path="/allcourses" element={<RestrictedAccess />} />
              <Route path="/edit/:id" element={<RestrictedAccess />} />
            </>
          )}
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/viewcourse/:id" element={<ViewCourse />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/headlines" element={<Headlines />} />
          {/* Redirect to home if user tries to access unauthorized routes */}
          <Route path="/unauthorized" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
