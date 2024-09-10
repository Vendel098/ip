function Ip(){
    fetch('https://api.ipify.org?format=json')
.then(respone => respone.json())
.then(data =>{
document.getElementById("ip").innerHTML = data.ip;
})
.catch(error=> {
    console.error('Error fetching IP:',error);
});
}

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }


