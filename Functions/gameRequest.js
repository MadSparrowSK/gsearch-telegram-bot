const axios = require('axios')

async function getGame(genres, index,page) {
    const url = `https://api.rawg.io/api/games?key=3be063dfbfb748c4907fffef57dd9d18&genres=${genres}&page=${page}`
    const result = await axios.get(url);
    const data = await result.data.results;
    const game = data[index]

    return await getGameById(game.id);
}

async function getGameById(id) {
    const url = `https://api.rawg.io/api/games/${id}?key=3be063dfbfb748c4907fffef57dd9d18`
    return await axios.get(url);
}

module.exports = getGame;