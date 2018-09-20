var events = require('events');
//實體化新的事件
var eventEmitter = new events.EventEmitter();


// 绑定特定事件名稱及事件的handler來處理內容
eventEmitter.on('Test event', function(){
    console.log('Test event has been triggered')
});


// 觸發事件
eventEmitter.emit('Test event');