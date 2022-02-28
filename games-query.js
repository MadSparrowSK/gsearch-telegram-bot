const axios = require('axios')

async function getGame(genres, page) {
    const url = `https://api.rawg.io/api/games?key=3be063dfbfb748c4907fffef57dd9d18&genres=${genres}&page=${page}`
    const result = await axios.get(url);
    const data = await result.data.results;
    const index = Math.floor(data.length * Math.random());
    const game = data[index]

    return game;
}

class GamesQuery {



    async action(bot, chatId, {AdditionalButtons}) {
        const gamePreModify =  await getGame('action', 2);
        await bot.sendMessage(chatId, gamePreModify.name, AdditionalButtons)
    }
    async strategy(bot, chatId, AdditionalButtons) {

    }
    async mmo(bot, chatId, AdditionalButtons) {

    }
    async shooter(bot, chatId, AdditionalButtons) {

    }
    async rpg(bot, chatId, AdditionalButtons) {

    }
    async horror(bot, chatId, AdditionalButtons) {

    }
}

module.exports = new GamesQuery();