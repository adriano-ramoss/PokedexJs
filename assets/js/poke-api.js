const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail){

    const pokemon = new Pokemon();
    pokemon.number  = pokeDetail.id;
    pokemon.name = pokeDetail.name;
    pokemon.height = pokeDetail.height;
    pokemon.weight = pokeDetail.weight;
    pokemon.experience = pokeDetail.base_experience;


    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;


    const abilities = pokeDetail.abilities.map((typeSlot) => typeSlot.ability.name)
    const [ability] = abilities;

    pokemon.abilities = abilities;
    pokemon.ability = ability;


    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default


    return pokemon;


}

pokeApi.getPokemonDetail = (pokemon) => {

    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)

}


pokeApi.getPokemons = (offset = 0, limit =5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}}&limit=${limit}`;

return fetch(url) //Fazendo Requisição
        .then((reponse)=> reponse.json()) //Atribuido a um arquivo Json
        .then((jsonBody) => jsonBody.results) // Pegando Resultados do JSon
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // mapeando a lista de requisicao com os detalhes do pokemon
        .then((detailRequest) => Promise.all(detailRequest)) // Esperando realizar todas a requisições
        .then((pokemonsDetails) =>  pokemonsDetails)//Lista com todos os pokemon
        
}

Promise.all([

    fetch("https://pokeapi.co/api/v2/pokemon/1/"),
    fetch("https://pokeapi.co/api/v2/pokemon/2/"),
    fetch("https://pokeapi.co/api/v2/pokemon/3/"),
    fetch("https://pokeapi.co/api/v2/pokemon/4/")

]).then((results) => {
    console.log(results);
})