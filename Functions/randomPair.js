module.exports =  getRandomPair = (rememberedGames) => {
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