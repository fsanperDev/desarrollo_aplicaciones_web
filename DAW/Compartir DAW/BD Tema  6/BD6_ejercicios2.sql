use BD06;
drop procedure if exists ejemplo2,
delimiter //
create procedure ejemplo2()
begin
	/* Aqui van las consultas o otras sentencias
    SQL */
    declare v_texto char(2) default 'AS';
    declare v_enum enum ('gato', 'perro', 'tigre', 'oso') default 'perro';
    
    set v_texto = 'PL';
    set v_enum = 1;
    select v_texto;   
    
    
end //
delimiter ;
call ejemplo1;