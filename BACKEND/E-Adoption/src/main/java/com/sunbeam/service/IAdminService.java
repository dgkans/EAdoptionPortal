package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.ChildDetailsDTO;
import com.sunbeam.dto.EnquiryResponsedto;
import com.sunbeam.pojos.Adoptionform;
import com.sunbeam.pojos.DocumentMaster;

public interface IAdminService {

	List<Adoptionform> getFormEnquiry();

	String setEnquiryResponse(EnquiryResponsedto response);
	
	String setChildStatus(int childId);

	long getAllRequest();

	List<DocumentMaster> getDocumentEnquiry();

	String setDocumentResponse(EnquiryResponsedto response, int id);

	int getAllChildCount();

	int getAllParentCount();

	public Object showallchilds();

}
