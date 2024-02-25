// script.js
document.addEventListener('DOMContentLoaded', async function () {
    let lives = 4; // Initialize lives
    let pokemonDetails = [];
    const pokemonDB = [];
    const types = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground',
        'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy',
    ];
    const additionalConditions = ['kanto', 'johto', 'hoenn', 'sinnoh', 'legendary', 'firstEvol', 'lastEvol', 'noEvol'];
    let columnConditions = [];
    let rowConditions = [];
    let currentFilterFunction = null;

    async function fetchAllPokemonData(limit = 151) {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            const detailPromises = data.results.map(pokemon => fetch(pokemon.url));
            const detailResponses = await Promise.all(detailPromises);
            const details = await Promise.all(detailResponses.map(res => res.json()));

            details.forEach(detail => {
                const { name, types, sprites } = detail;
                pokemonDB.push({
                    name,
                    types: types.map(t => t.type.name),
                    sprite: sprites.front_default,
                    // Add hard-coded data here as necessary
                    gen: 'kanto', // Example, adjust as necessary
                    // legend, firstEvol, lastEvol, noEvol would be set here based on your game logic
                });
            });
        } catch (error) {
            console.error("Failed to fetch Pokemon data:", error);
        }
    }

    console.log('DOMContentLoaded fired');
    await fetchAllPokemonData();
    console.log('Fetched Pokemon Data:', pokemonDetails);
    console.log(pokemonDB);

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

    //assignConditions();

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
        // Check if the condition is a type condition by checking if it's included in the 'types' array
        if (types.includes(cond)) {
            // If it's a type condition, check if the pokemon's types include this condition
            return pokemon.types && pokemon.types.includes(cond);
        } else {
            // For additional conditions (non-type conditions), directly compare the condition with pokemon's properties
            // Since additional conditions like 'gen', 'legend', 'firstEvol', etc., are hardcoded in pokemonDB
            // Directly accessing pokemon[cond] checks if the property exists and matches the condition
            return pokemon[cond] === true;
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
    function appendPokemonEntry(pokemon, index, columnCond, rowCond, container) {
        const pokemonEntry = document.createElement('div');
        pokemonEntry.className = 'pokemon-entry';
        pokemonEntry.style.display = 'flex';
        pokemonEntry.style.alignItems = 'center';

        const img = document.createElement('img');
        img.src = pokemon.sprite;
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
                document.getElementById('pokemon-selector').style.display = 'none';
            } else {
                lives--;
                updateLivesDisplay();
                if (lives <= 0) {
                    alert('Game Over!');
                    document.getElementById('pokemon-selector').style.display = 'none';
                }
            }
        };

        pokemonEntry.appendChild(img);
        pokemonEntry.appendChild(nameSpan);
        pokemonEntry.appendChild(addButton);
        container.appendChild(pokemonEntry);
    } //end of appendPokemonEntry function

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

        currentFilterFunction = function () {
            const filter = searchInput.value.toLowerCase();
            optionsContainer.innerHTML = ''; // Clear current options

            if (filter.length >= 2) {
                const filteredPokemon = pokemonDB.filter(pokemon => pokemon.name.toLowerCase().includes(filter));
                filteredPokemon.forEach(pokemon => appendPokemonEntry(pokemon, index, columnCond, rowCond, optionsContainer));
            }
        };

        searchInput.addEventListener('input', currentFilterFunction);
        currentFilterFunction();

        modal.style.display = 'block';
        modal.querySelector('.close').addEventListener('click', function () {
            modal.style.display = 'none';
        });
    } //end of selectPokemon function


    function updateLivesDisplay() {
        document.getElementById('lives-counter').textContent = `Lives: ${lives}`;
    }

    resetBoardUntilSolvable();
    createBoard();
});

