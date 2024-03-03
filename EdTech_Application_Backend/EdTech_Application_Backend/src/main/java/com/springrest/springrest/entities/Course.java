package com.springrest.springrest.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Course {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String title;
	private String description;
	private long duration;
	private long price;
	private String courseimg;
	private String coursevideo;
	

	public Course(long id, String title, String description, long duration, long price, String courseimg,String coursevideo) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.duration = duration;
		this.price = price;
		this.courseimg = courseimg;
		this.coursevideo = coursevideo;
	}

	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}

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
	
	public String getCourseimg() {
		return courseimg;
	}

	public void setCourseimg(String courseimg) {
		this.courseimg = courseimg;
	}
	public String getCoursevideo() {
		return coursevideo;
	}

	public void setCoursevideo(String coursevideo) {
		this.coursevideo = coursevideo;
	}



	@Override
	public String toString() {
		return "Course [id=" + id + ", title=" + title + ", description=" + description + ", duration=" + duration
				+ ", price=" + price + ", courseimg=" + courseimg + ", coursevideo=" + coursevideo
				+ ", getCoursevideo()=" + getCoursevideo() + ", getId()=" + getId() + ", getTitle()=" + getTitle()
				+ ", getDescription()=" + getDescription() + ", getDuration()=" + getDuration() + ", getPrice()="
				+ getPrice() + ", getCourseimg()=" + getCourseimg() + ", getClass()=" + getClass() + ", hashCode()="
				+ hashCode() + ", toString()=" + super.toString() + "]";
	}
	
}
