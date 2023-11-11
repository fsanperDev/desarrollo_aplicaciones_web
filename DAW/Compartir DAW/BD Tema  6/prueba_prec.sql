use premiospepe;
drop trigger if exists insertar_regalo;
delimiter //
create trigger insertar_regalo 
before insert on premio for each row
begin
	declare u_puntos INT default 0;
    
    select puntos into u_puntos from usuario where usuario = new.usuario;
    set p_stock = (select stock from articulo where referencia = new.referencia);
    set a_puntos = (select puntos from articulo where referencia = new.referencia);
    
    IF p_stock <= 0 THEN
		return 'No hay stock del articulo';
	else
		set p_stock = p_stock-new.unidades;
	END IF;
    
    IF new.puntostotales < a_puntos THEN
		return 'No tiene suficientes puntos';
	ELSE 
		set u_puntos = u_puntos - a_puntos;
	END IF;
    
    update usuario set puntos=u_puntos where usuario = new.usuario; 
    update articulo set stock=p_stock where usuario = new.usuario;
    
end//

delimiter ;