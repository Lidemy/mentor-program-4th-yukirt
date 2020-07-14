const request = require('request');
const process = require('process');

console.log(process.argv);
if (process.argv[2] === 'list') {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (_error, _response, body) => {
      console.log(body);
    },
  );
} else if (process.argv[2] === 'read') {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (_error, _response, body) => {
      console.log(body);
    },
  );
} else if (process.argv[2] === 'delete') {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (_error, _response, body) => {
      console.log(_response.statusCode);
      console.log(body);
    },
  );
} else if (process.argv[2] === 'create') {
  request.post(
    'https://lidemy-book-store.herokuapp.com/books',
    { form: { name: process.argv[3] } },
    (_error, _response, body) => {
      console.log(_response.statusCode);
      console.log(body);
    },
  );
} else if (process.argv[2] === 'update') {
  request.patch(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    { form: { name: process.argv[4] } },
    (_error, _response, body) => {
      console.log(_response.statusCode);
      console.log(body);
    },
  );
}
