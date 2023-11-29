let cardPokemon = document.getElementById('cardPokemon');
var urlParams = new URLSearchParams(window.location.search);
var pokemonNumber = urlParams.get('number');
const bodyClass = document.querySelector('body');


function viewDetailPokemon(pokemon){
    
    
    cardPokemon.innerHTML = `
    
    <img class="pokemon-image" src="${pokemon.photo}" alt="bulbasaur">
    <p class="pokemon-detail">Experience: ${pokemon.experience}</p>
    <p class="pokemon-detail">Name: ${pokemon.name}</p>
    <p class="pokemon-detail">Height: ${pokemon.height}</p>
    <p class="pokemon-detail">Weight: ${pokemon.weight}</p>
    <p class="pokemon-detail">Abilities: ${pokemon.abilities}</p>
    
    `;
    
    bodyClass.classList.add(`${pokemon.type}`);

                

}


const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;

pokeApi.getPokemonDetail({ url: pokemonUrl })
    .then(pokemonDetails => {
        
        viewDetailPokemon(pokemonDetails);
        console.log(pokemonDetails);
        
    })
    .catch(error => {
        console.error("Erro ao obter detalhes do Pokémon:", error);
    });
  


    




