package com.qa.persistence.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Drink {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idDrink;
	@Column(length=255)
	private String name;
	@Column(length=255)
	private String logoUrl;
	@ManyToOne
	@JoinColumn(name="idBrewery")
	private Integer idBrewery;
	private double abv;
	
	@Override
	public String toString() {
		return "{" 
				+ "\"idDrink\":" + "\"" + this.idDrink + "\"" + "," 
				+ "\"name\":" + "\"" + this.name + "\"" + ","
				+ "\"logoUrl\":" + "\"" + this.logoUrl + "\""+ ","
				+ "\"idBrewery\":" + "\"" + this.idBrewery + "\"" + ","
				+ "\"abv\":" + "\"" + this.abv + "\""
				+ "}";
	}
	
	public Drink() {}

	public Drink(String name, String logoUrl, Integer idBrewery, double abv) {
		this.name = name;
		this.logoUrl = logoUrl;
		this.idBrewery = idBrewery;
		this.abv = abv;
	}

	public double getAbv() {
		return abv;
	}

	public void setAbv(double abv) {
		this.abv = abv;
	}

	public Long getIdDrink() {
		return idDrink;
	}

	public void setIdDrink(Long idDrink) {
		this.idDrink = idDrink;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLogoUrl() {
		return logoUrl;
	}

	public void setLogoUrl(String logoUrl) {
		this.logoUrl = logoUrl;
	}

	public Integer getIdBrewery() {
		return idBrewery;
	}

	public void setIdBrewery(Integer idBrewery) {
		this.idBrewery = idBrewery;
	}
	
	

}
