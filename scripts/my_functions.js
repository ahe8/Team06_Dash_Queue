function getCity() {
    document.getElementById("submit").addEventListener('click', function () {
        var location = document.getElementById("city").value;
        console.log(location);

				//read cities collection from firestore, with query
        db.collection("cities")
            .where("name", "==", location)
            .get()
            .then(function (snap) {
                snap.forEach(function(doc) {
                    console.log(doc.data());
                    //do something with the data
                })
            })
    })
}
getCity();