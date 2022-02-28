const emitter = require('./endpoints-event')
const buttons = require('./buttons')

const TelegramApi = require('node-telegram-bot-api')
const token = '5224351947:AAGtMEmgrjuPm2Z0yFfGRVO0dTvJaIIcgaA';

const bot = new TelegramApi(token, {polling:true});

bot.on('message', (msg) => {
    console.log(msg);
    const queryMSG = msg.text;
    const chatId = msg.chat.id;

    emitter.emit(queryMSG, bot, chatId, buttons)
})
bot.on('callback_query',  (msg) => {
    console.log(msg)
    const queryData = msg.data;
    const chatId = msg.message.chat.id;
    //await bot.sendMessage(chatId, "Pizdec")


    emitter.emit(queryData, bot,chatId, buttons)
})

/*
emitter.on('/start', async(chatId) => {
    const imgLink = 'https://media.rawg.io/media/screenshots/6ef/6efc0a9cef9890895fb326f3ae07eb97.jpg'
    return await bot.sendPhoto(chatId, 'text', gameOption)
})
*/

/*
const start = async () => {
    await bot.setMyCommands([
        {command: '/start', description:'Hello'},
        {command: '/info', description:'info'},
    ])

    bot.on('message', (msg) => {
        const text = msg.text;
        const chatId = msg.chat.id;
        const emitted = emitter.emit(text, chatId);
        if(!emitted) {
           return bot.sendMessage(chatId, 'I dont know what u say')
        }
        bot.sendPhoto(chatId,'https://media.rawg.io/media/screenshots/6ef/6efc0a9cef9890895fb326f3ae07eb97.jpg', {
            caption: "text"
        })

    })
   /!* bot.on('callback_query', (msg) => {
        return bot.sendMessage(msg.message.chat.id, 'blyzdec');
    })*!/
}

start();*/
