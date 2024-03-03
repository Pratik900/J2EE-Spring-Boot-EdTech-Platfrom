package com.springrest.springrest.dto;

import org.springframework.web.multipart.MultipartFile;

public class CourseDetails {

	private long id;
	private String title;
	private String description;
	private long duration;
	private long price;
	private MultipartFile courseimg;
	private MultipartFile coursevideo;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public long getDuration() {
		return duration;
	}
	public void setDuration(long duration) {
		this.duration = duration;
	}
	public long getPrice() {
		return price;
	}
	public void setPrice(long price) {
		this.price = price;
	}

	public void setCourseimg(MultipartFile courseimg) {
		this.courseimg = courseimg;
	}
	public MultipartFile getCourseimg() {
		// TODO Auto-generated method stub
		return courseimg;
	}
	public MultipartFile getCoursevideo() {
		return coursevideo;
	}
	public void setCoursevideo(MultipartFile coursevideo) {
		this.coursevideo = coursevideo;
	}

}
