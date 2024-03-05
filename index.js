//DESARROLLA AQUI TUS SOLUCIONES

async function getRandomPokemon (){
    try{
    let i = Math.floor(Math.random()*150);
   
    let response = await fetch (`https://pokeapi.co/api/v2/pokemon/${i}`)
    let data = await response.json();
    
   return data;
   
    }
    catch(error){
    console.log('Datos no recibidos');
    }
}


 async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
    
} 

  
   
    
 
