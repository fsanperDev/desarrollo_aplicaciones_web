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