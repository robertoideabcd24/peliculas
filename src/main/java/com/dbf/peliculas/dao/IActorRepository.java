package com.dbf.peliculas.dao;

import org.springframework.data.repository.CrudRepository;

import com.dbf.peliculas.entities.Actor;

public interface IActorRepository extends CrudRepository<Actor, Long>{

}
