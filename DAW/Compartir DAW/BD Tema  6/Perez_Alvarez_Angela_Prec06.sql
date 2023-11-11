/* PROCEDIMIENTO 1  */
use instituto;
drop procedure if exists p1_profesor_cursos;
delimiter $$
create procedure p1_profesor_cursos(p_nombre VARCHAR(30), p_apellidos VARCHAR(30)) 
begin
 declare num INT default 0;
 declare cod_prof INT default 0;
 select count(*) into num from profesor where nombre = p_nombre and apellidos = p_apellidos;
    IF num >= 1 THEN
		select codigo into cod_prof from profesor where nombre = p_nombre and apellidos = p_apellidos;
		select nombre from curso where codProfesor = cod_prof;
    ELSE
		select 'No imparte ningún curso' as 'Mensaje';
	END IF;
    
    
end $$
delimiter ;

call p1_profesor_cursos('NURIA','ANERO GONZALEZ');
call p1_profesor_cursos('NURIA','aaa');
call p1_profesor_cursos('AAA','ANERO GONZALEZ');
call p1_profesor_cursos('JAVIER','JIMENEZ HERNANDO');

/*   Trigger 2     */

use instituto;
delimiter $$
drop trigger if exists t2_nuevo_alumno $$ 
create trigger t2_nuevo_alumno (nombre VARCHAR(30), apellidos VARCHAR(30), sexo CHAR(1),
fechaNac date, codCurso int(11)) before insert on alumnado 
for each row
begin
	declare t_sexo enum ('M','H') default NULL;
    
    IF sexo = t_sexo THEN
			declare m_edad int unsigned default 0;
			select count(*) into m_edad
			from alumnado where  TIMESTAMPDIFF(YEAR,current_date(),fechaNac) <= 18;
			
			if (m_edad > 0) then
				signal sqlstate '45000' set message_text = 'El alumno debe ser mayor de edad';
			end if;		
	ELSE
		signal sqlstate '45000' set message_text='El campo sexo sólo puede valer H o M';
    END IF;
end $$
delimiter ;

INSERT INTO `instituto`.`alumnado` (`nombre`, `apellidos`, `sexo`, `fechaNac`, `codCurso`) 
VALUES ('PEPE', 'LOPEZ RUIZ', 'G', '2000-11-02', NULL); 
-- debe mostrar el error “El campo sexo sólo puede valer H o M”
INSERT INTO `instituto`.`alumnado` (`nombre`, `apellidos`, `sexo`, `fechaNac`, `codCurso`) VALUES ('PEPE', 'LOPEZ RUIZ', 'M', '2010-11-02', NULL); 
-- debe mostrar el error “El alumno debe ser mayor de edad”
INSERT INTO `instituto`.`alumnado` (`nombre`, `apellidos`, `sexo`, `fechaNac`, `codCurso`) VALUES ('PEPE', 'LOPEZ RUIZ', 'H', '2000-04-02', NULL);
-- se debe insertar el registro correctamente

/*      Procedimiento 3      */
use instituto;
drop procedure if exists p3_num_alumnos_curso;
delimiter $$
create procedure p3_num_alumnos_curso(c_curso INT, out _total int, out _nombre VARCHAR(100)) 
begin
	IF c_curso is not NULL THEN 
		set _total =(select numAlumnos from curso where codigo = c_curso);
		set _nombre = (select nombre from curso where codigo = c_curso);
    ELSE
      set _total = NULL;
      set _nombre = NULL;
    END IF;
    
end $$
delimiter ;

call p3_num_alumnos_curso(5,@total, @nombre);
select @total, @nombre; -- devolverá 25, Curso 5

call p3_num_alumnos_curso(6,@total, @nombre);
select @total, @nombre; -- devolverá NULL, NULL
