package com.sunbeam.service;

import com.sunbeam.dao.DocumentMasterRepo;
import com.sunbeam.pojos.DocumentMaster;
import com.sunbeam.pojos.User;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public interface IDocumentMasterService {

	DocumentMaster findDocById(int id);

	DocumentMaster findDocumentById(int id);

	void deleteDocument(int id);

	List<DocumentMaster> findAllDocuments();

	DocumentMaster saveDocument(int id, DocumentMaster doc, MultipartFile addressProof, MultipartFile identityProof,
			MultipartFile incomeProof, MultipartFile nationalityCertificate, MultipartFile nonCriminal_certificate);

	List<DocumentMaster> findAllByUser(User user);

}
