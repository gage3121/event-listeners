//console.log('connected')

const button = document.getElementById('main-btn')
const container = document.getElementById('container');
//button.addEventListener('click', (event) => {
//    console.log(`You Clicked ${event.target.id}`);
//    console.log(event);
//})

const whatIsTheId = (event) => {
    console.log(`You clicked ${event.target.id}`);

    if (event.target.id === 'main-btn') {
        container.innerHTML = 'You clicked the main button';
    } else {
        container.innerHTML = "You clicked the other button";
    }
}

button.addEventListener('click', whatIsTheId)

// TARGET OTHER BUTTON

const button2 = document.getElementById('other-btn')

button2.addEventListener('click', whatIsTheId)
