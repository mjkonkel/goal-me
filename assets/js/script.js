// setting current day at top of page
var todayDate = moment().format('dddd, MMMM Do');
$('#currentDay').text(todayDate);



var newButton = document.getElementById("new");
newButton.addEventListener("click", function () {
  console.log("Button was clicked!");
});

var goals = document.querySelectorAll(".goals");

var showGoal = document.getElementById("show");
showGoal.addEventListener("click", function () {

  console.log("show was clicked!");

})

goals.forEach(function (goal) {
  goal.addEventListener("click", function () {
    if (goal.style.display === "none") {
      goal.style.display = "block";
    } else {
      goal.style.display = "none";
    }
    console.log("You clicked a goal");
  });
});