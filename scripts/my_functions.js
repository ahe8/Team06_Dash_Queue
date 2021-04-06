function getStore() {
    document.getElementById("submit").addEventListener('click', function () {
        var location = document.getElementById("store").value;
        console.log(location);

				//read cities collection from firestore, with query
        db.collection("Grocery Stores")
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
getStore();