let EventEmitter = require('events');

class Clock extends EventEmitter {
    constructor() {
        super();
        setInterval(() => {
            this.emit('tick')
        }, 1000);
    }

    getClock() {
        this.on('tick', ()=>console.log("wohoo"));
    }
}

let clock = new Clock();
clock.getClock('tick');