package com.qa.util;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class JSONConverter {
	
	private JsonParser parser;
	private JsonObject jsonObject;
	private Gson gson;

	public JSONConverter(String prettyJsonString) {
		this.parser = new JsonParser();
		this.jsonObject = parser.parse(prettyJsonString).getAsJsonObject();
		this.gson = new GsonBuilder().setLenient().create();
	}
	
	public String getString() {
		return gson.toJson(jsonObject);
	}
	
}
