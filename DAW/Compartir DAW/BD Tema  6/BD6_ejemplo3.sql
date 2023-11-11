set @mivariable = 129;

delimiter //
create procedure ejemplo3()
begin
	
	set @mivariable = @mivariable * 2;
    select @mivariable;

end //
delimiter ;