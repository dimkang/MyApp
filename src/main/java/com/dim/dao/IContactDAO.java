package com.dim.dao;

import java.util.List;

import com.dim.model.Contact;

public interface IContactDAO {

	List<Contact> getContacts();
	
	void deleteContact(int id);
	
	Contact saveContact(Contact contact);
	
}
