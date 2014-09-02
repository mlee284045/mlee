var date = new Date();
var month = date.getMonth();
var day = date.getDate();

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var monthName = months[month];

var htmlDates = document.getElementsByClassName('currentDate');
//console.log(htmlDates);
var htmlDate = htmlDates[0];
//console.log(htmlDate);

htmlDate.innerHTML = monthName + " " + day;