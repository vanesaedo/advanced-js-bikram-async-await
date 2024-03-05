//DESARROLLA AQUI TUS SOLUCIONES
//1
async function getRandomPokemon() {
    try {
        let i = Math.floor(Math.random() * 150);

        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        let data = await response.json();

        return data;

    }
    catch (error) {
        console.log('Datos no recibidos');
    }
}

//2
async function getImageAndName(pokemon) {

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return { name, img }

}
//3

/* Ejercicio 3.- Declara una funcion **printImageAndName** que retorne el string necesario para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma:
*/
async function printImageAndName() {
    //read pokemon characters
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    let section = `<section><img src="${img}img" alt="${name}"><h1>${name}</h1></section>`
    return section;

}
//Ejercicios Batalla entre Pokemon y perritos
//4 

/* **Recordatorio, la API de perritos era 'https://dog.ceo/dog-api/'***/

async function getRandomDogImage() {
    let response = await fetch('https://dog.ceo/api/breeds/image/random')
    let data = await response.json()
    return data.message;

}

//5 
/* Ejercicio 5.- Declara una función **getRandomPokemonImage** que retorne la url de la imagen de un pokemon aleatorio. */

async function getRandomPokemonImage() {

    let i = Math.floor(Math.random() * 150);

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    let data = await response.json();
    let img = data.sprites.front_default;
    return img;

}

//6


async function printPugVsPikachu() {
    let response = await fetch('https://dog.ceo/api/breeds/image/random')
    let data = await response.json()
    let dogWarrior = data.message;

    let response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/5`)
    let data2 = await response2.json();
    let pokeWarrior = data2.sprites.front_default;

    const card = document.createElement("article");
    const imgPoke = document.createElement("img");
    const imgDog = document.createElement("img");
    imgPoke.setAttribute("src",pokeWarrior )
    imgDog.setAttribute("src", dogWarrior )
    card.appendChild(imgPoke)
    card.appendChild(imgDog)
    const battleSection = document.getElementById("battle");
    battleSection.appendChild(card);
}
//Para llamar a esta función no puedo hacerlo desde global, he de hacerlo de este modo.
async function pintar () { 

    await printPugVsPikachu();

}

pintar();

//7 

