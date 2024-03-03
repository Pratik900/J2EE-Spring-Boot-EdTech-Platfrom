import React from 'react';
import { Carousel } from 'react-bootstrap';
import s1 from '../Assets/c3.jpg'
import s2 from '../Assets/c1.jpg'
import s3 from '../Assets/c2.jpg'
import s4 from '../Assets/c4.jpg'

function SliderComponent() {
    const data = [
        {
            id: 1,
            title: 'Image 1',
            src: s2,
            alt: 'Image 1',
        },
        {
            id: 2,
            title: 'Image 2',
            src: s1,
            alt: 'Image 2',
        },

        {
            id: 3,
            title: 'Image 3',
            src: s3,
            alt: 'Image 3',
        },
        {
            id: 4,
            title: 'Image 4',
            src: s4,
            alt: 'Image 4',
        }
    ];

    return (
        <Carousel>
            {data.map((val, index) => (
                <Carousel.Item key={val.id} active={index === 0}>
                    <img className="d-block w-100 img-fluid object-fit-cover" src={val.src} alt={val.alt} style={{ maxHeight: '400px', objectFit: 'cover' }} />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default SliderComponent;
