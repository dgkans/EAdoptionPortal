package com.sunbeam.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.AdoptionRepo;
import com.sunbeam.dao.ChildDetailsRepo;
import com.sunbeam.dao.ContactUsRepo;
import com.sunbeam.dao.DocumentMasterRepo;
import com.sunbeam.dao.UserRepo;
import com.sunbeam.dto.AdoptionformDTO;
import com.sunbeam.pojos.Adoptionform;
import com.sunbeam.pojos.ChildDetails;
import com.sunbeam.pojos.DocumentMaster;
import com.sunbeam.pojos.User;

@Service
@Transactional
public class ParentServiceImpl implements IParentService {

	@Autowired
	private AdoptionRepo adpRepo;

	@Autowired
	private ChildDetailsRepo childRepo;

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private DocumentMasterRepo docRepo;

	@Autowired
	private ContactUsRepo contactRepo;

	@Override
	public Adoptionform adoptionform(Adoptionform entity) {
		entity.setActive(true);

		return adpRepo.save(entity);

	}

	@Override
	public List<ChildDetails> showallchilds() {
		return childRepo.findByStatus();
	}

	@Override
	public Adoptionform findFormById(int formNo) {
		Optional<Adoptionform> adoptionform = adpRepo.findById(formNo);
		return adoptionform.orElse(null);
	}

//	@Override
//	public Adoptionform findResponse(int id) {
//		User user = userRepo.findById(id).get();
//		Adoptionform form = adpRepo.findByUser(user);
//		return form;
//
//	}

	@Override
	public List<Adoptionform> findAllByUser(User user) {
		
		List<Adoptionform> list = adpRepo.findAllByUser(user);
		return list;
	}
	
	@Override
	public List<DocumentMaster> findDocumentResponse(int id) {
		User user = userRepo.findById(id).get();
		List<DocumentMaster> document = docRepo.findByUser(user);
		return document;
	}

	@Override
	public Object showcontactdetails() {
		return contactRepo.findAll();
	}

	@Override
	public Adoptionform findResponse(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	

}
