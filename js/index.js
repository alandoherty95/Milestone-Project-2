let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 52.6647, lng: -8.62306 },
    zoom: 14,
  });
}