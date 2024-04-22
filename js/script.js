const ul = document.getElementById('figtherList');

async function getListHero() {
    try {
        const response = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
        const figtherList = await response.json();

        figtherList.forEach(hero => {
            const name = document.createElement('li');
            name.innerText = hero.name;
            ul.appendChild(name);
        });

        return true;
    }
    catch (e) {
        console.error('problème', e);
        return false;
    }
}

// const o = getListHero();

function displaySuperheroes(superheroes){
    const superheroesList = document.getElementById('superheroes-list');
    superheroes.forEach(superhero => {

    });
}



