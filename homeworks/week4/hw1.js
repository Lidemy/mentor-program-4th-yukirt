const request = require('request');

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (_error, _response, body) => {
    if (_error) {
      return console.log('讀取失敗');
    }
    let bookdata;
    try {
      bookdata = JSON.parse(body);
    } catch (err) {
      return console.log(err);
    }
    for (let i = 0; i < bookdata.length; i += 1) {
      console.log(`${bookdata[i].id} ${bookdata[i].name}`);
    }
    // for eslint
    return NaN;
  },
);
