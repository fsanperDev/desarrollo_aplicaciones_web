/* ------  EJERCICIO 1  ------------*/ 
delimiter //
drop procedure if exists ej_parejas//
CREATE PROCEDURE `ej_parejas` (_edad INT)
BEGIN
	declare _personaB varchar(45);
    
	set _personaB = (SELECT persona.nombre FROM persona inner join parejas on parejas.usuarioB = 
    persona.usuario where parejas.usuarioB != persona.usuario);
    set _persona = (SELECT persona.nombre FROM persona inner join parejas on parejas.usuarioA = 
    persona.usuario where parejas.usuarioA != persona.usuario and persona.nombre != _personaB);
    
	select _usuarios;
END

delimiter ;
call ej_parejas('30');


/* ------  EJERCICIO 2  ------------*/ 
delimiter //
drop trigger if exists ej_tri //
create trigger ej_tri before insert on parejas
for each row
begin
	declare user_A VARCHAR(10);
    declare user_B VARCHAR(10);
    
    set user_A = (select usuarioA from pareja);
    set user_B = (select usuarioB from pareja);
	
    IF new.usuarioA is NULL OR new.usuarioA is NULL THEN
		signal sqlstate '45000' set message_text =  'Debes de introducir los dos usuarios';
	END IF;
    
    IF new.usuarioA = user_A OR new.usuarioA = user_B THEN
		signal sqlstate '45000' set message_text ='El usuarioA ya tiene pareja';
	END IF;
    
    IF new.usuarioB = user_A OR new.usuarioB = user_B THEN
		signal sqlstate '45000' set message_text = 'El usuarioB ya tiene pareja';
	END IF;
end //
delimiter ; 
/* ------  EJERCICIO 3  ------------*/ 
delimiter //
drop function if exists ej_num_pers//
CREATE FUNCTION `ej_num_pers` ( _edad INT, _genero char(1))
RETURNS INTEGER
BEGIN
	declare _personas INT default 0;
    set menos_e = _edad - 10;
    set mas_e = _edad + 10;
	set _personas = (select count(*) from persona where edad>= menos_e and edad<= mas_e
					and genero != _genero);

RETURN _personas;
END//
delimiter ;