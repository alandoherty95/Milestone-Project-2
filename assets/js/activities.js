let activitiesYouMayLike = [
    {"title": "Cratloe Woods", 
     "img": "/assets/images/mountain.jpg", 
     "description": "Cratloe Woods is a forested area around the village of Cratloe, just outside of Limerick City.", 
     "amenities": "Good for kids", 
     "mapLink": "https://goo.gl/maps/QYeh7qyneNj9m1MAA"},
  
    {"title": "Bunratty Castle & Folk Park", 
    "img": "/assets/images/bunratty.jpeg", 
    "description": "Bunratty Castle is a 15th-century castle and living 19th-century village bringing the periods alive at this family-friendly museum.", 
    "amenities": "Good for kids, Wheelchair-accessible car park & entrance.", 
    "mapLink": "https://goo.gl/maps/wkexFeM1WtfzfAxp8"},
    
    {"title": "The Hunt Museum", 
    "img": "https://cdn.pixabay.com/photo/2017/01/21/22/40/castle-1998435__340.jpg", 
    "description": "The Hunt Museum preserves and exhibits the original artefacts gathered, over a lifetime, by John and Gertrude Hunt and known as the Hunt Collection.", 
    "amenities": "Wheelchair-accessible entrance, lift & toilet.", 
    "mapLink": "https://g.page/huntmuseum?share"},
    
    {"title": "Limerick City Gallery of Art", 
    "img": "https://cdn.pixabay.com/photo/2019/05/31/13/35/art-gallery-4242219__340.jpg", 
    "description": "Limerick City Gallery of Art is the largest contemporary art gallery in the Mid-Western Region, annually exhibiting national and international artists in a diverse exhibition programme.",
    "amenities": "Wheelchair-accessible car park, entrance, lift & toilet", 
    "mapLink": "https://goo.gl/maps/2MbVvUsuyvT9HDyu5"},

    {"title": "Aura Leisure Centre", 
    "img": "/assets/images/aura.png", 
    "description": "Aura Leisure Centre is a public leisure facility with a gym, swimming pool, sauna, steam room and sports hall.", 
    "amenities": "Good for kids", 
    "mapLink": "https://g.page/AuraLeisureGroveIsland?share"},
    
    {"title": "Nevsail Watersports", 
    "img": "/assets/images/nevsail.png", 
    "description": "The Limerick Watersports & Activity Centre is based in the heart of Limerick City behind the Hunt Museum.", 
    "amenities": "Good for kids", 
    "mapLink": "https://goo.gl/maps/eARkjxtBCF3LpcM78"},
    
    {"title": "Milk Market", 
    "img": "/assets/images/milk-market.jpeg", 
    "description": "The Milk Market is a covered market selling fresh fruits, vegetables, meats, dairy items, crafts & baked goods since 1852.", 
    "amenities": "Wheelchair-accessible entrance, lift & toilet.", 
    "mapLink": "https://goo.gl/maps/PDzWvnRE6pJNjeoJ8"},
    
    {"title": "Crescent Shopping Centre", 
    "img": "/assets/images/crescent.jpeg", 
    "description": "The Crescent Shopping Centre is a major shopping centre serving Limerick. It is located in Dooradoyle, on the southern outskirts of the city.",
    "amenities": "Wheelchair-accessible car park, entrance, lift & toilet", 
    "mapLink": "https://goo.gl/maps/G9HtaovKQNoPWUi96"}
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
      const youMayLikeThisElement = shuffle(activitiesYouMayLike).slice(0,3).map(item =>{
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
  
  document.getElementById("activitiesYouMayLike").innerHTML =  youMayLikeThisElement;
}