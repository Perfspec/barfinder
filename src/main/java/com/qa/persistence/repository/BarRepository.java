package com.qa.persistence.repository;

import com.qa.persistence.domain.Bar;

public interface BarRepository {

	String getAll();

	Bar find(Long id);

	String delete(Long id);

	String create(String bar);

	String update(Long id, String bar);

	String createX(String bars);

	Bar find(double longitude, double latitude, int rank);

}
