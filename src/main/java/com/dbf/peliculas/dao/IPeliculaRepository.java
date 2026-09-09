package com.dbf.peliculas.dao;

import org.springframework.data.repository.CrudRepository;

import com.dbf.peliculas.entities.Pelicula;

public interface IPeliculaRepository extends CrudRepository<Pelicula, Long>{

}
