package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.pojos.ContactUs;

public interface ContactUsRepo extends JpaRepository<ContactUs,Integer> {

}
