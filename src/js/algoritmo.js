	var medidas = new Array();
	var peso = 0;
	var presupuesto = 4000;
	var poblacion = new Array();
	var numeroPoblacion = 10;

function crearPoblacion(cantidad){
	//poblacion = new Array() ;
	console.log("entro" );

	for( k =  0 ; k  < cantidad; ++k){

		console.log("ciclo" );
		poblacion[k] = {peso: 0, precio: 0 , medida: 0, fitness: 0, imagen: "", componente:  comp() };

		llenarComponentes (poblacion[k].componente);

	}

}

function comp() {
	var nueva = new Array();
	for(var i = 0; i < 5 ; ++i ){
		nueva [i] = { };
	}
	return nueva;
}

function llenarComponentes(lista){
	console.log("llenarComponentes" );
	for(i = 0; i < 5 ; ++i){
			var cual ;
		switch (i){
				case 0:
					cual = frames_array.length;
					cual = Math.floor((Math.random() * cual));
          if(typeof frames_array[cual].detailImages != "undefined") {
            lista[i].id = frames_array[cual].id;
            lista[i].precio= frames_array[cual].skus[0].salePrice;
            lista[i].imagen =  frames_array[cual].detailImages[0].url;
          } else {
            --i;
          }
					break;
				case 1:
					cual = saddles_array.length;
					cual = Math.floor((Math.random() * cual));
          if(typeof saddles_array[cual].detailImages != "undefined") {
            lista[i].id = saddles_array[cual].id;
            lista[i].precio= saddles_array[cual].skus[0].salePrice;
            lista[i].imagen =  saddles_array[cual].detailImages[0].url;
          } else {
            --i;
          }
					break;
				case 2:
					cual = handlebars_array.length;
					cual = Math.floor((Math.random() * cual));
          if(typeof handlebars_array[cual].detailImages != "undefined") {
            lista[i].id = handlebars_array[cual].id;
            lista[i].precio= handlebars_array[cual].skus[0].salePrice;
            lista[i].imagen =  handlebars_array[cual].detailImages[0].url;
          } else {
            --i;
          }
					break;
				case 3:
					cual = wheels_array.length;
					cual = Math.floor((Math.random() * cual));
          if(typeof wheels_array[cual].detailImages != "undefined") {
            lista[i].id = wheels_array[cual].id;
            lista[i].precio= wheels_array[cual].skus[0].salePrice;
            lista[i].imagen =  wheels_array[cual].detailImages[0].url;
          } else {
            --i;
          }
					break;
				case 4:
					cual = cranksets_array.length;
					cual = Math.floor((Math.random() * cual));
          if(typeof cranksets_array[cual].detailImages != "undefined") {
            lista[i].id = cranksets_array[cual].id;
            lista[i].precio= cranksets_array[cual].skus[0].salePrice;
            lista[i].imagen =  cranksets_array[cual].detailImages[0].url;
          } else {
            --i;
          }
					break;

			}

		lista[i].medida = Math.floor((Math.random() * 3) +1);
		lista[i].peso =  Math.floor((Math.random() * 5) +1);
		console.log(lista[i].id);
	}
}

function mutar(cruzados){
	var probabilidadMutacion = 50;

	for(i = 0; i < cruzados.length ; ++i){
		var probaGen =  Math.floor((Math.random() * 100) + 1);
		if(probaGen < probabilidadMutacion){
			var cualGen = Math.floor((Math.random() * 5) );
			var cual;
			switch (cualGen){
				case 0:
					cual = frames_array.length;
					cual = Math.floor((Math.random() * cual));
          if(typeof frames_array[cual].detailImages != "undefined") {
            cruzados[i].componente[cualGen].id = frames_array[cual].id;
            cruzados[i].componente[cualGen].peso= Math.floor((Math.random() * 5) +1);
            cruzados[i].componente[cualGen].precio = frames_array[cual].skus[0].salePrice;
            cruzados[i].componente[cualGen].medida = Math.floor((Math.random() * 3) +1);
            cruzados[i].componente[cualGen].imagen = frames_array[cual].detailImages[0].url;
          }
					break;
				case 1:
					cual = saddles_array.length;
					cual = Math.floor((Math.random() * cual));
          if(typeof saddles_array[cual].detailImages != "undefined") {
            cruzados[i].componente[cualGen].id = saddles_array[cual].id;
            cruzados[i].componente[cualGen].peso= Math.floor((Math.random() * 5) +1);
            cruzados[i].componente[cualGen].precio = saddles_array[cual].skus[0].salePrice;
            cruzados[i].componente[cualGen].medida = Math.floor((Math.random() * 3) +1);
            cruzados[i].componente[cualGen].imagen = saddles_array[cual].detailImages[0].url;
          }
					break;
				case 2:
					cual = handlebars_array.length;
					cual = Math.floor((Math.random() * cual));
          if(typeof handlebars_array[cual].detailImages != "undefined") {
            cruzados[i].componente[cualGen].id = handlebars_array[cual].id;
            cruzados[i].componente[cualGen].peso= Math.floor((Math.random() * 5) +1);
            cruzados[i].componente[cualGen].precio = handlebars_array[cual].skus[0].salePrice;
            cruzados[i].componente[cualGen].medida = Math.floor((Math.random() * 3) +1);
            cruzados[i].componente[cualGen].imagen = handlebars_array[cual].detailImages[0].url;
          }
					break;
				case 3:
					cual = wheels_array.length;
					cual = Math.floor((Math.random() * cual));
          if(typeof wheels_array[cual].detailImages != "undefined") {
            cruzados[i].componente[cualGen].id = wheels_array[cual].id;
            cruzados[i].componente[cualGen].peso= Math.floor((Math.random() * 5) +1);
            cruzados[i].componente[cualGen].precio = wheels_array[cual].skus[0].salePrice;
            cruzados[i].componente[cualGen].medida = Math.floor((Math.random() * 3) +1);
            cruzados[i].componente[cualGen].imagen = wheels_array[cual].detailImages[0].url;
          }
					break;
				case 4:
				  cual = cranksets_array.length;
					cual = Math.floor((Math.random() * cual));
          if(typeof cranksets_array[cual].detailImages != "undefined") {
            cruzados[i].componente[cualGen].id = cranksets_array[cual].id;
            cruzados[i].componente[cualGen].peso= Math.floor((Math.random() * 5) +1);
            cruzados[i].componente[cualGen].precio = cranksets_array[cual].skus[0].salePrice;
            cruzados[i].componente[cualGen].medida = Math.floor((Math.random() * 3) +1);
            cruzados[i].componente[cualGen].imagen = cranksets_array[cual].detailImages[0].url;
          }
					break;

			}

		}
	}
}

