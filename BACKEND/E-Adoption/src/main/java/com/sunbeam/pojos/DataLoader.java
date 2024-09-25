package com.sunbeam.pojos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.sunbeam.dao.UserRepo;
@Component
public class DataLoader implements ApplicationRunner {

	private UserRepo userRepo;
	
	
    @Autowired
    public DataLoader(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public void run(ApplicationArguments args) {
    	User user=userRepo.findByEmail("admin@test.com");
    	if(user==null)
    	{
          userRepo.save(new User("Admin", 000000, "admin@test.com", "admin", Roles.ADMIN, true));
    	}
    }

}
