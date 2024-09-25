package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.AdoptionformDTO;
import com.sunbeam.pojos.Adoptionform;
import com.sunbeam.pojos.DocumentMaster;
import com.sunbeam.pojos.User;

public interface IParentService {
	Adoptionform adoptionform(Adoptionform form) ;

	public Object showallchilds();

	Adoptionform findFormById(int formNo);

	Adoptionform findResponse(int id);
	
	List<Adoptionform> findAllByUser(User user);
	
	List<DocumentMaster> findDocumentResponse(int id);

	Object showcontactdetails();
	
}
