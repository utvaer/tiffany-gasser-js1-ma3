const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const gamesContainer = document.querySelector (".games");

async function getGames() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        gamesContainer.innerHTML = "";

        for (let i = 0; i < results.results.length; i++) {
            if (i === 8) {
                break;
            }

            const gameName = results.results[i].name;
            const gameRating = results.results[i].rating;
            const gameTags = results.results[i].tags.length;

            gamesContainer.innerHTML += `<div class="games"><h2>${[i+1]}. Game: ${gameName}</h2>
            <p>Rating: ${gameRating}</p>
            <p>Tags: ${gameTags}</p> </div>`;
        }

    } catch (error) {
        gamesContainer.innerHTML = "";
        gamesContainer.innerHTML += `<p>An error occured, please try again later.</p>`;
    }
}

getGames();