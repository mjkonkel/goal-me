// setting current day at top of page
var todayDate = moment().format('dddd, MMMM Do');
$('#currentDay').text(todayDate);



var newButton = document.getElementById("new"); 
newButton.addEventListener("click", function() { 
    console.log("Button was clicked!"); 
    // createGoal()
  }); 