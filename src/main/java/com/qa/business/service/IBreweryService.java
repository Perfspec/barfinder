package com.qa.business.service;

import com.qa.persistence.domain.Brewery;

public interface IBreweryService {

	String getAll();

	Brewery find(Integer id);

	String delete(Integer id);

	String create(String brewery);

	String update(Integer id, String brewery);
	
}
