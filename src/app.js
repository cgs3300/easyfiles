const http = require('http');
const chalk = require('chalk');
const conf = require('./config/defaultConfig');

const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    res.end('hello world.');
});

server.listen(conf.port,conf.hostname,() => {
    const addr = `http://${conf.hostname}:${conf.port}`;
    console.info(`Server started at ${chalk.green(addr)}`);
    
});