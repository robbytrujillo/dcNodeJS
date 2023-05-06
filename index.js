import variableName from 'package-name';
import _ from 'lodash';

const myArray = [1, 2, 3, 4];
let sum = 0;

for(let i = 0; i < myArray.length; i++) {
  sum += myArray[i];
}

console.log(sum);

/* output
10
*/

const myArray1 = [1, 2, 3, 4];
let sum1 = myArray1.reduce((prev, curr) => {
  return prev + curr;
});

console.log(sum1);

/* output
10
*/


const myArray2 = [1, 2, 3, 4];
const sum2 = _.sum(myArray2);

console.log(sum);

/* output
10
*/

// var http = require('http');

// var port = 8080;
// http.createServer(function (req, res) {
// 	console.log("Aplikasi berjalan pada port : "+port);
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(port);