Algoritmo sin_titulo
	Escribir '¿Que deseas hacer?'
	Escribir '1.Pedido 2.Salir'
	menu <- 0
	Leer menu
	Si menu=1 Entonces
		total <- 0
		Escribir '¿Que modelo deseas?'
		Escribir '1.Sobremesa 2.Portatil 3.Barebone'
		Leer precio1
		Segun precio1  Hacer
			precio1=1:
				total <- total+800
			precio1=2:
				total <- total+600
			precio1=3:
				total <- total+400
		FinSegun
		Escribir 'Escribe la configuracion que deseas (Gamer, Estandar, Multimedia)'
		Leer conf
		Escribir '¿Cuantos servicios deseas?'
		serv <- 0
		Leer serv
		Mientras serv>0 Hacer
			Escribir '1.Arranque inicial 2.Solucion de virus 3.Soporte informático'
			Escribir '4.Instalar SO 5.Instalar Hardware 6.Gestion de datos HD'
			opc <- 0
			Segun opc  Hacer
				opc=1:
					total <- total+20
				opc=2:
					total <- total+30
				opc=3:
					total <- total+49.99
				opc=4:
					total <- total+36.80
				opc=5:
					total <- total+24.99
				opc=6:
					total <- total+60
				De Otro Modo:
					Escribir 'Vuelva a escribir un numero'
			FinSegun
			serv <- serv-1
		FinMientras
		Escribir 'Su ordenador con la configuracion ',conf,' sera un total de :',total,' euros'
	Sino
		Escribir 'Adios'
	FinSi
FinAlgoritmo

