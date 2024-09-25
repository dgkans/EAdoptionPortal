package com.sunbeam.service;

import java.util.List;

import com.sunbeam.pojos.ContactUs;

public interface ContactUsService {
	ContactUs save(ContactUs contact);

	List<ContactUs> findAll();

	ContactUs findById(int id);

}
