
let count = 0;
let countElement = document.getElementById('count-ele')

function increment(){
    count = count + 1;
    countElement.innerText = count;
    console.log(count)
}

let saveElement = document.getElementById('save-ele');

function save(){
    saveElement.textContent += count + ' - ';
    count = 0;
}

function reset(){
    countElement.innerText = 0;
    console.log("Reset Succesful")
}