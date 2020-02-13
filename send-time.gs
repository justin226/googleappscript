function sendToday() {
  var dateObject = new Date;
  var day = dateObject.getDay();
  var date = dateObject.getDate();
  var year = dateObject.getYear();
  var month = dateObject.getMonth();
  var hour = dateObject.getHours();
  var minutes = dateObject.getMinutes();
  if(day == 1){day = "Monday";}
  if(day == 2){day = "Tuesday";}
  if(day == 3){day = "Wednesday";}
  if(day == 4){day = "Thursday";}
  if(day == 5){day = "Friday";}
  if(day == 6){day = "Saturday";}
  if(day == 0){day = "Sunday";}
  if(month == 0){month = "January";}
  if(month == 1){month = "February";}
  if(month == 2){month = "March";}
  if(month == 3){month = "April";}
  if(month == 4){month = "May";}
  if(month == 5){month = "June";}
  if(month == 6){month = "July";}
  if(month == 7){month = "August";}
  if(month == 8){month = "September";}
  if(month == 9){month = "October";}
  if(month == 10){month = "November";}
  if(month == 11){month = "December";}
  if(minutes == 0 | minutes == 1 || minutes == 2 || minutes == 3 || minutes == 4 || minutes == 5 || minutes == 6 || minutes == 7 || minutes == 8 || minutes == 9){minutes = "0" + minutes}
  var email = Session.getActiveUser().getEmail();

  // Get the name of the document to use as an email subject line.
  var subject = "Today";

  // Append a new string to the "url" variable to use as an email body.
  var body = 'Today is: ' + date + " " + month + " " + year + " and the Time is " + hour + ":" + minutes + "\nThis email was sent by a script. This was not sent by Justin";

  // Send yourself an email with a link to the document.
  
  GmailApp.sendEmail(email, subject, body);
  
}
