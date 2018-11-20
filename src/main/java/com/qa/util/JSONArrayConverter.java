package com.qa.util;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonParser;

public class JSONArrayConverter {

	private JsonParser parser;
	private JsonArray jsonArray;
	private Gson gson;

	public JSONArrayConverter(String prettyJsonString) {
		this.parser = new JsonParser();
		this.jsonArray = parser.parse(prettyJsonString).getAsJsonArray();
		this.gson = new GsonBuilder().setLenient().create();
	}
	
	public String getArrayString() {
		return gson.toJson(jsonArray);
	}
	
	
	
	public String getString(int i) {
		return gson.toJson(jsonArray.get(i));		
	}

	public int size() {
		return jsonArray.size();
	}
}
