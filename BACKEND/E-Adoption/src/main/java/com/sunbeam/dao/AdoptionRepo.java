package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.dto.AdoptionformDTO;
import com.sunbeam.pojos.Adoptionform;
import com.sunbeam.pojos.User;

public interface AdoptionRepo extends JpaRepository<Adoptionform, Integer> {

	List<Adoptionform> findAllByisActive(boolean b);

	void save(AdoptionformDTO formDto);

	List<Adoptionform> findAllByformNo(int formNo);

	List<Adoptionform> findAllByUser(User user);

}
