package com.qa.persistence.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Offer {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long idOffer;
	private double price;
	@ManyToOne
	@JoinColumn(name="fsa_id")
	private Integer idBar;
	@ManyToOne
	@JoinColumn(name="idDrink")
	private Long idDrink;
	@ManyToOne
	@JoinColumn(name="idBrewery")
	private Integer idBrewery;
	
	@Override
	public String toString() {
		return "{" 
				+ "\"idOffer\":" + "\"" + this.idOffer + "\"" + "," 
				+ "\"price\":" + "\"" + this.price + "\"" + ","
				+ "\"idBar\":" + "\"" + this.idBar + "\""+ ","
				+ "\"idDrink\":" + "\"" + this.idDrink + "\""+ ","
				+ "\"idBrewery\":" + "\"" + this.idBrewery + "\""
				+ "}";
	}
	
	public Offer() {}

	public Offer(double price, Integer idBar, Long idDrink, Integer idBrewery) {
		this.price = price;
		this.idBar = idBar;
		this.idDrink = idDrink;
		this.idBrewery = idBrewery;
	}

	public Long getIdOffer() {
		return idOffer;
	}

	public void setIdOffer(Long idOffer) {
		this.idOffer = idOffer;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Integer getIdBar() {
		return idBar;
	}

	public void setIdBar(Integer idBar) {
		this.idBar = idBar;
	}

	public Long getIdDrink() {
		return idDrink;
	}

	public void setIdDrink(Long idDrink) {
		this.idDrink = idDrink;
	}

	public Integer getIdBrewery() {
		return idBrewery;
	}

	public void setIdBrewery(Integer idBrewery) {
		this.idBrewery = idBrewery;
	}

		
}
