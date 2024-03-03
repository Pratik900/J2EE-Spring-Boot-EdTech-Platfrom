package com.springrest.springrest.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.springrest.springrest.dao.LoginDao;
import com.springrest.springrest.entities.Login;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private LoginDao loginDao;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    
    public LoginServiceImpl() {
    }
    
    @Override
    public Login validateLogin(String name) {
        Optional<Login> optionalLogin = loginDao.findByName(name);
        return optionalLogin.orElse(null);
    }


    @Override
    public Login getLogin(String name, String password) {

        Login existingLogin = validateLogin(name);
        
        if (existingLogin != null && passwordEncoder.matches(password, existingLogin.getPassword())) {
            return existingLogin;
        }
        return null;
    }

        
    

    @Override
    public Login addLogin(Login login) {
        loginDao.save(login);
        return login;
    }
    

    @Override
    public ResponseEntity<Login> postLogin(Login login) {
        Login existingLogin = getLogin(login.getName());
        if(existingLogin != null) {
            // Compare encoded passwords
            if (passwordEncoder.matches(login.getPassword(), existingLogin.getPassword())) {
                // Passwords match, you can return the existing login or do further processing
                return ResponseEntity.ok(existingLogin);
            } else {
                // Passwords don't match, return a 401 Unauthorized status
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
        } else {
            // Handle scenario where login with given name doesn't exist
            return ResponseEntity.notFound().build();
        }
    }

	@Override
	public Login getLogin(String name) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	 public Long getloginCount() {
	        return loginDao.count();
	    }

}

