package com.qa.business.service;

import com.qa.persistence.domain.Bar;

public interface IBarService {

	String getAll();

	Bar find(Integer id);

	String delete(Integer id);

	String create(String bar);

	String update(Integer id, String bar);

	String createX(String bars);

}
