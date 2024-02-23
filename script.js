// script.js
document.addEventListener('DOMContentLoaded', function() {
  let lives = 4; // Initialize lives
  const pokemonDB = [
    { name: 'bulbasaur', type1: 'grass', type2: 'poison', gen: 'kanto', legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: 'ivysaur', type1: 'grass', type2: 'poison', gen: 'kanto', legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: 'venusaur', type1: 'grass', type2: 'poison', gen: 'kanto', legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: 'charmander', type1: 'fire', type2: null, gen: 'kanto', legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: 'charmeleon', type1: 'fire', type2: null, gen: 'kanto', legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: 'charizard', type1: 'fire', type2: 'flying', gen: 'kanto', legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: 'squirtle', type1: 'water', type2: null, gen: 'kanto', legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: 'wartortle', type1: 'water', type2: null, gen: 'kanto', legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: 'blastoise', type1: 'water', type2: null, gen: 'kanto', legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: 'caterpie', type1: 'bug', type2: null, gen: 'kanto', legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: 'metapod', type1: 'bug', type2: null, gen: 'kanto', legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: 'butterfree', type1: 'bug', type2: 'flying', gen: 'kanto', legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: 'weedle', type1: 'bug', type2: 'poison', gen: 'kanto', legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: 'kakuna', type1: 'bug', type2: 'poison', gen: 'kanto', legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: 'beedrill', type1: 'bug', type2: 'poison', gen: 'kanto', legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: 'pidgey', type1: 'normal', type2: 'flying', gen: 'kanto', legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: 'pidgeotto', type1: 'normal', type2: 'flying', gen: 'kanto', legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: 'pidgeot', type1: 'normal', type2: 'flying', gen: 'kanto', legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: 'rattata', type1: 'normal', type2: null, gen: 'kanto', legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: 'raticate', type1: 'normal', type2: null, gen: 'kanto', legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: 'spearow', type1: 'normal', type2: 'flying', gen: 'kanto', legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: 'fearow', type1: 'normal', type2: 'flying', gen: 'kanto', legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: 'ekans', type1: 'poison', type2: null, gen: 'kanto', legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: 'arbok', type1: 'poison', type2: null, gen: 'kanto', legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: 'pikachu', type1: 'electric', type2: null, gen: 'kanto', legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: 'raichu', type1: 'electric', type2: null, gen: 'kanto', legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "sandshrew", type1: "ground", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "sandslash", type1: "ground", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "nidoran♀", type1: "poison", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "nidorina", type1: "poison", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "nidoqueen", type1: "poison", type2: "ground", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "nidoran♂", type1: "poison", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "nidorino", type1: "poison", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "nidoking", type1: "poison", type2: "ground", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "clefairy", type1: "fairy", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "clefable", type1: "fairy", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "vulpix", type1: "fire", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "ninetales", type1: "fire", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "jigglypuff", type1: "normal", type2: "fairy", gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "wigglytuff", type1: "normal", type2: "fairy", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "zubat", type1: "poison", type2: "flying", gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "golbat", type1: "poison", type2: "flying", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "oddish", type1: "grass", type2: "poison", gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "gloom", type1: "grass", type2: "poison", gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "vileplume", type1: "grass", type2: "poison", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "paras", type1: "bug", type2: "grass", gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "parasect", type1: "bug", type2: "grass", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "venonat", type1: "bug", type2: "poison", gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "venomoth", type1: "bug", type2: "poison", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "diglett", type1: "ground", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "dugtrio", type1: "ground", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "meowth", type1: "normal", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "persian", type1: "normal", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "psyduck", type1: "water", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "golduck", type1: "water", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "mankey", type1: "fighting", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "primeape", type1: "fighting", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "growlithe", type1: "fire", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "arcanine", type1: "fire", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "poliwag", type1: "water", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "poliwhirl", type1: "water", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "poliwrath", type1: "water", type2: "fighting", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "abra", type1: "psychic", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "kadabra", type1: "psychic", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "alakazam", type1: "psychic", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "machop", type1: "fighting", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "machoke", type1: "fighting", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "machamp", type1: "fighting", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "bellsprout", type1: "grass", type2: "poison", gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "weepinbell", type1: "grass", type2: "poison", gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "victreebel", type1: "grass", type2: "poison", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "tentacool", type1: "water", type2: "poison", gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "tentacruel", type1: "water", type2: "poison", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "geodude", type1: "rock", type2: "ground", gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "graveler", type1: "rock", type2: "ground", gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "golem", type1: "rock", type2: "ground", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "ponyta", type1: "fire", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "rapidash", type1: "fire", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "slowpoke", type1: "water", type2: "psychic", gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "slowbro", type1: "water", type2: "psychic", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "magnemite", type1: "electric", type2: "steel", gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "magneton", type1: "electric", type2: "steel", gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "farfetch'd", type1: "normal", type2: "flying", gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "doduo", type1: "normal", type2: "flying", gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "dodrio", type1: "normal", type2: "flying", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "seel", type1: "water", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "dewgong", type1: "water", type2: "ice", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "grimer", type1: "poison", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "muk", type1: "poison", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "shellder", type1: "water", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "cloyster", type1: "water", type2: "ice", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "gastly", type1: "ghost", type2: "poison", gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "haunter", type1: "ghost", type2: "poison", gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "gengar", type1: "ghost", type2: "poison", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "onix", type1: "rock", type2: "ground", gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "drowzee", type1: "psychic", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "hypno", type1: "psychic", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "krabby", type1: "water", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "kingler", type1: "water", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "voltorb", type1: "electric", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "electrode", type1: "electric", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "exeggcute", type1: "grass", type2: "psychic", gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "exeggutor", type1: "grass", type2: "psychic", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "cubone", type1: "ground", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "marowak", type1: "ground", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "hitmonlee", type1: "fighting", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "hitmonchan", type1: "fighting", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "lickitung", type1: "normal", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "koffing", type1: "poison", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "weezing", type1: "poison", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "rhyhorn", type1: "ground", type2: "rock", gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "rhydon", type1: "ground", type2: "rock", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "chansey", type1: "normal", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "tangela", type1: "grass", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: true },
    { name: "kangaskhan", type1: "normal", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "horsea", type1: "water", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "seadra", type1: "water", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "goldeen", type1: "water", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "seaking", type1: "water", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "staryu", type1: "water", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "starmie", type1: "water", type2: "psychic", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "mr. mime", type1: "psychic", type2: "fairy", gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "scyther", type1: "bug", type2: "flying", gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "jynx", type1: "ice", type2: "psychic", gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "electabuzz", type1: "electric", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "magmar", type1: "fire", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "pinsir", type1: "bug", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "tauros", type1: "normal", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "magikarp", type1: "water", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "gyarados", type1: "water", type2: "flying", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "lapras", type1: "water", type2: "ice", gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "ditto", type1: "normal", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "eevee", type1: "normal", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "vaporeon", type1: "water", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "jolteon", type1: "electric", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "flareon", type1: "fire", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "porygon", type1: "normal", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "omanyte", type1: "rock", type2: "water", gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "omastar", type1: "rock", type2: "water", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "kabuto", type1: "rock", type2: "water", gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "kabutops", type1: "rock", type2: "water", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "aerodactyl", type1: "rock", type2: "flying", gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "snorlax", type1: "normal", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "articuno", type1: "ice", type2: "flying", gen: "kanto", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "zapdos", type1: "electric", type2: "flying", gen: "kanto", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "moltres", type1: "fire", type2: "flying", gen: "kanto", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "dratini", type1: "dragon", type2: null, gen: "kanto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "dragonair", type1: "dragon", type2: null, gen: "kanto", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "dragonite", type1: "dragon", type2: "flying", gen: "kanto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "mewtwo", type1: "psychic", type2: null, gen: "kanto", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "mew", type1: "psychic", type2: null, gen: "kanto", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "chikorita", type1: "grass", type2: null, gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "bayleef", type1: "grass", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "meganium", type1: "grass", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "cyndaquil", type1: "fire", type2: null, gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "quilava", type1: "fire", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "typhlosion", type1: "fire", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "totodile", type1: "water", type2: null, gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "croconaw", type1: "water", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "feraligatr", type1: "water", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "sentret", type1: "normal", type2: null, gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "furret", type1: "normal", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "hoothoot", type1: "normal", type2: "flying", gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "noctowl", type1: "normal", type2: "flying", gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "ledyba", type1: "bug", type2: "flying", gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "ledian", type1: "bug", type2: "flying", gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "spinarak", type1: "bug", type2: "poison", gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "ariados", type1: "bug", type2: "poison", gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "chinchou", type1: "water", type2: "electric", gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "lanturn", type1: "water", type2: "electric", gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "pichu", type1: "electric", type2: null, gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "cleffa", type1: "fairy", type2: null, gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "igglybuff", type1: "normal", type2: "fairy", gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "togepi", type1: "fairy", type2: null, gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "togetic", type1: "fairy", type2: "flying", gen: "johto", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "natu", type1: "psychic", type2: "flying", gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "xatu", type1: "psychic", type2: "flying", gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "mareep", type1: "electric", type2: null, gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "flaaffy", type1: "electric", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "ampharos", type1: "electric", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "bellossom", type1: "grass", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "marill", type1: "water", type2: "fairy", gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "azumarill", type1: "water", type2: "fairy", gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "sudowoodo", type1: "rock", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "politoed", type1: "water", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "hoppip", type1: "grass", type2: "flying", gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "skiploom", type1: "grass", type2: "flying", gen: "johto", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "jumpluff", type1: "grass", type2: "flying", gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "aipom", type1: "normal", type2: null, gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "sunkern", type1: "grass", type2: null, gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "sunflora", type1: "grass", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "yanma", type1: "bug", type2: "flying", gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "wooper", type1: "water", type2: "ground", gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "quagsire", type1: "water", type2: "ground", gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "espeon", type1: "psychic", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "umbreon", type1: "dark", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "murkrow", type1: "dark", type2: "flying", gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "slowking", type1: "water", type2: "psychic", gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "misdreavus", type1: "ghost", type2: null, gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "unown", type1: "psychic", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "wobbuffet", type1: "psychic", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "girafarig", type1: "normal", type2: "psychic", gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "pineco", type1: "bug", type2: null, gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "forretress", type1: "bug", type2: "steel", gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "dunsparce", type1: "normal", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "gligar", type1: "ground", type2: "flying", gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "steelix", type1: "steel", type2: "ground", gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "snubbull", type1: "fairy", type2: null, gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "granbull", type1: "fairy", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "qwilfish", type1: "water", type2: "poison", gen: "johto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "scizor", type1: "bug", type2: "steel", gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "shuckle", type1: "bug", type2: "rock", gen: "johto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "heracross", type1: "bug", type2: "fighting", gen: "johto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "sneasel", type1: "dark", type2: "ice", gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "teddiursa", type1: "normal", type2: null, gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "ursaring", type1: "normal", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "slugma", type1: "fire", type2: null, gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "magcargo", type1: "fire", type2: "rock", gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "swinub", type1: "ice", type2: "ground", gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "piloswine", type1: "ice", type2: "ground", gen: "johto", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "corsola", type1: "water", type2: "rock", gen: "johto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "remoraid", type1: "water", type2: null, gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "octillery", type1: "water", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "delibird", type1: "ice", type2: "flying", gen: "johto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "mantine", type1: "water", type2: "flying", gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "skarmory", type1: "steel", type2: "flying", gen: "johto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "houndour", type1: "dark", type2: "fire", gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "houndoom", type1: "dark", type2: "fire", gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "kingdra", type1: "water", type2: "dragon", gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "phanpy", type1: "ground", type2: null, gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "donphan", type1: "ground", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "porygon2", type1: "normal", type2: null, gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "stantler", type1: "normal", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "smeargle", type1: "normal", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "tyrogue", type1: "fighting", type2: null, gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "hitmontop", type1: "fighting", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "smoochum", type1: "ice", type2: "psychic", gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "elekid", type1: "electric", type2: null, gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "magby", type1: "fire", type2: null, gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "miltank", type1: "normal", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "blissey", type1: "normal", type2: null, gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "raikou", type1: "electric", type2: null, gen: "johto", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "entei", type1: "fire", type2: null, gen: "johto", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "suicune", type1: "water", type2: null, gen: "johto", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "larvitar", type1: "rock", type2: "ground", gen: "johto", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "pupitar", type1: "rock", type2: "ground", gen: "johto", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "tyranitar", type1: "rock", type2: "dark", gen: "johto", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "lugia", type1: "psychic", type2: "flying", gen: "johto", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "ho-oh", type1: "fire", type2: "flying", gen: "johto", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "celebi", type1: "psychic", type2: "grass", gen: "johto", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "treecko", type1: "grass", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "grovyle", type1: "grass", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "sceptile", type1: "grass", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "torchic", type1: "fire", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "combusken", type1: "fire", type2: "fighting", gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "blaziken", type1: "fire", type2: "fighting", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "mudkip", type1: "water", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "marshtomp", type1: "water", type2: "ground", gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "swampert", type1: "water", type2: "ground", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "poochyena", type1: "dark", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "mightyena", type1: "dark", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "zigzagoon", type1: "normal", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "linoone", type1: "normal", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "wurmple", type1: "bug", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "silcoon", type1: "bug", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "beautifly", type1: "bug", type2: "flying", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "cascoon", type1: "bug", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "dustox", type1: "bug", type2: "poison", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "lotad", type1: "water", type2: "grass", gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "lombre", type1: "water", type2: "grass", gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "ludicolo", type1: "water", type2: "grass", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "seedot", type1: "grass", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "nuzleaf", type1: "grass", type2: "dark", gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "shiftry", type1: "grass", type2: "dark", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "taillow", type1: "normal", type2: "flying", gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "swellow", type1: "normal", type2: "flying", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "wingull", type1: "water", type2: "flying", gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "pelipper", type1: "water", type2: "flying", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "ralts", type1: "psychic", type2: "fairy", gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "kirlia", type1: "psychic", type2: "fairy", gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "gardevoir", type1: "psychic", type2: "fairy", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "surskit", type1: "bug", type2: "water", gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "masquerain", type1: "bug", type2: "flying", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "shroomish", type1: "grass", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "breloom", type1: "grass", type2: "fighting", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "slakoth", type1: "normal", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "vigoroth", type1: "normal", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "slaking", type1: "normal", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "nincada", type1: "bug", type2: "ground", gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "ninjask", type1: "bug", type2: "flying", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "shedinja", type1: "bug", type2: "ghost", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: true },
    { name: "whismur", type1: "normal", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "loudred", type1: "normal", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "exploud", type1: "normal", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "makuhita", type1: "fighting", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "hariyama", type1: "fighting", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "azurill", type1: "normal", type2: "fairy", gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "nosepass", type1: "rock", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "skitty", type1: "normal", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "delcatty", type1: "normal", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "sableye", type1: "dark", type2: "ghost", gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "mawile", type1: "steel", type2: "fairy", gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "aron", type1: "steel", type2: "rock", gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "lairon", type1: "steel", type2: "rock", gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "aggron", type1: "steel", type2: "rock", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "meditite", type1: "fighting", type2: "psychic", gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "medicham", type1: "fighting", type2: "psychic", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "electrike", type1: "electric", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "manectric", type1: "electric", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "plusle", type1: "electric", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "minun", type1: "electric", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "volbeat", type1: "bug", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "illumise", type1: "bug", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "roselia", type1: "grass", type2: "poison", gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "gulpin", type1: "poison", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "swalot", type1: "poison", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "carvanha", type1: "water", type2: "dark", gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "sharpedo", type1: "water", type2: "dark", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "wailmer", type1: "water", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "wailord", type1: "water", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "numel", type1: "fire", type2: "ground", gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "camerupt", type1: "fire", type2: "ground", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "torkoal", type1: "fire", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "spoink", type1: "psychic", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "grumpig", type1: "psychic", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "spinda", type1: "normal", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "trapinch", type1: "ground", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "vibrava", type1: "ground", type2: "dragon", gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "flygon", type1: "ground", type2: "dragon", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "cacnea", type1: "grass", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "cacturne", type1: "grass", type2: "dark", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "swablu", type1: "normal", type2: "flying", gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "swablu", type1: "normal", type2: "flying", gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "altaria", type1: "dragon", type2: "flying", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "zangoose", type1: "normal", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "seviper", type1: "poison", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "lunatone", type1: "rock", type2: "psychic", gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "solrock", type1: "rock", type2: "psychic", gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "barboach", type1: "water", type2: "ground", gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "whiscash", type1: "water", type2: "ground", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "corphish", type1: "water", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "crawdaunt", type1: "water", type2: "dark", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "baltoy", type1: "ground", type2: "psychic", gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "claydol", type1: "ground", type2: "psychic", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "lileep", type1: "rock", type2: "grass", gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "cradily", type1: "rock", type2: "grass", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "anorith", type1: "rock", type2: "bug", gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "armaldo", type1: "rock", type2: "bug", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "feebas", type1: "water", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "milotic", type1: "water", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "castform", type1: "normal", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "kecleon", type1: "normal", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "shuppet", type1: "ghost", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "banette", type1: "ghost", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "duskull", type1: "ghost", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "dusclops", type1: "ghost", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "tropius", type1: "grass", type2: "flying", gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "chimecho", type1: "psychic", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "absol", type1: "dark", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "wynaut", type1: "psychic", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "snorunt", type1: "ice", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "glalie", type1: "ice", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "spheal", type1: "ice", type2: "water", gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "sealeo", type1: "ice", type2: "water", gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "walrein", type1: "ice", type2: "water", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "clamperl", type1: "water", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "huntail", type1: "water", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "gorebyss", type1: "water", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "relicanth", type1: "water", type2: "rock", gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "luvdisc", type1: "water", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "bagon", type1: "dragon", type2: null, gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "shelgon", type1: "dragon", type2: null, gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "salamence", type1: "dragon", type2: "flying", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "beldum", type1: "steel", type2: "psychic", gen: "hoenn", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "metang", type1: "steel", type2: "psychic", gen: "hoenn", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "metagross", type1: "steel", type2: "psychic", gen: "hoenn", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "regirock", type1: "rock", type2: null, gen: "hoenn", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "regice", type1: "ice", type2: null, gen: "hoenn", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "registeel", type1: "steel", type2: null, gen: "hoenn", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "latias", type1: "dragon", type2: "psychic", gen: "hoenn", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "latios", type1: "dragon", type2: "psychic", gen: "hoenn", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "kyogre", type1: "water", type2: null, gen: "hoenn", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "groudon", type1: "ground", type2: null, gen: "hoenn", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "rayquaza", type1: "dragon", type2: "flying", gen: "hoenn", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "jirachi", type1: "steel", type2: "psychic", gen: "hoenn", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "deoxys", type1: "psychic", type2: null, gen: "hoenn", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "turtwig", type1: "grass", type2: null, gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "grotle", type1: "grass", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "torterra", type1: "grass", type2: "ground", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "chimchar", type1: "fire", type2: null, gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "monferno", type1: "fire", type2: "fighting", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "infernape", type1: "fire", type2: "fighting", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "piplup", type1: "water", type2: null, gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "prinplup", type1: "water", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "empoleon", type1: "water", type2: "steel", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "starly", type1: "normal", type2: "flying", gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "staravia", type1: "normal", type2: "flying", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "staraptor", type1: "normal", type2: "flying", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "bidoof", type1: "normal", type2: null, gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "bibarel", type1: "normal", type2: "water", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "kricketot", type1: "bug", type2: null, gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "kricketune", type1: "bug", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "shinx", type1: "electric", type2: null, gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "luxio", type1: "electric", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "luxray", type1: "electric", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "budew", type1: "grass", type2: "poison", gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "roserade", type1: "grass", type2: "poison", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "cranidos", type1: "rock", type2: null, gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "rampardos", type1: "rock", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "shieldon", type1: "rock", type2: "steel", gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "bastiodon", type1: "rock", type2: "steel", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "burmy", type1: "bug", type2: null, gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "wormadam", type1: "bug", type2: "grass", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false, form: "plant cloak" },
    { name: "wormadam", type1: "bug", type2: "ground", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false, form: "sandy cloak" },
    { name: "wormadam", type1: "bug", type2: "steel", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false, form: "trash cloak" },
    { name: "mothim", type1: "bug", type2: "flying", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "combee", type1: "bug", type2: "flying", gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "vespiquen", type1: "bug", type2: "flying", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "pachirisu", type1: "electric", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "buizel", type1: "water", type2: null, gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "floatzel", type1: "water", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "cherubi", type1: "grass", type2: null, gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "cherrim", type1: "grass", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false, form: "sunshine" },
    { name: "shellos", type1: "water", type2: null, gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false, form: "west sea" },
    { name: "shellos", type1: "water", type2: null, gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false, form: "east sea" },
    { name: "gastrodon", type1: "water", type2: "ground", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false, form: "west sea" },
    { name: "gastrodon", type1: "water", type2: "ground", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false, form: "east sea" },
    { name: "ambipom", type1: "normal", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "drifloon", type1: "ghost", type2: "flying", gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "drifblim", type1: "ghost", type2: "flying", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "buneary", type1: "normal", type2: null, gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "lopunny", type1: "normal", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "mismagius", type1: "ghost", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "honchkrow", type1: "dark", type2: "flying", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "glameow", type1: "normal", type2: null, gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "purugly", type1: "normal", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "chingling", type1: "psychic", type2: null, gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "stunky", type1: "poison", type2: "dark", gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "skuntank", type1: "poison", type2: "dark", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "bronzor", type1: "steel", type2: "psychic", gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "bronzong", type1: "steel", type2: "psychic", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "bonsly", type1: "rock", type2: null, gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "mime jr.", type1: "psychic", type2: "fairy", gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "happiny", type1: "normal", type2: null, gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "chatot", type1: "normal", type2: "flying", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "spiritomb", type1: "ghost", type2: "dark", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "gible", type1: "dragon", type2: "ground", gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "gabite", type1: "dragon", type2: "ground", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: false, noEvol: false },
    { name: "garchomp", type1: "dragon", type2: "ground", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "munchlax", type1: "normal", type2: null, gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "riolu", type1: "fighting", type2: null, gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "lucario", type1: "fighting", type2: "steel", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "hippopotas", type1: "ground", type2: null, gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "hippowdon", type1: "ground", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "skorupi", type1: "poison", type2: "bug", gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "drapion", type1: "poison", type2: "dark", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "croagunk", type1: "poison", type2: "fighting", gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "toxicroak", type1: "poison", type2: "fighting", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "carnivine", type1: "grass", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "finneon", type1: "water", type2: null, gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "lumineon", type1: "water", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "mantyke", type1: "water", type2: "flying", gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "snover", type1: "grass", type2: "ice", gen: "sinnoh", legend: false, firstEvol: true, lastEvol: false, noEvol: false },
    { name: "abomasnow", type1: "grass", type2: "ice", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "weavile", type1: "dark", type2: "ice", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "magnezone", type1: "electric", type2: "steel", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "lickilicky", type1: "normal", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "rhyperior", type1: "ground", type2: "rock", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "tangrowth", type1: "grass", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "electivire", type1: "electric", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "magmortar", type1: "fire", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "togekiss", type1: "fairy", type2: "flying", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "yanmega", type1: "bug", type2: "flying", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "leafeon", type1: "grass", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "glaceon", type1: "ice", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "gliscor", type1: "ground", type2: "flying", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "mamoswine", type1: "ice", type2: "ground", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "porygon-z", type1: "normal", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "gallade", type1: "psychic", type2: "fighting", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "probopass", type1: "rock", type2: "steel", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "dusknoir", type1: "ghost", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "froslass", type1: "ice", type2: "ghost", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: true, noEvol: false },
    { name: "rotom", type1: "electric", type2: "ghost", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: false, noEvol: true, form: "Normal" },
    { name: "rotom", type1: "electric", type2: "fire", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: false, noEvol: true, form: "Heat" },
    { name: "rotom", type1: "electric", type2: "water", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: false, noEvol: true, form: "Wash" },
    { name: "rotom", type1: "electric", type2: "ice", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: false, noEvol: true, form: "Frost" },
    { name: "rotom", type1: "electric", type2: "flying", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: false, noEvol: true, form: "Fan" },
    { name: "rotom", type1: "electric", type2: "grass", gen: "sinnoh", legend: false, firstEvol: false, lastEvol: false, noEvol: true, form: "Mow" },
    { name: "uxie", type1: "psychic", type2: null, gen: "sinnoh", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "mesprit", type1: "psychic", type2: null, gen: "sinnoh", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "azelf", type1: "psychic", type2: null, gen: "sinnoh", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "dialga", type1: "steel", type2: "dragon", gen: "sinnoh", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "palkia", type1: "water", type2: "dragon", gen: "sinnoh", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "heatran", type1: "fire", type2: "steel", gen: "sinnoh", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "regigigas", type1: "normal", type2: null, gen: "sinnoh", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "giratina", type1: "ghost", type2: "dragon", gen: "sinnoh", legend: true, firstEvol: false, lastEvol: false, noEvol: true, forms: ["Altered Forme", "Origin Forme"] },
    { name: "cresselia", type1: "psychic", type2: null, gen: "sinnoh", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "phione", type1: "water", type2: null, gen: "sinnoh", legend: false, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "manaphy", type1: "water", type2: null, gen: "sinnoh", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "darkrai", type1: "dark", type2: null, gen: "sinnoh", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
    { name: "shaymin", type1: "grass", type2: null, gen: "sinnoh", legend: true, firstEvol: false, lastEvol: false, noEvol: true, forms: ["Land Forme", "Sky Forme"] },
    { name: "arceus", type1: "normal", type2: null, gen: "sinnoh", legend: true, firstEvol: false, lastEvol: false, noEvol: true },
  ];
  const types = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 
                      'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy',
                ];
  const additionalConditions = ['kanto', 'johto', 'hoenn', 'sinnoh', 'legendary', 'firstEvol', 'lastEvol', 'noEvol' ];
  let columnConditions = [];
  let rowConditions = [];

  function assignConditions() {
    columnConditions = [];
    rowConditions = [];
    const allConditions = [...types, ...types, ...additionalConditions];
    for (let i = 0; i < 3; i++) {
      const columnCond = allConditions[Math.floor(Math.random() * allConditions.length)];
      document.getElementById(`cond${String.fromCharCode(65 + i)}`).src = `images/types/${columnCond}.png`;
      document.getElementById(`cond${String.fromCharCode(65 + i)}`).alt = `${columnCond} Type`;
      const rowCond = allConditions[Math.floor(Math.random() * allConditions.length)];
      document.getElementById(`rowCond${String.fromCharCode(65 + i)}`).src = `images/types/${rowCond}.png`;
      document.getElementById(`rowCond${String.fromCharCode(65 + i)}`).alt = `${rowCond} Type`;
      columnConditions.push(columnCond);
      rowConditions.push(rowCond)
    }
  updateLivesDisplay();
  }

  function checkSolvability() {
    for (let row = 0; row < 3; row++) {
      for (let column = 0; column < 3; column++) {
        const rowCond = rowConditions[row];
        const colCond = columnConditions[column];
        const pokemonFound = pokemonDB.some(pokemon => checkCond(pokemon, rowCond) && checkCond(pokemon, colCond));
        
        if (!pokemonFound) {
          return false; // No Pokemon fits the criteria for this cell
        }
      }
    }
    return true; // All cells have at least one matching Pokemon
  }

  function resetBoardUntilSolvable() {
    do {
      assignConditions(); // Assign new types to rows and columns
    } while (!checkSolvability());
  }

  function checkCond(pokemon, cond) {
    //Check for type
    if (types.includes(cond)) {
      return pokemon.type1 === cond || pokemon.type2 === cond;
    } else {
      // Check for other conditions
      switch (cond) {
        case 'kanto':
        case 'johto':
        case 'hoenn':
        case 'sinnoh':
          return pokemon.gen === cond;
        case 'legendary':
          return pokemon.legend;
        case 'firstEvol':
          return pokemon.firstEvol;
        case 'lastEvol':
          return pokemon.lastEvol;
        case 'noEvol':
          return pokemon.noEvol;
        default:
          return false;
      }
    }
  }
  
  function createBoard() {
    const board = document.getElementById('sudoku-board');
    board.innerHTML = ''; // Clear the board first
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.index = i;
      cell.addEventListener('click', () => selectPokemon(i));
      board.appendChild(cell);
    }
  }

  function selectPokemon(index) {
    // Determine column type
    const columnCond = columnConditions[index % 3];
    const rowCond = rowConditions[Math.floor(index / 3)];
    const modal = document.getElementById('pokemon-selector');
    const searchInput = document.getElementById('pokemon-search');
    const optionsContainer = document.getElementById('pokemon-options');

    // Function to filter and display Pokemon entries
    const filterAndDisplayPokemon = () => {
      const filter = searchInput.value.toLowerCase();
      optionsContainer.innerHTML = '';

      // Only filter and display Pokémon if the search input has at least 3 characters
          if (filter.length >= 3) {
              pokemonDB.filter(pokemon => pokemon.name.toLowerCase().includes(filter)).forEach(pokemon => {
                  const pokemonEntry = document.createElement('div');
                  pokemonEntry.className = 'pokemon-entry';
                  pokemonEntry.innerHTML = `
                      <img src="images/pokemon/${pokemon.name}.png" alt="${pokemon.name}" style="width: 50px; height: 50px; margin-right: 10px;">
                      <span>${pokemon.name}</span>
                      <button>Add</button>
                  `;
                  pokemonEntry.querySelector('button').addEventListener('click', function() {
                      if (checkCond(pokemon, columnConditions[index % 3]) && checkCond(pokemon, rowConditions[Math.floor(index / 3)])) {
                          document.querySelectorAll('.cell')[index].textContent = pokemon.name;
                          modal.style.display = 'none';
                      } else {
                          lives--;
                          updateLivesDisplay();
                          modal.style.display = 'none';
                          if (lives <= 0) {
                              alert('Game Over!');
                              // Optionally, reset game or perform other actions as needed
                          }
                      }
                  });
                  optionsContainer.appendChild(pokemonEntry);
              });
          }
      }
  searchInput.addEventListener('input', filterAndDisplayPokemon);
  filterAndDisplayPokemon;
    
  modal.style.display = 'block';
  modal.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

function updateLivesDisplay() {
  document.getElementById('lives-counter').textContent = `Lives: ${lives}`;
}
  
  resetBoardUntilSolvable();
  createBoard();
});
