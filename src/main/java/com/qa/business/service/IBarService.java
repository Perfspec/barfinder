package com.qa.business.service;

import com.qa.persistence.domain.Bar;

public interface IBarService {

	String getAll();

	Bar find(Long id);

	String delete(Long id);

	String create(String bar);

	String update(Long id, String bar);

	Bar find(double longitude, double latitude, int rank);

}
