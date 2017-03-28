function Pokemon(nombre, color, puntosAtaque){
	this.nombre=nombre;
	this.color=color;
	this.nivelDeAmistad=0;
	this.vida=100;
	this.puntosAtaque=puntosAtaque;

	this.saludar=function(){
		console.log("Hola, me llamo " + this.nombre)
	};
}

	this.beber=function(tipoAlcohol){
		if(tipoAlcohol=="chelas"){
			this.nivelDeAmistad+=80
		}
		else if (tipoAlcohol=="vodka"){
			this.nivelDeAmistad+=10
		}
	};
}

var pokemones=[];

function crearPokemon() {
 	var nombrePokemon = document.getElementById("nombrePokemon");
 	var colorPokemon = document.getElementById("colorPokemon");
 	var puntosAtaque = document.getElementById("puntosAtaque");

 	var pokemon = new Pokemon(nombrePokemon.value, colorPokemon.value, parseInt(puntosAtaque));
	 	pokemones.push(pokemon);
 		mostrarPokemones();
}

function mostrarPokemones(){
 	var listaPokemones = document.getElementById("listaPokemones");
 	
 	var lista = document.createElement("ul");

   		pokemones.forEach(function(pokemon){

    var elemento = document.createElement("li");

     	elemento.innerText=pokemon.nombre+pokemon.color+pokemon.puntosAtaque;
     	
     	lista.appendChild(elemento);
 });

 listaPokemones.appendChild(lista);
}

	this.pelear=function(pokemonObjeto){
		pokemonObjeto.vida=pokemonObjeto.vida-this.puntosAtaque
}




var pikachu=new Pokemon("Pikachu", "amarillo", 80)
var charmander=new Pokemon("charmander", "rojo", 30)

console.log(pikachu)
console.log(charmander)

console.log(pikachu.beber("chelas"))
console.log(charmander.beber("vodka"))

console.log(pikachu.nivelDeAmistad)
console.log(charmander.nivelDeAmistad)

pikachu.pelear(charmander)
console.log(charmander.vida)