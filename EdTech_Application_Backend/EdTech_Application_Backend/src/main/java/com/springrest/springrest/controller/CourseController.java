package com.springrest.springrest.controller;


import org.springframework.http.MediaType;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.dto.CourseDetails;
import com.springrest.springrest.entities.Course;
import com.springrest.springrest.entities.Login;
import com.springrest.springrest.services.CourseService;
import com.springrest.springrest.services.LoginService;

@CrossOrigin
@RestController
public class CourseController {
	
	@Autowired
	private CourseService courseSerivice;


	@GetMapping("/home")
	public String home() {
		return "Welcome to course application";
	}
	
	//get the courses
	@GetMapping("/courses")
	public List<Course> getCourse(){
		
		return this.courseSerivice.getCourses();		
	}
	
    @GetMapping("/courses/count")
    public Long getCourseCount() {
        return courseSerivice.getCourseCount();
    }
	
	
	//Single course get
	@GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable String courseId) {
		return this.courseSerivice.getCourse(Long.parseLong(courseId));
	}
	
	//Course add
	
//	@PostMapping("/courses")
//	public Course addCourse(@RequestBody Course course) {
//		return this.courseSerivice.addCourse(course);
//	}
	
	//Update course using PUT request
	
	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course) {
		return this.courseSerivice.updateCourse(course);
	}
	
	//Delete the Course
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId){
		try {
			this.courseSerivice.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<>(HttpStatus.OK);
			
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/course/v1")
	public String addCourse(CourseDetails coursedetails) {
		try {
			Course course = new Course();
			BeanUtils.copyProperties(coursedetails, course);
			
			//storing the uploaded file
			try {
				String fileName = coursedetails.getCourseimg().getOriginalFilename();
				//TODO:here should be the code to generate a unique name for the file before proceeding further
				String generatedFileName = fileName; //replace this later
				
				course.setCourseimg(generatedFileName);
				
				InputStream is = coursedetails.getCourseimg().getInputStream();
				FileOutputStream os = new FileOutputStream("C:\\Users\\prati\\OneDrive\\Desktop\\C-DAC\\Advance Java\\Projects\\EdTechApplicationFrontend\\Frontend\\Edtech_Forntend\\public\\img\\" + generatedFileName);
				FileCopyUtils.copy(is, os);
				
				fileName = coursedetails.getCoursevideo().getOriginalFilename();
				//TODO:here should be the code to generate a unique name for the file before proceeding further
				String generatedFileName1 = fileName; //replace this later
				
				course.setCoursevideo(generatedFileName1);
				
				is = coursedetails.getCoursevideo().getInputStream();
				os = new FileOutputStream("C:\\Users\\prati\\OneDrive\\Desktop\\C-DAC\\Advance Java\\Projects\\EdTechApplicationFrontend\\Frontend\\Edtech_Forntend\\public\\video\\" + generatedFileName1);
				FileCopyUtils.copy(is, os);
			}
			catch (IOException e) {
			}
			
			courseSerivice.addCourse(course);
			 return "Data inserted sucessfuly..";
		
		}catch (Exception e) {
			e.printStackTrace();
		}
		return "Invalid data not able to store it";
	}
	
	@GetMapping(path = "/book/fetch/coverImg/{id}",produces = MediaType.IMAGE_JPEG_VALUE)
	public byte[] getProfilePic(@PathVariable String id) throws IOException {
		Course course = getCourse(id);
	    return Files.readAllBytes(Paths.get("C:\\Users\\jayes\\OneDrive\\Desktop\\CDAC\\Adv._Java\\Project\\Final" + course.getCourseimg()));
	}
	

	 
	 
	

	

	
	
	
	
	
	
	
	
	
	
}
