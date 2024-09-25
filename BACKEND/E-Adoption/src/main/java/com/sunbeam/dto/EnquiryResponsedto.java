package com.sunbeam.dto;

public class EnquiryResponsedto {
	private String response;
	private int id;
	private int childId;

	public EnquiryResponsedto() {
		// TODO Auto-generated constructor stub
	}

	public EnquiryResponsedto(String response, int id, int childID) {
		super();
		this.response = response;
		this.id = id;
		this.setChildId(childID);
	}

	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getChildId() {
		return childId;
	}

	public void setChildId(int childId) {
		this.childId = childId;
	}

}
