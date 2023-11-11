Algoritmo Tarea2
	Escribir 'Bienvenido'
	Escribir 'Escriba 1 para introducir un pedido o 5 para salir'
	Leer i
	Si i=1 Entonces
		Escribir 'Elige el tipo de ordenador que deseas'
		Escribir ' 1 Sobremesa , 2 Portatil, 3 Barebone'
		tp <- 0
		Leer tp
		Segun tp  Hacer
			1:
				tp <- 800
			2:
				tp <- 600
			3:
				tp <- 400
		FinSegun
		Repetir
			Escribir 'Eacribe la configuracion: Gamer, Estandar, Multimedia'
			Leer conf
			Segun conf Hacer
				12:
					conf <- ga
					ga <- "Gamer"
				13:
					conf <- 13
				14:
					conf <- 14
				
			Fin Segun
		
		Escribir 'El precio de tu ordenador ',conf,' es de: ',tp
	FinSi
FinAlgoritmo

