//console.log('connected')

//const button = document.getElementById('main-btn')

//console.log(button)

//const button2 = document.querySelector('button')

//console.log(button2)

function sayHi(user) {
    return `Hi ${user}!`;
}

function sayBye(user) {
    return `Bye ${user}!`;
}

function createGreeting(user, call) {
    return call(user);
}

console.log(createGreeting('Buster', sayHi)); 
console.log(createGreeting('Buster', sayBye));
