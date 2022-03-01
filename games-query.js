const getGame = require('./gameRequest')
const getConvertGameData = require('./getConvertGameData')

let rememberedGames = []

function getRandomPara() {
    let index = Math.floor(Math.random() * 20);
    let page = Math.floor(Math.random() * 100) || 1;

    if(rememberedGames.length > 50)
        rememberedGames = []

    while(rememberedGames.find(value => (value.page == page) && (value.index == index))) {
        index = Math.floor(Math.random() * 20);
        page = Math.floor(Math.random() * 200);
    }
    rememberedGames.push({index, page})

    return {index, page};
}

class GamesQuery {

    async action(bot, chatId, {AdditionalButtons}) {
        const {index,page} = getRandomPara()
        const gamePreModify =  await getGame('action', index, page);
        const data = await gamePreModify.data;

        const {img, caption} = getConvertGameData(data);

        await bot.sendPhoto(chatId, img, {caption});
        await bot.sendMessage(chatId, '?Next?', AdditionalButtons)
    }
    async strategy(bot, chatId, {AdditionalButtons}) {
        const {index,page} = getRandomPara()
        const gamePreModify =  await getGame('strategy', index, page);
        const data = await gamePreModify.data;

        const {img, caption} = getConvertGameData(data);

        await bot.sendPhoto(chatId, img, {caption});
        await bot.sendMessage(chatId, '?Next?', AdditionalButtons)
    }
    async shooter(bot, chatId, {AdditionalButtons}) {
        const {index,page} = getRandomPara()
        const gamePreModify =  await getGame('shooter', index, page);
        const data = await gamePreModify.data;

        const {img, caption} = getConvertGameData(data);

        await bot.sendPhoto(chatId, img, {caption});
        await bot.sendMessage(chatId, '?Next?', AdditionalButtons)
    }
    async rpg(bot, chatId, {AdditionalButtons}) {
        const {index,page} = getRandomPara()
        const gamePreModify =  await getGame('role-playing-games-rpg', index, page);
        const data = await gamePreModify.data;

        const {img, caption} = getConvertGameData(data);

        await bot.sendPhoto(chatId, img, {caption});
        await bot.sendMessage(chatId, '?Next?', AdditionalButtons)
    }
    async adventure(bot, chatId, {AdditionalButtons}) {
        const {index,page} = getRandomPara()
        const gamePreModify =  await getGame('adventure', index, page);
        const data = await gamePreModify.data;

        const {img, caption} = getConvertGameData(data);

        await bot.sendPhoto(chatId, img, {caption});
        await bot.sendMessage(chatId, '?Next?', AdditionalButtons)
    }
    async racing(bot, chatId, {AdditionalButtons}) {
        const {index,page} = getRandomPara()
        const gamePreModify =  await getGame('racing', index, page);
        const data = await gamePreModify.data;
        const {img, caption} = getConvertGameData(data);

        await bot.sendPhoto(chatId, img, {caption});
        await bot.sendMessage(chatId, '?Next?', AdditionalButtons)
    }


    clearRemGames() {
        rememberedGames = []
    }
}

module.exports = new GamesQuery();