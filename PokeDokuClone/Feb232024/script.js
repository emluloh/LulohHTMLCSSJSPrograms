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
    { name: 'blastoise', type1: 'water', type2: null, gen: 'kanto', legend: false, firstEvol: false, lastEvol: true, noEvol: false }
  ];
  const types = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 
                      'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy',
                ];
  const additionalConditions = ['kanto', 'johto', 'hoenn', 'sinnoh', 'legendary', 'firstEvol', 'lastEvol', 'noEvol' ];
  let columnConditions = [];
  let rowConditions = [];
  let currentFilterFunction = null;

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
    
    // Function to dynamically create and append a Pokemon entry to the modal
  function appendPokemonEntry(pokemon, index, columnCond, rowCond, container, modal) {

    // Fetch the Pokémon data
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name.toLowerCase()}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const pokemonEntry = document.createElement('div');
        pokemonEntry.className = 'pokemon-entry';
        pokemonEntry.style.display = 'flex';
        pokemonEntry.style.alignItems = 'center';
        
        const img = document.createElement('img');
        img.src = data.sprites.front_default;
        img.alt = pokemon.name;
        img.style.width = '50px';
        img.style.height = '50px';
        img.style.marginRight = '10px';

        const nameSpan = document.createElement('span');
        nameSpan.textContent = pokemon.name;

        const addButton = document.createElement('button');
        addButton.textContent = 'Add';
        addButton.onclick = () => { // Using arrow function for cleaner syntax
          if (checkCond(pokemon, columnCond) && checkCond(pokemon, rowCond)) {
            document.querySelectorAll('.cell')[index].textContent = pokemon.name;
            modal.style.display = 'none';
          } else {
            lives--;
            updateLivesDisplay();
            if (lives <= 0) {
              alert('Game Over!');
              modal.style.display = 'none';
            }
          }
        };

        pokemonEntry.appendChild(img);
        pokemonEntry.appendChild(nameSpan);
        pokemonEntry.appendChild(addButton);
        container.appendChild(pokemonEntry);
      })
      .catch(error => {
        console.error('Error fetching Pokémon data:', error);
      });
  }

  function selectPokemon(index) {
    const columnCond = columnConditions[index % 3];
    const rowCond = rowConditions[Math.floor(index / 3)];
    const modal = document.getElementById('pokemon-selector');
    const searchInput = document.getElementById('pokemon-search');
    const optionsContainer = document.getElementById('pokemon-options');

    optionsContainer.innerHTML = ''; // Clear the options
    searchInput.value = '';
    searchInput.focus();

    if (currentFilterFunction) {
      searchInput.removeEventListener('input', currentFilterFunction); // Prevent duplicate event listeners
    }

    currentFilterFunction = function() {
      const filter = searchInput.value.toLowerCase();
      optionsContainer.innerHTML = ''; // Clear current options

      if (filter.length >= 3) {
        pokemonDB.filter(pokemon => pokemon.name.toLowerCase().includes(filter))
            .forEach(pokemon => appendPokemonEntry(pokemon, index, columnCond, rowCond, optionsContainer, modal));
      }
    };

    searchInput.addEventListener('input', currentFilterFunction);
    currentFilterFunction();
    
    modal.style.display = 'block';
    modal.querySelector('.close').addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }
  

  function updateLivesDisplay() {
    document.getElementById('lives-counter').textContent = `Lives: ${lives}`;
  }

  resetBoardUntilSolvable();
  createBoard();
});
