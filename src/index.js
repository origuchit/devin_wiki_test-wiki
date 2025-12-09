// メインアプリケーションファイル
const Logger = require('./logger');
const { formatDate } = require('./utils');

const logger = new Logger();

console.log('Hello, World!');
console.log('Current date:', formatDate(new Date()));

const config = require('./config');
console.log('Config loaded:', config);
