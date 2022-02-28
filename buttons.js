const SearchButton = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Search Games', callback_data: '/genres'}]
        ]
    })
}

const gameOption = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Action', callback_data: '/Action' }, {text: 'Strategy', callback_data: '/Strategy'}],
            [{text: 'Shooter', callback_data: '/Shooter' }, {text: 'RPG', callback_data: '/RPG'}],
            [{text: 'MMO', callback_data: '/MMO' }, {text: 'Horror', callback_data: '/Horror'}],
        ]
    })
}

const AdditionalButtons = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Go Back', callback_data: '/genres'}, {text: 'Find Another One', callback_data: '/fao'}]
        ]
    })
}

module.exports = {
    SearchButton,
    gameOption,
    AdditionalButtons
}