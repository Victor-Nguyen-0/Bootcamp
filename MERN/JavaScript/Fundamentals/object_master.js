const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);


// array of pokemon objects where id evenly divisible by 3

// const threes = pokemon.filter(p => p.id% 3 === 0);
// console.log(threes);

// fire type

// const fireType = pokemon.filter(p => p.types.includes("fire"));
// console.log(fireType);

// more than 1 type

// const twoTypes = pokemon.filter(p => p.types.length > 1);
// console.log(twoTypes);

// just names of pokemon

// const namesOfPokemon = pokemon.map(p => p.name);
// console.log(namesOfPokemon);

// names of pokemon id > 99

// const pokemonGreaterThan99 = pokemon.filter(p => p.id > 99).map(p => p.name);
// console.log(pokemonGreaterThan99);

// names of poison pokemon of one type

// const poisonPokemonNames = pokemon.filter(p => p.types.includes("poison")).filter(p => p.types.length < 2).map(p => p.name);
// console.log(poisonPokemonNames);

// first type of pokemon whose second type is flying

// const secondTypeFlying = pokemon.filter(p => p.types.length > 1).filter(p => p.types.includes("flying")).map(p => p.types[0]);
// console.log(secondTypeFlying);

// count of normal type pokemon

const normalTypeCount = Object.keys(pokemon.filter(p => p.types.includes("normal"))).length;
console.log(normalTypeCount)
