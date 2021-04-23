// const status = "{%tempstts%}";
// const stts = document.getElementById("indicator");
// if (status== "Sunny") {
//     stts.innerHTML= " <i class='fas fa-sun' style='background:red' ></i>";
// }
//  else if (status== "Clouds") {
//     stts.innerHTML= " <i class='fas fa-cloud-sun'></i>";
// }
// else if (status== "Rainy") {   
//     stts.innerHTML= " <i class='fas fa-cloud-rain'></i>";
// }else{
//     stts.innerHTML= "<i class='fas fa-cloud-moon'></i>";
// }

const currdate = new Date();
const day = currdate.getDay();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const week = weekday[day];


var month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";
 const months = month[currdate.getMonth()] ;
 var dates = currdate.getDate();

 var hrs = currdate.getHours();
 var mins = currdate.getMinutes();
 var session = "AM";
 if (hrs>12) {
     hrs = hrs - 12;
     session="PM";         
 }else{
     session="AM";
 }
 
 dates  = (dates<10)? "0"+dates: dates;
 hrs  = (hrs<10)? "0"+hrs: hrs;
 mins = (mins<10)? "0"+mins: mins;


 export {week,months ,dates,hrs,mins,session};