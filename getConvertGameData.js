module.exports = (data) => {
    //console.log(data)

    const img = data.background_image;
    const gameName = data.name || data.name_original || 'There Must be Name of Game)';
    const released = `released:${data.released}`;
    const metacritic = `metacritic:${data.metacritic || 'unknown'}`;

    let genreList = "";
    data.genres.forEach((obj, index) => {
        genreList += index == data.genres.length - 1 ? obj.name : `${obj.name},`;
    })
    const genres = `genres:[${genreList || 'genre, what is this?'}]`

    let tagsList = "";
    data.tags.forEach((obj, index) => {
        tagsList += index == data.tags.length - 1 ? obj.name : `${obj.name},`
    })
    const tags = `tags:[${tagsList || 'tags its just illugsion'}]`

    let devsList = "";
    data.developers.forEach((obj, index) => {
        devsList += index == data.developers.length - 1 ? obj.name : `${obj.name},`;
    })
    const developers = `developers:[${devsList || "0_0"}]`;

    let publsList = "";
    data.publishers.forEach((obj, index) => {
        publsList += index == data.publishers.length - 1 ? obj.name : `${obj.name},`
    })
    const publisher = `publisher:[${ publsList || 'unknown'}]`
    const website = `website:${data.website || 'nope'}`

    let platformStr = "";
    data.platforms.forEach( (obj,index) => {
        platformStr += index == data.platforms.length - 1 ? obj.platform.name : `${obj.platform.name},`
    })
    const platforms = `platforms:[${platformStr || 'none'}]`

    let storesList = "";
    data.stores.forEach((obj, index) => {
        storesList += index == data.stores.length - 1 ? '<a href=' + "'" + obj.store.domain + "'" +'>' + obj.store.name + '</a>' : '<a href=' + "'" + obj.store.domain + "'" +'>' + obj.store.name + '</a>,'
    })
    const stores = `stores:[${storesList || 'You know where find ;)'}]`

    const pcIndex = data.platforms.find(obj => obj.platform.name == "PC");
    const requirements = (pcIndex && "Requirements for PC:" + pcIndex.requirements.minimum) || '';

    const description_raw = (data.description_raw.length > 100 ? `Description:${data.description_raw.substring(0,100)}...` : "Description:" + data.description_raw) || 'no description';
    const link = `https://rawg.io/games/${data.slug}`;
    const moreInfo = "<a href="+ "'" + link + "'" +">More Info</a>";

    const caption = `${gameName}\n${released}\n${metacritic}\n${genres}\n${tags}\n${developers}\n${publisher}\n${website}\n${platforms}\n${stores}\n${requirements}\n${description_raw}\n${moreInfo}`

    return {
        img,
        caption
    }
}