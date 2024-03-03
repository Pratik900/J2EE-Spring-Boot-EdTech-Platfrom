package com.springrest.springrest.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springrest.springrest.entities.Login;

public interface LoginDao extends JpaRepository<Login, Integer> {
    Optional<Login> findByName(String name);
}
