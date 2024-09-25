package com.sunbeam.service;

import java.util.List;

import com.sunbeam.pojos.Roles;
import com.sunbeam.pojos.User;

public interface IUserService {
	
	
	User authenticateUser(String email, String pwd);

	User createNewUser(User user);

	User createNewAdmin(User user);

	String changePassword(String email, String changePassword);
	
	User findUserById(int id);

	User findByRole(Roles role);

	User updateUserProfile(int sellerId, User user);

	User save(User user1);

	List<User> findByRoles(Roles role);

}
