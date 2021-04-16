const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const gamesContainer = document.querySelector (".games");

async function getGames() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        console.log(results);

//WORKS UP UNTIL HERE
        gamesContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
            console.log(results);

            if (i === 9) {
                break;
            }

            gamesContainer.innerHTML += `<div class="games">${results[i].name}</div>`;
        }

    } catch (error) {
        console.log(error)
    }
}

getGames();