function cruzar(padres){
	var probabilidadCruzar = 90;
	var nuevos = new Array();
	var cantidad =  (padres.length  / 2);
	var total = padres.length;

	for(i = 0 ; i < cantidad ; ++i ){
		var probaUno = Math.floor((Math.random() * 100) + 1);
		var probaDos = Math.floor((Math.random() * 100) + 1);
		if(probabilidadCruzar > (probaUno + probaDos)){
			var papaUno = padres.pop();
			var papaDos = padres.pop();
			var puntoCruce = Math.floor((Math.random() * 5) );
			var hijoUno = papaUno;
			var hijoDos = papaDos;
			for(i = 0 ; i < 5 ; ++ i){
				if(i < puntoCruce){
					hijoDos.componente[i].peso = papaUno.componente[i].peso;
					hijoDos.componente[i].precio = papaUno.componente[i].precio;
					hijoDos.componente[i].medida = papaUno.componente[i].medida;
					hijoDos.componente[i].id = papaUno.componente[i].id;


				}
				else{
					hijoUno.componente[i].peso = papaDos.componente[i].peso;
					hijoUno.componente[i].precio = papaDos.componente[i].precio;
					hijoUno.componente[i].medida = papaDos.componente[i].medida;
					hijoUno.componente[i].id = papaDos.componente[i].id;
				}
			}
			nuevos.push(hijoUno);
			nuevos.push(hijoDos);

		}
		else{
			nuevos.push(padres.pop());
			nuevos.push(padres.pop());

		}

		return nuevos;
	}





	return nuevos;


}

function sustitucion(nuevos, viejos){
	var retorno = new Array();
        for (i = 0; i < (numeroPoblacion - nuevos.length); i++)
        {
            retorno.push(viejos[i]);
        }

        for ( i = 0; i < nuevos.length; i++)
        {
            retorno.push(nuevos[i]);

        }
        return retorno;

}

function seleccion (padres, cantPadresCruce){

		padresParaCruce = new Array();

}

function sumarCosas(todos){

	for (i = 0 ; i < todos.length ; ++i){
		var pesot = 0;
		var preciot =0;
		var medidat = 0;
		for(j =0 ; j < 5 ; ++j){
			pesot += todos[i].componente[j].peso;
			preciot += todos[ i].componente[j].precio;
			if(todos[ i].componente[j].peso < medidas[j]){
				medidat += 20;
			}
		}
		todos[i].peso = pesot;
		todos[i].medida = medidat;
		todos[i].precio = preciot;
		todos[i].fitness = medidat;
		if(pesot > peso){
			todos[i].fitness += pesot * 10000;
		}
		else{
			todos[i].fitness += pesot;
		}
		if(preciot > presupuesto){
			todos[i].fitness += preciot * 100000000000;
		}
		else{
			todos[i].fitness += preciot;
		}

	}

}

function algoritmo(){
	console.log(numeroPoblacion);
	crearPoblacion(numeroPoblacion);
	var generacion = 0;
	var terminar = false;
	while(generacion < 300 ){
		console.log("mi generacion");
		console.log(generacion);
		sumarCosas(poblacion);
		poblacion.sort(function(a, b){return a.fitness - b.fitness });

		poblacion = cruzar(poblacion);
		mutar(poblacion);
		++generacion;

	}
	sumarCosas(poblacion);
	poblacion.sort(function(a, b){return a.fitness - b.fitness });
	console.log(poblacion[0].precio);
}










