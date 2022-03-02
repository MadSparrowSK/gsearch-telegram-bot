const getGame = require('./Functions/gameRequest')
const getConvertGameData = require('./Functions/getConvertGameData')
const getRandomPair = require('./Functions/randomPair')

let rememberedGames = []

class GamesQuery {

    async action(bot, chatId, {AdditionalButtons}) {
        const {index,page} = getRandomPair(rememberedGames);
        const gamePreModify =  await getGame('action', index, page);
        const data = await gamePreModify.data;

        const {img, caption} = getConvertGameData(data);

        await bot.sendPhoto(chatId, img, {caption, parse_mode:'HTML'});
        await bot.sendMessage(chatId, '?Next?', AdditionalButtons)
    }
    async strategy(bot, chatId, {AdditionalButtons}) {
        const {index,page} = getRandomPair(rememberedGames);
        const gamePreModify =  await getGame('strategy', index, page);
        const data = await gamePreModify.data;

        const {img, caption} = getConvertGameData(data);

        await bot.sendPhoto(chatId, img, {caption, parse_mode:'HTML'});
        await bot.sendMessage(chatId, '?Next?', AdditionalButtons)
    }
    async shooter(bot, chatId, {AdditionalButtons}) {
        const {index,page} = getRandomPair(rememberedGames);
        const gamePreModify =  await getGame('shooter', index, page);
        const data = await gamePreModify.data;

        const {img, caption} = getConvertGameData(data);

        await bot.sendPhoto(chatId, img, {caption, parse_mode:'HTML'});
        await bot.sendMessage(chatId, '?Next?', AdditionalButtons)
    }
    async rpg(bot, chatId, {AdditionalButtons}) {
        const {index,page} = getRandomPair(rememberedGames);
        const gamePreModify =  await getGame('role-playing-games-rpg', index, page);
        const data = await gamePreModify.data;

        const {img, caption} = getConvertGameData(data);

        await bot.sendPhoto(chatId, img, {caption, parse_mode:'HTML'});
        await bot.sendMessage(chatId, '?Next?', AdditionalButtons)
    }
    async adventure(bot, chatId, {AdditionalButtons}) {
        const {index,page} = getRandomPair(rememberedGames);
        const gamePreModify =  await getGame('adventure', index, page);
        const data = await gamePreModify.data;

        const {img, caption} = getConvertGameData(data);

        await bot.sendPhoto(chatId, img, {caption, parse_mode:'HTML'});
        await bot.sendMessage(chatId, '?Next?', AdditionalButtons)
    }
    async racing(bot, chatId, {AdditionalButtons}) {
        const {index,page} = getRandomPair(rememberedGames);
        const gamePreModify =  await getGame('racing', index, page);
        const data = await gamePreModify.data;
        const {img, caption} = getConvertGameData(data);

        await bot.sendPhoto(chatId, img, {caption, parse_mode:'HTML'});
        await bot.sendMessage(chatId, '?Next?', AdditionalButtons)
    }


    clearRemGames() {
        rememberedGames = []
    }
}

module.exports = new GamesQuery();