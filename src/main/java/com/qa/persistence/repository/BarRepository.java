package com.qa.persistence.repository;

import com.qa.persistence.domain.Bar;

public interface BarRepository {

	String getAll();

	Bar find(Integer id);

	String delete(Integer id);

	String create(String bar);

	String update(Integer id, String bar);

	String createX(String bars);

}
