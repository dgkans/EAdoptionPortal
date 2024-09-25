package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.pojos.DocumentMaster;
import com.sunbeam.pojos.User;

public interface DocumentMasterRepo extends  JpaRepository<DocumentMaster, Integer>{

	List<DocumentMaster> findByUser(User user);

	List<DocumentMaster> findAllByUser(User user);

}
