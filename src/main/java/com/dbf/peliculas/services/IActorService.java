package com.dbf.peliculas.services;

import java.util.List;

import com.dbf.peliculas.entities.Actor;

public interface IActorService {
	
	public List<Actor> findAll();
	public List<Actor> findAllById(List<Long> ids); 
	
}
