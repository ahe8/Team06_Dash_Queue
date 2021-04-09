function getStore() {
    document.getElementById("submit").addEventListener('click', function () {
        var location = document.getElementById("store").value;
        console.log(location);

        //read grocery store collection from firestore, with query
        db.collection("Grocery Stores")
            .where("name", "==", location)
            .get()
            .then(function (snap) {
                snap.forEach(function (doc) {
                    console.log(doc.data());
                    var name = doc.data().name;
                    var location = doc.data().location;
                    var time = doc.data().time;
                    $("#details-go-here").append("<h1> " + name + "</h1>");
                    $("#details-go-here").append("<li> Location: " + location + "</li>");
                    $("#details-go-here").append("Available Appointments: <a href= confrimationpage.html>" + time + "</a>");
                })
            })
    })
}
getStore();
