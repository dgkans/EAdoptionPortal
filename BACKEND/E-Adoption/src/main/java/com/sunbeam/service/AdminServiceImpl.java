package com.sunbeam.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.AdoptionRepo;
import com.sunbeam.dao.ChildDetailsRepo;
import com.sunbeam.dao.DocumentMasterRepo;
import com.sunbeam.dao.UserRepo;
import com.sunbeam.dto.ChildDetailsDTO;
import com.sunbeam.dto.EnquiryResponsedto;
import com.sunbeam.pojos.Adoptionform;
import com.sunbeam.pojos.ChildDetails;
import com.sunbeam.pojos.DocumentMaster;
import com.sunbeam.pojos.Roles;
import com.sunbeam.pojos.User;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {

	@Autowired
	private AdoptionRepo adpRepo;

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private DocumentMasterRepo docRepo;

	@Autowired
	private ChildDetailsRepo childRepo;

	@Override
	public List<Adoptionform> getFormEnquiry() {
		List<Adoptionform> list = adpRepo.findAllByisActive(true);
		return list;
	}

	@Override
	public String setEnquiryResponse(EnquiryResponsedto response) {
		Optional<Adoptionform> form = adpRepo.findById(response.getId());
		Adoptionform enquiry = form.get();
		enquiry.setResponse(response.getResponse());
		//enquiry.setActive(false);
		adpRepo.save(enquiry);
		
		return "Response is successfully Submitted";
	}
	@Override
	public String setChildStatus(int childId) {
		Optional<ChildDetails> child = childRepo.findById(childId);
		ChildDetails ch = child.get();
		System.out.println("CHILD DETAILS = "+ch);
		ch.setStatus("Adopted");
		
		childRepo.save(ch);

		return "Status is successfully changed";
	}

	@Override
	public long getAllRequest() {
		return adpRepo.count();
	}

	@Override
	public List<DocumentMaster> getDocumentEnquiry() {
		List<DocumentMaster> list = docRepo.findAll();
		return list;

	}

	@Override
	public String setDocumentResponse(EnquiryResponsedto response, int id) {

		Optional<DocumentMaster> form = docRepo.findById(id);
		DocumentMaster enquiry = form.get();
		enquiry.setResponse(response.getResponse());
		docRepo.save(enquiry);

		return "Response is successfully Submitted";
	}

	@Override
	public int getAllChildCount() {
		List<ChildDetails> list = childRepo.findAll();

		int count = 0;

		for (ChildDetails childDetails : list) {
			count++;
		}

		return count;
	}

	@Override
	public int getAllParentCount() {
		List<User> list = userRepo.findAllParent(Roles.PARENT);

		int count = 0;

		for (User user : list) {
			count++;
		}

		return count;
	}

	@Override
	public List<ChildDetails> showallchilds() {
		return childRepo.findAll();
	}

}
