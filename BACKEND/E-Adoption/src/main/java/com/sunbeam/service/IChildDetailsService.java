package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.ChildProfileUpdateDTO;
import com.sunbeam.pojos.ChildDetails;
import com.sunbeam.pojos.User;
import org.springframework.web.multipart.MultipartFile;

public interface IChildDetailsService {

	ChildDetails update(int id, ChildDetails child);

	List<ChildDetails> findAllChild();

	ChildDetails findChildById(int id);

	void deleteChild(int id);

	ChildDetails addChild(ChildDetails child, MultipartFile image);

	ChildDetails editChild(ChildDetails child, ChildProfileUpdateDTO childDetailsDTO, MultipartFile image);

}
