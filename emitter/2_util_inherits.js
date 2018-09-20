var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
}

util.inherits(Person, events.EventEmitter);


var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var people = [james,mary,ryu];


//set an event
people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: '+ mssg);
    });
});


// .emit : trigger an event
james.emit('speak', 'hey dudes');

