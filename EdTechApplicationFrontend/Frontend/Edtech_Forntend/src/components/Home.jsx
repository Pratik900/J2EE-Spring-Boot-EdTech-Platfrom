import React from 'react';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import { Outlet } from 'react-router-dom';
import SliderComponent from './SliderComponent';

import Team from './Team';
import Services from './Services';
import FirstSection from './FirstSection';
import Courses from './Courses';


const Home = () => {
  return (
    <div>
      <SliderComponent />
      <FirstSection />
      <AboutUs />
      <Services />
      <Courses />
      <Team />
      <ContactUs />
      <Outlet />
    </div>
  );
};

export default Home;