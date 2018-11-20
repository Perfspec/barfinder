package com.qa.business.service;

import javax.inject.Inject;

import com.qa.persistence.domain.Bar;
import com.qa.persistence.repository.BarRepository;

public class BarServiceImpl implements IBarService {
	
	@Inject
	BarRepository repo;

	public String getAll() {
		return repo.getAll();
	}

	public Bar find(Integer id) {
		return repo.find(id);
	}

	public String delete(Integer id) {
		return repo.delete(id);
	}

	public String create(String bar) {
		return repo.create(bar);
	}

	public String update(Integer id, String bar) {
		return repo.update(id, bar);
	}

	public String createX(String bars) {
		return repo.createX(bars);
	}

}
