var databaseListJobs = database.ref( 'people' );

// use jQuery to select the <form>
var form = jQuery( 'form' );

// we'll use jQuery to grab the data from the <form> and store it inside dataUnit
var dataUnitJob = {}; 

// when you submit the form...
form.submit( function( event ) 
{
  var today = new Date();
  /*
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!

  var yyyy = today.getFullYear();
  if(dd<10){
    dd='0'+dd
  } 
  if(mm<10){
    mm='0'+mm
  } 
  today = dd+'/'+mm+'/'+yyyy;
  */
  document.getElementById("date").value = today;
  
  // stop this from reloading
  event.preventDefault();

  // put the form data inside dataUnit 
  dataUnitJob = form.serializeJSON( {parseBooleans: true, parseNumbers: true, checkboxUncheckedValue: "false"} );

  // log what's inside dataUnit
  console.log( dataUnitJob );

  // send dataUnit to databaseListJobs
  databaseListJobs.push( dataUnitJob )
  .then(function() 
  {
    alert('Success!');
    // form[0].reset(); // un-comment this line if you want the form to be cleared from previous values
  })
  .catch(function(error) 
  {
    console.error( error );
    alert('Something went wrong, try again!');
  });
  
});