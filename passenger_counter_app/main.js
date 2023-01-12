
let count = 0;
let countElement = document.getElementById('count-ele')

function increment(){
    count = count + 1;
    countElement.innerText = count;
    console.log(count)
}