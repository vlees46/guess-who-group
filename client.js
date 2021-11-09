
// document load, append divs for each person in the people array (it comes from `data.js` file) to the DOM with jQuery 
// each containing an image from each GitHub profile

$(document).ready(readyNow);


function readyNow() {

    // Handler for .load() called.
  let totalPeople = [];

   for ( list of people ) {

    console.log('display cars in the garage');
    // target output by ID
    let totalPeople = $('#test');
    // empty
    totalPeople.empty();
    // loop through garage array
    for ( list  of people  ) {
      // for each car, create a list item, animate and play sound
       totalPeople.append( `<div> ${list.name}</div>`);
       totalPeople.append( `<img src='#pic1'</img>`);
     
   }

} 
}
//console.log('Here are all the available people:', people);