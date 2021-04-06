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
                    document.getElementById("availablestores").innerHTML = doc.data().location
                    //do something with the data
                })
            })
    })
}
getStore();



function readQuote() {
    db.collection("shopping").doc("popular_stores")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("store-goes-here").innerHTML = snap.data().store;
            })
}
readQuote();
