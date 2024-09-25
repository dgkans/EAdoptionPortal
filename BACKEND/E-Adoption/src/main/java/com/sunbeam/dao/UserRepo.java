package com.sunbeam.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.dto.AdoptionformDTO;
import com.sunbeam.pojos.Roles;
import com.sunbeam.pojos.User;

public interface UserRepo extends JpaRepository<User, Integer> {

	User findByEmailAndPassword(String email,String pwd);

	User findByEmail(String email);

	Optional<User> findByRole(Roles role);

	@Query("select u from User u where u.role=:role")
	List<User> findAllParent(@Param("role") Roles parent);
	
	
}
