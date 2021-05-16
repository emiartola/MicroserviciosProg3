package com.formacionbdi.microservicios.app.examenes.controllers;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import com.formacionbdi.microservicios.app.examenes.services.ExamenService;
import com.formacionbdi.microservicios.commons.controllers.CommonController;
import com.formacionbdi.microservicios.commons.examenes.models.entity.Examen;
import com.formacionbdi.microservicios.commons.examenes.models.entity.Pregunta;

@RestController
public class ExamenController extends CommonController<Examen, ExamenService> {

	@GetMapping("/respondidos-por-preguntas")
	public ResponseEntity<?> obtenerExamenesIdsPorPreguntasIdRespondidas(@RequestParam List<Long> preguntasIds) {
		return ResponseEntity.ok().body(service.findExamenesIdsConRespuestasByPreguntasIds(preguntasIds));
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> editar(@Valid @RequestBody Examen examen, BindingResult result, @PathVariable Long id) {

		if (result.hasErrors()) {
			return this.validar(result);
		}

		Optional<Examen> o = service.findById(id);
		if (!o.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		Examen examenDb = o.get();
		examenDb.setNombre(examen.getNombre());
		
		List<Pregunta> eliminadas = examenDb.getPreguntas()
				.stream()
				.filter(pdb -> !examen.getPreguntas().contains(pdb))
				.collect(Collectors.toList());

		eliminadas.forEach(examenDb::removePregunta);

		examenDb.setPreguntas(examen.getPreguntas());
		examenDb.setAsignaturaHija(examen.getAsignaturaHija());
		examenDb.setAsignaturaPadre(examen.getAsignaturaPadre());

		return ResponseEntity.status(HttpStatus.CREATED).body(service.save(examenDb));

	}

	@GetMapping("/filtrar/{term}")
	public ResponseEntity<?> filtrar(@PathVariable String term) {
		return ResponseEntity.ok(service.findByNombre(term));
	}

	@GetMapping("/asignaturas")
	public ResponseEntity<?> listarAsignaturas() {
		return ResponseEntity.ok(service.findAllAsignaturas());
	}

}
