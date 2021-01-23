//console.log('connected')

const firstObject = {};

const user = {
    username: 'j. cole',
    password: 'dreamville',
    lovesJavascript: true,
    favoriteNumber: 13,
}

// DOT NOTATION
// Get values out of an object
//console.log(user.username)

// BRACKET NOTATION
//WRONG
//const password = 'dreamville';
//console.log(user[password]);
//RIGHT
//console.log(user['username']);

//favorite number
//BRACKET
//console.log(user['favoriteNumber'])
//DOT
//console.log(user.favoriteNumber)

//const newUser = {
//    isNew: true,
//}

//newUser.username = 'drake'; //dot
//newUser['password'] = 'mahbed'; //bracket
//console.log(newUser)

const newObject = {
    username: 'Teresa',
    sayHello: function () {
        console.log(`${this.username} says Hello!`);
    }
}

//newObject.username = 'Aja'
//newObject.sayHello();

//ITERATE OVER AN OBJECT
const userTwo = {
    username: 'Trinity',
    password: 'boopbop',
    lovesJavascript: true,
    favoriteNumber: 12,
}

for (let key in userTwo) {
    console.log(userTwo[key]);
}
