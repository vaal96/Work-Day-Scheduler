//add current day to header
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today); 
//when loading website
//we see grey if that block is BEFORE current time
// - check time
// - everything before current time becomes grey css
//      - add class past to the right row
//      - add class present to the right row
//      - add class future to the right row
//            

// if time = future, then add future class (which already makes it green by the given css)
var timeArray = [ "9", "10", "11","12","13","14", "15", "16", "17"]

// var timeLength = timeArray.length;
// var currentHour = "11";
// var currentHour = moment().hours();
// console.log(currentHour);
// if statement 
for (i = 0; i < timeArray.length; i++){
  var currentHour = moment().hours();
    if (currentHour < timeArray[i]){
        $('.time-block').addClass('past');  // SEARCH javascript FOR RIGHT SYNTAX
       // UPDATE CLASSES - add a class name that says "present" or "future" or "past"
    }else if (currentHour === timeArray[i]){
      $('.time-block').addClass('present');
    } else{
      $('.time-block').addClass('future');
    }
}


// $(.future).css("background-color","pink");
// $('.time-block').addClass('future');
// $('.time-block').addClass('present');
// $('.time-block').addClass('past');
// $('#hour-9').addClass('future');
// $('#hour-10').addClass('future');
// $('#hour-11').addClass('future');
// $('#hour-12').addClass('future');
// $('#hour-13').addClass('future');
// $('#hour-14').addClass('future');
// $('#hour-15').addClass('future');
// $('#hour-16').addClass('future');
// $('#hour-17').addClass('future');

//class for every hour 
 // var hour9 = localStorage.getItem("hour-9");
// if (hour9) {
//   $("#hour-9").val(hour9);
//   console.log()
// }
// var hour10 = localStorage.getItem("hour-10");
// if (hour10) {
//   $("#hour-10").val(hour10);
// }
// var hour11 = localStorage.getItem("hour-11");
// if (hour11) {
//   $("#hour-11").val(hour11);
// }
// var hour12 = localStorage.getItem("hour-12");
// if (hour12) {
//   $("#hour-12").val(hour12);
// }
// var hour13 = localStorage.getItem("hour-13");
// if (hour13) {
//   $("#hour-13").val(hour13);
// }
// var hour14 = localStorage.getItem("hour-13");
// if (hour14) {
//   $("#hour-14").val(hour14);
// }
// var hour15 = localStorage.getItem("hour-15");
// if (hour15) {
//   $("#hour-15").val(hour15);
// }
// var hour16 = localStorage.getItem("hour-16");
// if (hour16) {
//   $("#hour-16").val(hour16);
// }
// var hour17 = localStorage.getItem("hour-17");
// if (hour17) {
//   $("#hour-17").val(hour17);
// }
// $(".saveBtn").on("click", function () {
//     var input = $(this).parent().prev().children();
//     var note = input.val();
//     var id = input.attr("id");
//     localStorage.setItem(id, note);
//   });
 // $("saveBtn").on("click", function(){

$(".saveBtn").on("click", function(){
  var txtDescription = document.getElementById('description');
  localStorage.setItem('description', 'txtDescription')
  txtDescription.value = localStorage.getItem('description');
 
  txtDescription.addEventListener('input', function(){
    localStorage.setItem('description', txtDescription.value);
    delivery.show();
  }) 
});
// });

// $("#getValBtnID").click(function () { 

//   var inputString = $("#userInputID").val(); 

//   alert(inputString); 

// }); 

// $(document).on('change', '.js-delivery', function(e){
//   delivery.show();
// $('.delivery-type').html($(this).text());    
// });