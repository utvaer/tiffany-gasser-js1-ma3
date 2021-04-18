const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const gamesContainer = document.querySelector (".games");

async function getGames() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        console.log(results);

//WORKS UP UNTIL HERE
        gamesContainer.innerHTML = "";

        for (let i = 0; i < results.results.length; i++) {
            console.log(results.results[i].name);

            if (i === 8) {
                break;
            }

            gamesContainer.innerHTML += `<div class="games">Game: ${results.results[i].name}
            Rating: ${results.results[i].rating} 
            Tags: ${results.results[i].tags.length} </div>`;
        }

    } catch (error) {
        console.log(error)

        gamesContainer.innerHTML += `An error occured, please try again later.`;
    }
}

getGames();