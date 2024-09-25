package com.sunbeam.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sunbeam.dto.ChildDetailsDTO;
import com.sunbeam.dto.ChildProfileUpdateDTO;
import com.sunbeam.dto.DocumentMasterDTO;
import com.sunbeam.dto.EnquiryResponsedto;
import com.sunbeam.dto.Response;
import com.sunbeam.dto.UserDTO;
import com.sunbeam.pojos.Adoptionform;
import com.sunbeam.pojos.ChildDetails;
import com.sunbeam.pojos.DocumentMaster;
import com.sunbeam.pojos.Roles;
import com.sunbeam.pojos.User;
import com.sunbeam.service.IAdminService;
import com.sunbeam.service.IChildDetailsService;
import com.sunbeam.service.IDocumentMasterService;
import com.sunbeam.service.IParentService;
import com.sunbeam.service.IUserService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

	@Autowired
	private IChildDetailsService childDetailsService;

	@Autowired
	private IParentService parentService;

	@Autowired
	private IUserService userService;

	@Autowired
	private IAdminService adminService;

	@PostMapping("/addchild")
	public ResponseEntity<?> addchild(ChildProfileUpdateDTO childProfileUpdateDTO) {
		User user = userService.findUserById(childProfileUpdateDTO.getUser_id());
		ChildDetails child = ChildProfileUpdateDTO.toEntity(childProfileUpdateDTO, user);
		child = childDetailsService.addChild(child, childProfileUpdateDTO.getImage());

		String message = "Child Details added successfully";
		return Response.success(message);
	}

	@GetMapping("/showcontactdetails")
	public ResponseEntity<?> showcontactdetails() {
		return new ResponseEntity<>(parentService.showcontactdetails(), HttpStatus.OK);
	}

	@GetMapping("/achilddetails")
	public ResponseEntity<?> findAllChildDetails() {
		List<ChildDetails> list = childDetailsService.findAllChild();
		List<ChildDetailsDTO> result = new ArrayList<ChildDetailsDTO>();
		for (ChildDetails child : list)
			result.add(ChildDetailsDTO.fromEntity(child));
		return Response.success(result);
	}

	// Delete Child By Id
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteChildById(@PathVariable("id") int id) {

		ChildDetails child = childDetailsService.findChildById(id);

		if (child != null) {
			childDetailsService.deleteChild(id);
			String message = "child deleted succesfully";
			return Response.success(message);
		} else {
			String message = "Child not found";
			return Response.error(message);
		}
	}

	// Find Child By Id
	@GetMapping("/{id}")
	public ResponseEntity<?> findChildById(@PathVariable("id") int id) {
		ChildDetails child = childDetailsService.findChildById(id);

		if (child != null) {
			ChildDetailsDTO result = ChildDetailsDTO.fromEntity(child);
			return Response.success(result);
		} else {
			String message = "Child not found";
			return Response.error(message);
		}
	}

	// Find By Role
	@GetMapping("/user/{role}")
	public ResponseEntity<?> findUserByRole(@PathVariable("role") Roles role) {
		User user = userService.findByRole(role);
		if (user != null) {
			UserDTO result = UserDTO.fromEntity(user);
			return Response.success(result);
		} else {
			String message = "Parent not found";
			return Response.error(message);
		}
	}

	// update child
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateChild(@PathVariable("id") int id, ChildProfileUpdateDTO childProfileUpdateDTO) {
		ChildDetails child1 = childDetailsService.findChildById(id);
		ChildDetails child2 = childDetailsService.editChild(child1, childProfileUpdateDTO,
				childProfileUpdateDTO.getImage());
		ChildDetailsDTO result = ChildDetailsDTO.fromEntity(child2);
		return Response.success(result);
	}

	// Edit Admin Profile
	@PutMapping("/edit-profile")
	public ResponseEntity<?> updateUserInfo(@RequestBody User user) {
		User user1 = userService.findUserById(user.getId());
		if (user1 != null) {
			user1.setName(user.getName());
			user1.setMobileNumber(user.getMobileNumber());
			user1.setEmail(user.getEmail());
			User updateuser = userService.save(user1);
			ResponseEntity.ok(updateuser);
		}
		return null;
	}

	@GetMapping("/getadoptionformenquiry")
	public ResponseEntity<?> getAdoptionFormEnquiry() {
		List<Adoptionform> form = adminService.getFormEnquiry();
		return new ResponseEntity<>(form, HttpStatus.OK);
	}

	// request to set response for Parent enquiry
	@PutMapping("/setenquiryresponse")
	public ResponseEntity<?> setEnquiryResponse(@RequestBody EnquiryResponsedto response) {
		System.out.println("Response ="+response.getResponse());
		String res = "Approved";
		
		if(res.equals(response.getResponse()))
		{String msg=adminService.setChildStatus( response.getChildId());
		System.out.println(msg);
		}else {
			System.out.println("Declined!!!!!!!!!!");
		}
		
		System.out.println(response.getId());
		String message = adminService.setEnquiryResponse(response);
		
		return new ResponseEntity<>(message, HttpStatus.OK);
	}

	// Get Document from Parent
	@GetMapping("/getdocumentrequest")
	public ResponseEntity<?> getDocumentEnquiry() {
		List<DocumentMaster> form = adminService.getDocumentEnquiry();
		return Response.success(form);
	}

	// request to set response for Parent document
	@PutMapping("/setdocumentresponse/{id}")
	public ResponseEntity<?> setDocumentResponse(@PathVariable("id") int id, @RequestBody EnquiryResponsedto response) {
		String message = adminService.setDocumentResponse(response, id);
		return Response.success(message);
	}

	// Request to count all request
	@GetMapping("/countrequest")
	public ResponseEntity<?> getAllRequestCount() {
		long count = adminService.getAllRequest();
		return new ResponseEntity<>(count, HttpStatus.OK);

	}

	// Count All child
	@GetMapping("/countchild")
	public ResponseEntity<?> getAllChildCount() {
		long count = adminService.getAllChildCount();
		return Response.success(count);

	}

	// Count All Parent
	@GetMapping("/countparent")
	public ResponseEntity<?> getAllParentCount() {
		long count = adminService.getAllParentCount();
		return Response.success(count);

	}

}
