package com.springrest.springrest.controller;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entities.Login;
import com.springrest.springrest.services.LoginService;

@CrossOrigin
@RestController
public class LoginController {
	@Autowired
	private LoginService loginSerivice;
	
	 @Autowired
	 private BCryptPasswordEncoder passwordEncoder;
	

	 @PostMapping("/login")
	    public Login addLogin(@RequestBody Login login) {
	        String encryptedPassword = passwordEncoder.encode(login.getPassword());
	        login.setPassword(encryptedPassword);
	        return this.loginSerivice.addLogin(login);
	    } 
	
	@PostMapping("/login/{name}")
	public ResponseEntity<Login> postLogin(@RequestBody Login login) {
		System.out.println("reqincontroller");
		return this.loginSerivice.postLogin(login);
	}
	
	 @GetMapping("/login/{name}")
	    public Login validateLogin(@PathVariable String name) {
	        return loginSerivice.getLogin(name);
	    }
	 
	 @GetMapping("/logins/{name}/{password}")
	    public Login getLogin(@PathVariable String name,@PathVariable String password) {
	        return loginSerivice.getLogin(name,password);
	    }
	 
		@GetMapping("/loginss")
		public String home() {
			return "Welcome to course application";
		}
		
		@GetMapping("/login/count")
	    public Long getloginCount() {
	        return loginSerivice.getloginCount();
	    }
}
