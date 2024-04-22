// const ul = document.getElementById('figtherList');

// async function getListHero() {
//     try {
//         const response = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
//         const figtherList = await response.json();

//         figtherList.forEach(hero => {
//             const name = document.createElement('li');
//             name.innerText = hero.name;
//             ul.appendChild(name);
//         });

//         return true;
//     }
//     catch (e) {
//         console.error('problème', e);
//         return false;
//     }
// }

// const o = getListHero();

// function displaySuperheroes(superheroes){
    
//     const superheroesList = document.getElementById('superheroes-list');
//     superheroes.forEach(superhero => {

//     });
// }

fetch('https://akabab.github.io/superhero-api/api/all.json')
            .then(response => response.json())
            .then(data => {
                const superheroList = document.getElementById('superheroList');
                data.forEach(hero => {
                    const superheroDiv = document.createElement('div');
                    superheroDiv.classList.add('superhero');
                    superheroDiv.innerHTML = `
                        <img src="${hero.images.sm}" alt="${hero.name}">
                        <p>${hero.name}</p>
                    `;
                    superheroList.appendChild(superheroDiv);
                });
            });

