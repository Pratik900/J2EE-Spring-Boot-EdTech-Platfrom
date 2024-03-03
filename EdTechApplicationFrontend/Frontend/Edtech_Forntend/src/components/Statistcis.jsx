import CanvasJSReact from '@canvasjs/react-charts';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { fetchCourseCount, fetchLoginCount } from '../services/CourseService';


var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function Statistics() {
  const [genervisuals, setGenderVisuals] = useState({
    title: {
      text: " Statistical Analysis"
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Courses", y: 1 },
          { label: "Users", y: 1 }
        ]
      }
    ]
  });

  const handleChange = async () => {
    try {
      const courseCount = await fetchCourseCount();
      const loginCount = await fetchLoginCount();

      console.log(courseCount)

      setGenderVisuals((prevVisuals) => ({
        ...prevVisuals,
        title: {
          text: " Statistical Analysis"
        },
        data: [
          {
            type: "column",
            dataPoints: [
              { label: "Courses", y: courseCount },
              { label: "Users", y: loginCount }
            ]
          }
        ]
      }));

      console.log(courseCount, loginCount);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleChange();
  }, []);

  return (
    <div>
      <Container>
          <CanvasJSChart options={genervisuals} />
      </Container>
    </div>
  );
}
