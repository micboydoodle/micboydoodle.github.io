	var todaysdate = new Date();
    var daysofweek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var dayofWeek = daysofweek [todaysdate.getDay()];
    var month = new Array("Januray", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var currentMonth = month [todaysdate.getMonth()];
    var dayofMonth = todaysdate.getDate ();
    var year = todaysdate.getFullYear ();
    
    var today = dayofWeek + ", " + dayofMonth + " " + currentMonth + " " + year;
    
    document.getElementById("currentdate").innerHTML = today;
