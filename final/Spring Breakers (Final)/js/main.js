// Need a global variable:
var names = [];
var last=[];
var inst=[];


// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
  'use strict';

  // Get the task:
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var instrument = document.getElementById('instrument');

  // Reference to where the output goes:
  var output = document.getElementById('output');

  // For the output:
  var message = '';


  if (firstName.value && lastName.value && instrument.value) {

    // Add the item to the array:
    names.push(firstName.value);
    last.push(lastName.value);
    inst.push(instrument.value);


    // Update the page:
    message = '<h1>  Tips Added </h1>';
    for (var i=0, count=names.length;i<count;i++){
      for(var i=0, count=last.length;i<count;i++){
        for(var i=0, count=inst.length;i<count;i++){
          message+='<h2> Name:</h2>'+ names[i]+'  ';
          message+=last[i]+'    ';
          message+='<h2> Tips Added:</h2>'+inst[i]+'</br>  ';
          message+='<h2> Date Added:</h2>'+ new Date()+'</br>';

        }
      }
    }

    output.innerHTML=message;

  } // End of task.value IF.



  // Return false to prevent submission:
  return false;

} // End of addTask() function.

// Initial setup:
function init() {
  'use strict';
  document.getElementById('theForm').onsubmit = addTask;
} // End of init() function.
window.onload = init;
