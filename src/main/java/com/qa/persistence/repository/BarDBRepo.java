package com.qa.persistence.repository;

import static javax.transaction.Transactional.TxType.REQUIRED;
import static javax.transaction.Transactional.TxType.SUPPORTS;

import java.util.ArrayList;
import java.util.Collection;

import javax.enterprise.inject.Default;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import com.qa.persistence.domain.Bar;
import com.qa.util.JSONArrayConverter;
import com.qa.util.JSONUtil;

@Transactional(SUPPORTS)
@Default
public class BarDBRepo implements BarRepository {
	
	@PersistenceContext(unitName = "primary")
	private EntityManager em;
	
	@Inject
	JSONUtil util;

	public String getAll() {
		Query q = em.createQuery("Select a FROM Bar a");
		@SuppressWarnings("unchecked")
		Collection<Bar> bars = (Collection<Bar>) q.getResultList();
		return util.toJSON(bars);
	}

	public Bar find(Long id) {
		return em.find(Bar.class, id);
	}
	
	public Bar find(double longitude, double latitude, int rank) {
		Query q = em.createQuery("Select a FROM Bar a");
		@SuppressWarnings("unchecked")
		ArrayList<Bar> bars = (ArrayList<Bar>) q.getResultList();
		for(int i=0; i<bars.size(); i++) {
			
		}
		return null;
	}
	
	public double distance(double longitude, double latitude, Bar bar) {
		double diffLong = bar.getLongitude()-longitude;
		double diffLat = bar.getLatitude()-latitude;		
		return Math.sqrt(diffLong*diffLong+diffLat*diffLat);
	}

	@Transactional(REQUIRED)
	public String delete(Long id) {
		if(em.find(Bar.class, id) != null) {
			em.remove(em.find(Bar.class, id));
			return "{\"message\": \"Bar sucessfully deleted\"}";
		} else {
			return "{\"message\": \"Bar not deleted\"}";
		}	
	}

	@Transactional(REQUIRED)
	public String create(String bar) {
		Bar m = util.fromJSON(bar, Bar.class);
		em.persist(m);		
		return "{\"message\": \"Bar successfully added\"}";
	}

	@Transactional(REQUIRED)
	public String update(Long id, String bar) {
		Bar newBar = util.fromJSON(bar, Bar.class);
		Bar oldBar = em.find(Bar.class, id);
		
		oldBar.setIdBar(newBar.getIdBar());
		oldBar.setName(newBar.getName());
		oldBar.setAddress(newBar.getAddress());
		oldBar.setPostcode(newBar.getPostcode());
		oldBar.setEasting(newBar.getEasting());
		oldBar.setNorthing(newBar.getNorthing());
		oldBar.setLatitude(newBar.getLatitude());
		oldBar.setLongitude(newBar.getLongitude());
		oldBar.setLocalAuthority(newBar.getLocalAuthority());
		
		return "{\"message\": \"Bar sucessfully updated\"}";
	}

	@Transactional(REQUIRED)
	public String createX(String bars) {
		JSONArrayConverter jc = new JSONArrayConverter(bars);
		for(int i=0; i<jc.size(); i++) {
			em.persist(util.fromJSON(jc.getString(i), Bar.class));
		}
		return "{\"message\": \"Bars successfully added\"}";
	}

}
