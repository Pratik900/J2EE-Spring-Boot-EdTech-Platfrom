import React, { useState } from 'react';
import axios from "axios";
import "../css/AppendCourse.css"
import { useNavigate } from 'react-router-dom';


export function AddCourse() {
    const navigate = useNavigate();
    const [courseDetails, setCourseDetails] = useState({
        title: "",
        description: "",
        duration: "",
        price: "",
        courseimg:null,
        coursevideo:null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCourseDetails({ ...courseDetails, [name]: value });
    };

    const handleFileChange = (e) => {
        setCourseDetails({ ...courseDetails, courseimg: e.target.files[0] });
    };
    const handleImageChange = (e) => {
        setCourseDetails({ ...courseDetails, courseimg: e.target.files[0] });
    };
    
    const handleVideoChange = (e) => {
        setCourseDetails({ ...courseDetails, coursevideo: e.target.files[0] });
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', courseDetails.title);
            formData.append('description', courseDetails.description);
            formData.append('duration', courseDetails.duration);
            formData.append('price', courseDetails.price);
            formData.append('courseimg', courseDetails.courseimg);
            formData.append('coursevideo', courseDetails.coursevideo);
            console.log(formData);
            
            await axios.post('http://localhost:9090/course/v1', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
                navigate("/dashboard");
            return console.log('Course added successfully');
            

        } catch (error) {
            console.error('Error adding Course', error);
        }
        return false;
    };



return (
    <div className="app">
    <div className="center-container">
        <div className="form-container">
            <h1 className="main-heading">Add Course</h1>
            <form onSubmit={handleSubmit} className="course-form">
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={courseDetails.title}
                        onChange={handleInputChange}
                        placeholder="Enter Course Title"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={courseDetails.description}
                        onChange={handleInputChange}
                        placeholder="Enter Course Description"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="duration">Duration:</label>
                    <input
                        type="text"
                        id="duration"
                        name="duration"
                        value={courseDetails.duration}
                        onChange={handleInputChange}
                        placeholder="Enter Duration"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={courseDetails.price}
                        onChange={handleInputChange}
                        placeholder="Enter Price"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="courseimg">Profile Image:</label>
                    <input
                        type="file"
                        id="courseimg"
                        name="courseimg"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="coursevideo">Video Content:</label>
                    <input
                        type="file"
                        id="coursevideo"
                        name="coursevideo"
                        accept="video/*"
                        onChange={handleVideoChange}
                        required
                    />
                </div>
                <button type="submit">Add Course</button>
            </form>
        </div>
    </div>
</div>

);
};