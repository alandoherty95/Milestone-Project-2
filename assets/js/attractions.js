let attractionsYouMayLike = [
    {"title": "King John's Castle", 
     "img": "/assets/images/king-johns-castle.jpg", 
     "description": "King John's Castle is a 13th-century castle located on Kings Island in Limerick, next to the River Shannon.", 
     "amenities": "Good for kids", 
     "mapLink": "https://goo.gl/maps/izB18TvPC59JFPJb8"},
  
    {"title": "Saint Mary's Cathedral", 
    "img": "/assets/images/stables.jpeg", 
    "description": "Saint Mary’s Cathedral was founded in 1168 AD and stands majestically over the City of Limerick on the banks of the River Shannon. ", 
    "amenities": "Wheelchair-accessible car park & entrance", 
    "mapLink": "https://goo.gl/maps/YL2uWJRtUi6FvnE76"},
    
    {"title": "Treaty Stone", 
    "img": "https://irelandxo.com/sites/default/files/styles/full_width_image__780px_/public/default_images/Screen%20Shot%202019-07-03%20at%2012.09.41%20p.m..png?itok=6VxXjx_L", 
    "description": "The Treaty Stone is a monument with a stone said to be used in the signing of the 1691 Treaty of Limerick, marking the surrender of the city to William of Orange.", 
    "amenities": "Good for kids, Wheelchair-accessible entrance", 
    "mapLink": "https://goo.gl/maps/Y6yR7oUVSnPnWRtw7"},
    
    {"title": "Riverside Walk", 
    "img": "/assets/images/ariel-limerick.jpg", 
    "description": "The Limerick City Riverside Walk is a scenic 3.25km shared walking and cycling trail which runs through the historic Shannon Fields and City Centre.",
    "amenities": "Good for kids", 
    "mapLink": "https://goo.gl/maps/T1Go6rXhPZ9gykx56"},

    {"title": "UL Campus", 
    "img": "/assets/images/ul-bridge.jpeg", 
    "description": "The University of Limerick campus is truly one of the most beautiful university campuses anywhere in the world.", 
    "amenities": "Good for kids, Wheelchair-accessible car park & entrance", 
    "mapLink": "https://goo.gl/maps/csiPxfTTaozTAdSJ9"},
    
    {"title": "Castletroy Neighbourhood Park", 
    "img": "https://lh3.ggpht.com/RTfz1vOVrLOq_oOtkPugajh_HWFb5K84dgC-ui_7Xh8UyD5Pd9JSt5nM6duWFmL1qNZ2P1yYgHWsLwQS_FI", 
    "description": "Castletroy Neighbourhood Park is a large outdoor public park. It features an array of natural habitats, including a 4,300 sq. metre lake, wetlands, wildflower grass areas and woodlands.", 
    "amenities": "Good for kids", 
    "mapLink": "https://goo.gl/maps/nSaXjnCCgPH6AURj9"},
    
    {"title": "People's Park", 
    "img": "https://www.limerick.ie/sites/default/files/styles/hero_image/public/media/images/2017-03/People%27s-Park-Limerick-810x456.jpg?itok=n-ri4UsV", 
    "description": "The People's Park is a large public park located near Pery Square in Limerick. It can be found just west of the railway station and bus terminal.", 
    "amenities": "Good for kids", 
    "mapLink": "https://goo.gl/maps/LxeUR9GSb3Hb1ugW7"},
    
    {"title": "Sarsfield Bridge", 
    "img": "https://film.limerick.ie/sites/default/files/styles/full_screen/public/users/clare/images/locations/Sarsfield%20Bridge_0.jpg?itok=njX51_OH", 
    "description": "Sarsfield Bridge is a five-span limestone road bridge. It was built between 1824-35 connecting Sarsfield Street and Ennis Road.",
    "amenities": "Good for kids", 
    "mapLink": "https://goo.gl/maps/zhRnaqFJMQe99Bfd6"}
];

// Shuffle my array every 8 seconds
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

window.onload = function() {
    insertPopularSpots();
    setInterval(insertPopularSpots, 8000);
};

function insertPopularSpots(){
      const youMayLikeThisElement = shuffle(attractionsYouMayLike).slice(0,3).map(item =>{
        // Card 
        // https://getbootstrap.com/docs/4.0/components/card/
        return `<div id=${item.title}>
                <div class="card">
                    <img class="card-img-top" src="${item.img}" alt="Card image cap">
                    <div class="card-body">
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-text">${item.description}</p>
                        <p class="card-service">${item.amenities}</p>
                        <a href="${item.mapLink}" target="_blank" class="btn btn-primary">View on Maps</a>
                    </div>
                </div>
        </div>`;
    });
  
  document.getElementById("attractionsYouMayLike").innerHTML =  youMayLikeThisElement;
}