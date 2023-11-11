/*  TRIGGER 1   */ 
drop trigger if exists t1_comprobar_matricula;
delimiter //
create trigger t1_comprobar_matricula before insert on calificaciones
for each row
begin

    IF (select count(estado) from matricula where idAlumno = new.idAlumno
						AND idModulo = new.idModulo) = 0 THEN 
		signal sqlstate '45000' set message_text = 'El alumno no esta actualmente matriculado en ese módulo';
	else
		IF (select count(*) from calificaciones where idAlumno = new.idAlumno and idInstrumento = new.idInstrumento
				and trimestre = new.trimestre and idModulo = new.idModulo)>0 THEN 
			signal sqlstate '45000' set message_text ='Error clave duplicada';
        END IF;
    
    END IF;

end //
delimiter ;

insert into calificaciones values(1,'TO',1,5.34,'LM');
insert into calificaciones values(2,'TO',1,5.34,'LM');
insert into calificaciones values(2,'TO',3,5.34,'LM');

/*  PROCEDIMIENTO 2   */


/*  PROCEDIMIENTO 3   */
drop procedure if exists  p3_alumnos_del_modulo;
delimiter //
create procedure p3_alumnos_del_modulo (IN _Modulo char(3))
begin
	declare existe INT default 0;
    
    set existe = (select count(*) from modulos where idModulo = _Modulo);
    
    IF existe > 0 THEN
		IF (select count(*) from matricula where idModulo = _Modulo and estado >=1 ) > 0 THEN
			select alumnos.nombre, alumnos.apellidos FROM alumnos inner join matricula on matricula.idAlumno = alumnos.idAlumno
where matricula.idAlumno = alumnos.idAlumno and matricula.estado = 1 and idModulo = _Modulo;
		ELSE
			select 'No hay alumnos actualmente matriculados en ese módulo';
		END IF;    
    ELSE 
		select 'El módulo no existe en la Base de Datos';
	END IF;

end //
delimiter ;

call p3_alumnos_del_modulo('LM');
call p3_alumnos_del_modulo('ED');
call p3_alumnos_del_modulo('XX');

/* FUNCION 4      */
drop function if exists f4_calcular_nota_trimestre;
delimiter //
create function f4_calcular_nota_trimestre (_Alumno INT(11), _Modulo CHAR(3), _trimestre VARCHAR(45))
RETURNS INTEGER
begin
	declare resultado INT default 0;
    declare existe INT default 0;
    declare matriculado INT default 0;
    declare sinNotas INT default 0;
    
    set existe = (select count(*) from modulos where idModulo = _Modulo);
    set matriculado = (select count(estado) from matricula where idAlumno = _Alumno
						AND idModulo = _Modulo);
	set sinNotas = (select count(*) from calificaciones where idAlumno = _Alumno and trimestre = _trimestre
					and idModulo = _Modulo);
    
    IF existe = 0 THEN 
		set resultado = -1;
	END IF;
    
    IF matriculado = 0 THEN 
		set resultado = -1;
	END IF;
    
	IF sinNotas = 0 THEN 
		set resultado = -1;
	END IF;
    
 
 RETURN resultado;   
end //
delimiter ;

select f4_calcular_nota_trimestre(2,'LM',1);
select f4_calcular_nota_trimestre(4,'BD',2);
select f4_calcular_nota_trimestre(2,'XX',1);
select f4_calcular_nota_trimestre(1,'LM',1);
select f4_calcular_nota_trimestre(6,'LM',3);