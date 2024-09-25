package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.pojos.ChildDetails;
import com.sunbeam.pojos.Roles;
import com.sunbeam.pojos.User;

public interface ChildDetailsRepo extends JpaRepository<ChildDetails, Integer> {

	@Query(value="select * from child_details where status='Available'",nativeQuery=true)
	List<ChildDetails> findByStatus();
}
