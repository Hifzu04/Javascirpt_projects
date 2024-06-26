//const pokemon = https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png;


/*
const container = document.querySelector('#container');
for(let i = 1; i< 150 ; i++){
    
    const image = document.createElement('img');
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    container.appendChild(image);
}

*/


// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const pokeUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

const generations = {
    1: { id: 'firstGen', name: 'First Generation', first: 1, last: 151 },
    2: { id: 'secondGen', name: 'Second Generation', first: 152, last: 251 },
    3: { id: 'thirdGen', name: 'Third Generation', first: 252, last: 386 },
    4: { id: 'fourthGen', name: 'Fourth Generation', first: 387, last: 494 },
    5: { id: 'fifthGen', name: 'Fifth Generation', first: 495, last: 649 },
    6: { id: 'sixthGen', name: 'Sixth Generation', first: 650, last: 721 },
    7: { id: 'seventhGen', name: 'Seventh Generation', first: 722, last: 898 }
}

const numGenerations = Object.keys(generations).length;
// iterate through generations
for (let g = 1; g <= numGenerations; g++) {
    let name = generations[g].name;
    let id = generations[g].id;

    // div container
    const generationContainer = document.createElement('div');
    generationContainer.classList.add('generation-container', 'toggle-content');
    generationContainer.id = id;

    // anchor tag
    const a = document.createElement('a');
    a.href = '#' + id;
    a.append(name);
    a.classList.add('toggle');

    // span (initially collapsed)
    const span = document.createElement('span');
    span.append(' ➤ ');

    // h2 will embed a and span
    const h2 = document.createElement('h2');
    h2.classList.add('generation-title');
    
    h2.insertAdjacentElement('beforeend', span);
    h2.insertAdjacentElement('beforeend', a);

    // append container inside h2
    h2.appendChild(generationContainer);

    // h2 goes inside the big container
    container.appendChild(h2);

    // iterate through each generation
    for (let i = generations[g].first; i <= generations[g].last; i++) {
        // iterate through each generation
        let pokeImg = pokeUrl + i.toString() + '.png';
        // console.log(pokeImg);
        const pokemon = document.createElement('div');
        pokemon.classList.add('pokemon');
        // the image itself
        const img = document.createElement('img');
        img.src = pokeImg;
        const label = document.createElement('span');
        label.innerText = `#${i}`;
        // append all
        pokemon.appendChild(img);
        pokemon.appendChild(label);
        generationContainer.appendChild(pokemon);
        h2.appendChild(generationContainer);
    }
}

// ============================

// control display of containers
let show = function (elem) {
    elem.style.display = 'block';
};

let hide = function (elem) {
    elem.style.display = 'none';
};

let toggle = function (elem) {
    const parent = elem.parentElement;
    // If the element is visible, hide it
    if (window.getComputedStyle(elem).display === 'block') {
        hide(elem);
        parent.classList.remove('opened');
        return;
    }
    // Otherwise, show it
    show(elem);
    parent.classList.add('opened');
};

// Listen for click events
document.addEventListener('click', function (event) {
    // get the target
    const target = event.target;
    if (!event.target.classList.contains('toggle')) return;
    
    // Prevent default link behavior
    event.preventDefault();

    // Get the content
    let content = document.querySelector(event.target.hash);
    if (!content) return;

    // Toggle the content
    toggle(content);

}, false);

// all categories hidden when loading
const elements = document.querySelectorAll('.generation-container');

for (let elem of elements) {
    hide(elem);
}