const EventEmitter = require('events')
const GameQuery = require('./games-query')

const emitter = new EventEmitter();

let lastEvent = '/genres';

emitter.on('/start', async (bot,chatId, {SearchButton}) => {
    await bot.sendMessage(chatId, 'Hello', SearchButton)
})
emitter.on('/genres', async (bot, chatId, {gameOption}) => {
    GameQuery.clearRemGames();
    await bot.sendMessage(chatId, 'Choose genre of game', gameOption)
})
emitter.on('/fao', async(bot, chatId, buttons) => {
    emitter.emit(lastEvent, bot, chatId, buttons);
})


emitter.on('/Action', async (bot, chatId, buttons) => {
    lastEvent = '/Action';
    await GameQuery.action(bot, chatId, buttons)
})
emitter.on('/Strategy', async (bot, chatId, buttons) => {
    lastEvent = '/Strategy';
    await GameQuery.strategy(bot, chatId, buttons)
})
emitter.on('/Shooter', async (bot, chatId, buttons) => {
    lastEvent = '/Shooter';
   await GameQuery.shooter(bot, chatId, buttons)
})
emitter.on('/RPG', async (bot, chatId, buttons) => {
    lastEvent = '/RPG';
   await GameQuery.rpg(bot, chatId, buttons)
})
emitter.on('/Adventure', async (bot, chatId, buttons) => {
    lastEvent = '/Adventure';
   await GameQuery.adventure(bot, chatId, buttons)
})
emitter.on('/Racing', async (bot, chatId, buttons) => {
    lastEvent = '/Racing';
    await GameQuery.racing(bot, chatId, buttons)
})

module.exports = emitter;