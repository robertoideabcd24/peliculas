package com.dbf.peliculas.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dbf.peliculas.entities.Pelicula;

public interface IPeliculaRepository extends JpaRepository<Pelicula, Long>{

	// Se agrego la paginacion
}
