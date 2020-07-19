const request = require('request');

const clientId = 'a815f7jexqbchbrw4chdi2hpuuhq76';

const options = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': clientId,
  },
};

request(options, (_error, _response, body) => {
  if (_error) {
    return console.log(_error);
  }
  for (let i = 0; i < JSON.parse(body).top.length; i += 1) {
    console.log(`${JSON.parse(body).top[i].viewers} ${JSON.parse(body).top[i].game.name}`);
  }
  // for eslint
  return NaN;
});
