package com.dbf.peliculas.dao;

import org.springframework.data.repository.CrudRepository;

import com.dbf.peliculas.entities.Genero;

public interface IGeneroRepository extends CrudRepository<Genero, Long>{
	
	// Se borraron save y buscar por id, ya que vienen agregadas en el crud repository
	// tambien se elmino el IGeneroRepositoryImpl
	
}
