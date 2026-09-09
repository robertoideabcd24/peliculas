package com.dbf.peliculas.services;

import java.util.List;

import com.dbf.peliculas.entities.Pelicula;

public interface IPeliculaService {
	
	public void save(Pelicula pelicula);
	public Pelicula findById(Long id);
	public List<Pelicula> findAll();
	public void delete(Long id);
}
