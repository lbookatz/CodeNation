const fetch = require('node-fetch');
require('dotenv').config();

// const url = `http://api.openweathermap.org/data/2.5/weather?q=Manchester,gb&units=metric&appid=${process.env.appid}`;

const getMarvel = async() => {

    let data = await fetch(`http://gateway.marvel.com/v1/public/comics?ts=${process.env.ts}&apikey=${process.env.publickey}&hash=${process.env.hash}`);
    console.log(await data.json())
    return await data.json.copyright;
}

module.exports = getMarvel;
