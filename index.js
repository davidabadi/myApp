const dotenv = require('dotenv');
dotenv.config();

function hello(name) {
    console.log(`Hello ${name}`);
    console.log(process.env.TEST);
}


hello('David');

