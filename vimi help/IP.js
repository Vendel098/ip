function Ip(){
    fetch('https://api.ipify.org?format=json')
        .then(respone => respone.json())
        
        .then(data =>{
            document.getElementById("ip").innerHTML = data.ip;
            console.log("ip cím =", data.ip);

            getLocation(data.ip);
        })

        .catch(error=> {
            console.error('Error fetching IP:',error);
        });
}

function getLocation(ip) {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch("https://api.ip2location.io/?key=0202E68B601FFD8B68CBB187DD00C1A3&ip=1.2.3.4&format=json", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}

function draw() {
    // Where you want to render the map.
    var element = document.getElementById('osm-map');

    // Height has to be set. You can do this in CSS too.
    element.style = 'height:300px;';

    // Create Leaflet map on map element.
    var map = L.map(element);

    // Add OSM tile layer to the Leaflet map.
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Target's GPS coordinates.
    var target = L.latLng('47.50737', '19.04611');

    // Set map's center to target with zoom 14.
    map.setView(target, 14);

    // Place a marker on the same location.
    L.marker(target).addTo(map);
}


