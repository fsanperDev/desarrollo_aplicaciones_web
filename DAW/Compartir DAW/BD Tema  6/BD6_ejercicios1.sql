use BD06;
drop procedure if exists BD06,
delimiter //
create procedure ejemplo1()
begin
	/* Aqui van las consultas o otras sentencias
    SQL */
	declare var_a int default 0;
    declare var_texto varchar(10) default null;
    declare var_num numeric(4,2) default 5.10;
    
    select var_a, var_texto, var_num;
    /* Modificar el nombre d las variables */
    set var_texto = 'Hola mundo';
    set var_a = var_a + 1 ;
    set var_num = var_num / 2 ;
    
    select var_a, var_texto, var_num;

end //
delimiter ;
call ejemplo1;