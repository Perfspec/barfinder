package com.qa.persistence.repository;

import com.qa.persistence.domain.Brewery;

public interface BreweryRepository {

	String getAll();

	Brewery find(Integer id);

	String delete(Integer id);

	String create(String brewery);

	String update(Integer id, String brewery);

}
