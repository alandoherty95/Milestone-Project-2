// List of Recommended Activities
let activitiesYouMayLike = [
    {"title": "Cratloe Woods", 
     "img": "https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/images/woods.jpg?raw=true", 
     "description": "Cratloe Woods is a forested area around the village of Cratloe, just outside of Limerick City. It overlooks the Estuary of the River Shannon which is the longest river in Ireland and Great Britain. The Galtee Mountains in Co. Tipperary can be seen to the east, the Ballyhoura Mountains in North Cork to the south and Shannon Airport to the west.", 
     "service": "Good for kids", 
     "mapLink": "https://goo.gl/maps/QYeh7qyneNj9m1MAA",
     "externalLink": "https://www.coillte.ie/site/cratloe-wood/"},
  
    {"title": "Bunratty Castle & Folk Park", 
    "img": "https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/images/bunratty.jpeg?raw=true", 
    "description": "Bunratty Castle is a 15th-century castle and living 19th-century village bringing the periods alive at this family-friendly museum. The castle and the adjoining folk park are run by Shannon Heritage as tourist attractions. It is widely recognised as the most complete and authentic castle in Ireland.", 
    "service": "Good for kids, Wheelchair-accessible car park & entrance.", 
    "mapLink": "https://goo.gl/maps/wkexFeM1WtfzfAxp8",
    "externalLink": "https://www.bunrattycastle.ie/"},
    
    {"title": "The Hunt Museum", 
    "img": "https://cdn.pixabay.com/photo/2017/01/21/22/40/castle-1998435__340.jpg", 
    "description": "The Hunt Museum preserves and exhibits the original artefacts gathered, over a lifetime, by John and Gertrude Hunt and known as the Hunt Collection. The Museum also displays its own collections, as well as visiting exhibitions of Local, National and International significance with the overall aim of maximising their cultural and educational potential.", 
    "service": "Wheelchair-accessible entrance, lift & toilet.", 
    "mapLink": "https://g.page/huntmuseum?share",
    "externalLink": "https://www.huntmuseum.com/"},
    
    {"title": "Limerick City Gallery of Art", 
    "img": "https://cdn.pixabay.com/photo/2019/05/31/13/35/art-gallery-4242219__340.jpg", 
    "description": "Limerick City Gallery of Art is the largest contemporary art gallery in the Mid-Western Region, annually exhibiting national and international artists in a diverse exhibition programme. Limerick City Gallery of Art is one of the leading contemporary art galleries in Ireland and home to an important collection of Irish 18th -21st century art in all media.",
    "service": "Wheelchair-accessible car park, entrance, lift & toilet", 
    "mapLink": "https://goo.gl/maps/2MbVvUsuyvT9HDyu5",
    "externalLink": "http://gallery.limerick.ie/"},

    {"title": "Aura Leisure Centre", 
    "img": "https://pbs.twimg.com/profile_images/1212664840503922688/nBqhuXSN.jpg", 
    "description": "Aura Leisure Centre is a public leisure facility with a gym, swimming pool, sauna, steam room and sports hall. It is located at Grove Island Shopping Centre on the Corbally side of the city.", 
    "service": "Good for kids", 
    "mapLink": "https://g.page/AuraLeisureGroveIsland?share",
    "externalLink": "https://www.auraleisure.ie/location/grove-island/"},
    
    {"title": "Nevsail Watersports", 
    "img": "https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/images/nevsail.png?raw=true", 
    "description": "The Limerick Watersports & Activity Centre is based in the heart of Limerick City behind the Hunt Museum. Nevsail Watersports promote the benefits of getting active, outdoors and experiencing extreme sports and adventure activities to positively develop personalities and improve people's overall health and happiness.", 
    "service": "Good for kids", 
    "mapLink": "https://goo.gl/maps/eARkjxtBCF3LpcM78",
    "externalLink": "https://www.limerickadventures.com/"},
    
    {"title": "Milk Market", 
    "img": "https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/images/milk-market.jpeg?raw=true", 
    "description": "The Milk Market is a covered market selling fresh fruits, vegetables, meats, dairy items, crafts & baked goods since 1852. It provides Limerick residents and visitors with access to a wide variety of local, in-season products, typically directly from the producer. From passionate amateur cooks to people on the look-out for variety and value.", 
    "service": "Wheelchair-accessible entrance, lift & toilet.", 
    "mapLink": "https://goo.gl/maps/PDzWvnRE6pJNjeoJ8",
    "externalLink": "https://www.milkmarketlimerick.ie/"},
    
    {"title": "Crescent Shopping Centre", 
    "img": "https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/images/crescent.jpeg?raw=true", 
    "description": "The Crescent Shopping Centre is a major shopping centre serving Limerick. It is located in Dooradoyle, on the southern outskirts of the city. It is home to over 90 stores, a host of cafes and restaurants, a drop in creche and a 12 screen cinema.",
    "service": "Wheelchair-accessible car park, entrance, lift & toilet", 
    "mapLink": "https://goo.gl/maps/G9HtaovKQNoPWUi96",
    "externalLink": "https://crescentshoppingcentre.ie/"}
];

// Shuffle my array every 30 seconds
// Inspiration from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remains elements to shuffle...
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
    setInterval(insertPopularSpots, 30000);
};

function insertPopularSpots(){
      const youMayLikeThisElement = shuffle(activitiesYouMayLike).slice(0,2).map(item =>{
        // Card Structure
        // Inspiration from https://getbootstrap.com/docs/4.0/components/card/
        return `<div id=${item.title}>
                <div class="single-card">
                    <img class="card-img-top" src="${item.img}" alt="Card image cap">
                    <div class="card-body">
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-text">${item.description}</p>
                        <p class="card-service">${item.service}</p>
                        <a href="${item.mapLink}" target="_blank" class="btn btn-info">View on Maps</a>
                        <a href="${item.externalLink}" target="_blank" class="btn btn-info">View External Website</a>
                    </div>
                </div>
        </div>`;
    }).join("")
  
  document.getElementById("activitiesYouMayLike").innerHTML = youMayLikeThisElement;
}