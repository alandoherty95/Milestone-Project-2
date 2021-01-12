function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {
            lat: 52.6647, 
            lng: -8.62306
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 52.668497326, lng: -8.621997512 },
        { lat: 52.663686, lng: -8.622573 },
        { lat: 52.669757, lng: -8.628261 },
        { lat: 52.665928, lng: -8.631288 },
        { lat: 52.668813, lng: -8.574657 },
        { lat: 52.662559, lng: -8.540036 },
        { lat: 52.659225, lng: -8.628228 },
        { lat: 52.665467, lng: -8.630342 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}