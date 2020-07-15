const request = require('request');
const process = require('process');

console.log(process.argv);

request(
  `https://restcountries.eu/rest/v2/name/${process.argv[2]}`,
  (_error, _response, body) => {
    if (_error) {
      return console.log('讀取失敗');
    }
    if (JSON.parse(body).status === 404) {
      return console.log('無法找到此國家資料');
    }
    for (let i = 0; i < Object.keys(JSON.parse(body)).length; i += 1) {
      console.log('============');
      console.log(`國家：${JSON.parse(body)[i].name}`);
      console.log(`首都：${JSON.parse(body)[i].capital}`);
      console.log(`貨幣：${JSON.parse(body)[i].currencies[0].code}`);
      console.log(`國碼：${JSON.parse(body)[i].callingCodes}`);
    }
    // for eslint
    return NaN;
  },
);
