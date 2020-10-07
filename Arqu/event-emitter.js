const EventEmmiter = require('events');

class Logger extends EventEmmiter{
    execute(cb){
        console.log('Before');
        this.emit('start');
        cb();
        this.emit('finish');
        console.log('Afther');
    }
}

const logger = new Logger();

logger.on("start", () => console.log("Starting"));
logger.on("finish", () => console.log('finishing'));
logger.on("finish", () => console.log('It´s Done'));

logger.execute(() => console.log("hello word"));
