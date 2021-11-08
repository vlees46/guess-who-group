

$(document).ready(readyNow);


function readyNow() {

$('#guessPic').append(`<div>${people[0].name}</div>`)
$('#guessPic').append(`<div>${people[1].name}</div>`)
$('#guessPic').append(`<div>${people[2].name}</div>`)

}

console.log('Here are all the available people:', people);
