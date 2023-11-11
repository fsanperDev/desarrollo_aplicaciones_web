-- ACTIVIDAD 2 --
-- Apartado 2.1 --
update ciclista set nombre='Manuel Sánchez' where nombre='Alessio Di Basco' 
and nomeq='TVM';

-- Apartado 2.2 --
insert into etapa (salida, llegada, km) values ('Nimes', 'Gruisán', 201),
('Benicassim', 'Alcossebre', 173.4), ('Villareal', 'Sagunto', 198);

-- Apartado 2.3 --
begin;
delete from ciclista where dorsal in (SELECT AUX.dorsal FROM (select dorsal from ciclista where nomeq='Amore Vita' and edad<21)AUX)
and (SELECT B.dorsal FROM (select dorsal from ciclista where nomeq='Carrera' and edad>=31 and edad<=35) B);
commit;

-- ACTIVIDAD 3 --
-- Aparatado 3.1 --
delete from puerto where codigo in (select AUX.codigo from (SELECT codigo FROM puerto 
inner join etapa on puerto.netapa = etapa.netapa where etapa.netapa=4 and 
dorsal_ganador=(select dorsal from ciclista where nombre='Alex Zulle')) AUX);

-- Aparatado 3.2 --
insert into puerto (`nompuerto`, `altura`, `categoria`, `pendiente`, `netapa`) VALUES 
('nuevo', '100', 'B', '10', '1'),
('nuevo', '100', 'B', '10', '2'),
('nuevo', '100', 'B', '10', '3'),
('nuevo', '100', 'B', '10', '4'),
('nuevo', '100', 'B', '10', '5'),
('nuevo', '100', 'B', '10', '6'),
('nuevo', '100', 'B', '10', '7'),
('nuevo', '100', 'B', '10', '8'),
('nuevo', '100', 'B', '10', '9'),
('nuevo', '100', 'B', '10', '10'),
('nuevo', '100', 'B', '10', '11'),
('nuevo', '100', 'B', '10', '12');

-- Aparatado 3.3 --
delete from ciclista where dorsal in (select AUX.dorsal from (SELECT dorsal FROM ciclista inner join equipo on ciclista.nomeq = equipo.nomeq
inner join etapa on ciclista.dorsal = etapa.dorsal_ganador where equipo.director='Ricardo Padacci'
and ciclista.dorsal != etapa.dorsal_ganador) AUX);

-- Aparatado 3.4 --
UPDATE etapa SET `dorsal_ganador`=(SELECT dorsal FROM ciclista where nomeq!='TVM' 
and nomeq!='Bresciali-Refin' order by edad desc limit 1) WHERE `salida`='Córdoba';

-- Aparatado 3.5 --
UPDATE etapa SET `dorsal_ganador`=(select A.dorsal_ganador from (SELECT count(dorsal_ganador) FROM etapa where dorsal_ganador is not null 
group by dorsal_ganador order by dorsal_ganador limit 1) A) WHERE `dorsal_ganador`is null;

