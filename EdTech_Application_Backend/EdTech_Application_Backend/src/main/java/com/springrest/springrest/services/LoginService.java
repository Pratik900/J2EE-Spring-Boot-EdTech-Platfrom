package com.springrest.springrest.services;

import org.springframework.http.ResponseEntity;

import com.springrest.springrest.entities.Login;

public interface LoginService {
	public Login getLogin(String name);
	
	public Login addLogin(Login login);

	ResponseEntity<Login> postLogin(Login login);

	Login getLogin(String name, String password);
	
	Login validateLogin(String name);

	Long getloginCount();
}



	


