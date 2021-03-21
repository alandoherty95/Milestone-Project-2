var map;
var InfoObj = [];
var centerCords = {
    lat: 52.6647,
    lng: -8.62306 
};

var icons = {
    attractions: {
        icon: 'https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/icons/green-dot.png?raw=true'
    },
    activities: {
        icon: 'https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/icons/yellow-dot.png?raw=true'
    },
    coffee: {
        icon: 'https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/icons/red-dot.png?raw=true'
    }
};

var markersOnMap = [
    {
        placeName: "King John's Castle",
        placeDescription: "King John's Castle is a 13th-century castle located on Kings Island in Limerick, next to the River Shannon. The foundation of the city of Limerick, however, is generally dated to 922, when the Viking leader Thormodu Helgason established a permanent base on Kings Island, this is the area where King John's Castle now stands.",
        LatLng: [{
            lat: 52.66971206665039, 
            lng: -8.625608444213867
        }],
        type: 'attractions'
    },
    {
        placeName: "Saint Mary's Cathedral",
        placeDescription: "Saint Mary’s Cathedral was founded in 1168 AD and stands majestically over the City of Limerick on the banks of the River Shannon. It is one of the most important medieval buildings to survive intact in Ireland, which is still performing its original function. It is the oldest building in Limerick still in continuous daily use.",
        LatLng: [{
            lat: 52.6681899,
            lng: -8.6235454
        }],
        type: 'attractions'
    },
    {
        placeName: "Treaty Stone",
        placeDescription: "The Treaty Stone is a monument with a stone said to be used in the signing of the 1691 Treaty of Limerick, marking the surrender of the city to William of Orange. The Treaty Stone stands across the River Shannon from King John's Castle.",
        LatLng: [{
            lat: 52.6698134,
            lng: -8.6281917
        }],
        type: 'attractions'
    }
];

window.onload = function () {
    initMap();
};

function addMarkerInfo() {
    for( var i = 0; i < markersOnMap.length; i++ ) {
        var contentString = '<h3>' + markersOnMap[i].placeName + '</h3>' + '<p>' + markersOnMap[i].placeDescription + '</p>';

        const marker = new google.maps.Marker({
            position: markersOnMap[i].LatLng[0],
            icon: icons[markersOnMap[i].type].icon,
            map: map
        });

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        marker.addListener('click', function() {
            closeOtherInfo();
            infowindow.open(marker.get('map'), marker);
            InfoObj[0] = infowindow;
        });
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'),{
        zoom: 15,
        center: centerCords
    });
    addMarkerInfo();
}