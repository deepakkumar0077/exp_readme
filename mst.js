const http = require('http');

const apiUrl = 'http://jsonplaceholder.typicode.com/posts/1';

http.get(apiUrl, (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    try {
      const jsonData = JSON.parse(data);
      console.log('Response:', jsonData);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  });
}).on('error', (error) => {
  console.error('Error making HTTP request:', error);
});
