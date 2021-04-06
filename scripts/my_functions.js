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
                    $("#details-go-here").append("<h1> " + name + "</h1>");
                    $("#details-go-here").append("<h1> " + location + "</h1>");
                })
            })
    })
}
getStore();




// db.collection("Grocery Stores")
//     .doc(id)
//     .get()
//     .then(function (doc) {   // display details!
//         var name = doc.data().fields.name;
//         var geo_area = doc.data().fields.geo_local_area;
//         var coord = doc.data().fields.geom.coordinates;
//         var url = doc.data().fields.url;
//         $("#details-go-here").append("<h1> " + name + "</h1>");
//         $("#details-go-here").append("<h1> " + geo_area + "</h1>");
//         $("#details-go-here").append("<h1> " + coord + "</h1>");
//         $("#details-go-here").append("<a href='" + url + "' > " + url + ">");
//         var likeid = "like" + id;
//         $("#details-go-here").append("<h1 id='" + likeid + "'> CLICK HERE TO LIKE </h1>");
//         addLikeListener(id, likeid);
//         showLikes(likeid);
//     })
// }
// getDetails();






// function readQuote() {
//     db.collection("shopping").doc("popular_stores")
//         .onSnapshot(
//             function (snap) {
//                 console.log(snap.data());
//                 document.getElementById("store-goes-here").innerHTML = snap.data().store;
//             })
// }
// readQuote();
