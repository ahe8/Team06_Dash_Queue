function getStore() {
    document.getElementById("submit").addEventListener('click', function () {
        var store = document.getElementById("store").value;
        console.log(store);

				//read cities collection from firestore, with query
        db.collection("stores")
            .where("company_name", "==", store)
            .get()
            .then(function (snap) {
                snap.forEach(function(doc) {
                    console.log(doc.data());
                    var name = doc.data().company_name;
                    var address = doc.data().address;
                    var city = doc.data().city;
                    var postalcode = doc.data().postalcode;
                    var province = doc.data().province;
                    var mintime = doc.data().openingtime;
                    var maxtime = doc.data().closingtime;

                    var today = new Date();
                    var dd = today.getDate();
                    var mm = today.getMonth()+1; //January is 0!
                    var yyyy = today.getFullYear();
                    var currenthour = today.getHours()
                    var currentminute = today.getMinutes();
                    var currenttime = currenthour+":"+currentminute;
                    console.log(currenttime)

                    if(dd<10){
                            dd='0'+dd
                        } 
                        if(mm<10){
                            mm='0'+mm
                        } 

                    if(mintime<=currenttime){
                        mintime = currenttime;
                    }

                    today = yyyy+'-'+mm+'-'+dd;
                    
                    $("#details-go-here").append("<h1> " + name + "</h1>");
                    $("#details-go-here").append("<li> Address: " + address + "</li>");
                    $("#details-go-here").append("<li> City: " + city + "</li>");
                    $("#details-go-here").append("<li> Postal Code: " + postalcode + "</li>");
                    $("#details-go-here").append("<li> Province: " + province + "</li><br>");
                    $("#details-go-here").append("<label for='timepicker'>Select a time (date and time):</label>");
                    $("#details-go-here").append("<input type='date' min='" + today + "'><input type='time' min='"+mintime+"' max ='"+maxtime+"'><br><br>");
                    $("#details-go-here").append("<a href='/confirmationpage.html'>Next</a>");
                })
            })
    })
}

getStore();
