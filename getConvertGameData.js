module.exports = (data) => {
    const img = data.background_image;
    const gameName = data.name;
    const released = `released:${data.released}`;
    const metacritic = `metacritic:${data.metacritic || 'unknown'}`;
    const genres = `genres[...]`
    const tags = `tags[...]`
    const developers = `developers: ${data.developers[0].name}`;
    const publisher = `publisher: ${data.publishers[0].name}`
    const website = `website:${data.website}`
    const platforms = `platforms:[...]`
    const stores = `stores:[...]`
    const description_raw = data.description_raw.length > 100 ? `${data.description_raw.substring(0,100)}...` : data.description_raw;
    const moreInfo = `https://rawg.io/games/${data.slug}`;

    const caption = `${gameName}\n${released}\n${metacritic}\n${genres}\n${tags}\n${developers}\n${publisher}\n${website}\n${platforms}\n${stores}\n${description_raw}\n${moreInfo}`

    return {
        img,
        caption
    }
}