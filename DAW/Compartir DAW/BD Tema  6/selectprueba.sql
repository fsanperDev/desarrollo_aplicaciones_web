use ex3trim;
delimiter //
drop function if exists ej_num_pers//
CREATE FUNCTION `ej_num_pers` ( _edad INT, _genero char(1))
RETURNS INTEGER
BEGIN
	declare _personas INT default 0;
    declare menos_e INT default 0;
    declare mas_e INT default 0;
    declare sexo ENUM ('H', 'M');
    
    set menos_e = _edad - 10;
    set mas_e = _edad + 10;
    
    IF _genero =! sexo THEN
         set _personas = -1;
	END IF;
    
    set _personas = (select count(*) from persona where edad>= menos_e and edad<= mas_e
					and genero != _genero);

RETURN _personas;
END//
delimiter ;

select ej_num_pers('30','H');