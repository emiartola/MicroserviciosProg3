package com.formacionbdi.microservicios.app.usuarios.models.repository;

import org.springframework.data.repository.CrudRepository;

import com.formacionbdi.microservicios.app.usuarios.models.entity.Alumno;

public interface AlumnoRepository extends CrudRepository<Alumno, Long> {

}
