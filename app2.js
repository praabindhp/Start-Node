function sayHello(name){
    console.log('Hello Message : ')
    console.log('Howdy, ' + name + ' !'); // Global
}

sayHello('Praabindh')

// setTimeout()
// clearTimeout();

// setInterval()
// clearInterval()

// var message = 'Hello';
// console.log(global.message);

var sayBye = function(name){
    console.log('Bye Message : ')
    console.log('See You, ' + name + ' !');
}

sayBye('Praabindh');