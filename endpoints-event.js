const EventEmitter = require('events')
const GameQuery = require('./games-query')

const emitter = new EventEmitter();

emitter.on('/start', async (bot,chatId, {SearchButton}) => {
    await bot.sendMessage(chatId, 'Hello', SearchButton)
})
emitter.on('/genres', async (bot, chatId, {gameOption}) => {
    GameQuery.clearRemGames();
    await bot.sendMessage(chatId, 'Choose genre of game', gameOption)
})
emitter.on('/fao', async(bot, chatId, {AdditionalButtons}) => {
    await bot.sendMessage(chatId, "MSSG", AdditionalButtons)
})


emitter.on('/Action', GameQuery.action)
emitter.on('/Strategy', GameQuery.strategy)
emitter.on('/Shooter', GameQuery.shooter)
emitter.on('/RPG', GameQuery.rpg)
emitter.on('/MMO', GameQuery.mmo)
emitter.on('/Horror', GameQuery.horror)

module.exports = emitter;