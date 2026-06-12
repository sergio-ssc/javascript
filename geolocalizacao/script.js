let h2 = document.querySelector('h2');
var map;

function success(position){
    console.log(position.coords.latitude, position.coords.longitude);
    h2.textContent = `Sua localização é: ${position.coords.latitude}, ${position.coords.longitude}`;

    if(map === undefined){
        map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);
    } else {
        map.remove();
        map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);
    }

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([position.coords.latitude, position.coords.longitude])
.addTo(map)
.bindPopup("A pretty CSS popup.<br> Easily customizable.")
.openPopup();
}


function error(err){
    console.log(err);
}

var watchID = navigator.geolocation.watchPosition(success, error);

//navigator.geolocation.clearWatch(watchID);


