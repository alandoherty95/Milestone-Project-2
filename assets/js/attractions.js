let attractionsYouMayLike = [
    {"title": "King John's Castle", 
     "img": "https://raw.githubusercontent.com/alandoherty95/Milestone-Project-2/master/assets/images/king-johns-castle-home.jpg", 
     "description": "King John's Castle is a 13th-century castle located on Kings Island in Limerick, next to the River Shannon. Visitors can try on historic costumes - 18th century dresses or chainmail tunics. The sights, scenes and sounds of King John’s Castle and its environs all combine to recreate the atmosphere of the era.", 
     "service": "Good for kids", 
     "mapLink": "https://goo.gl/maps/izB18TvPC59JFPJb8",
     "externalLink": "https://www.kingjohnscastle.com/"},
  
    {"title": "Saint Mary's Cathedral", 
    "img": "https://raw.githubusercontent.com/alandoherty95/Milestone-Project-2/master/assets/images/stables.jpeg", 
    "description": "Saint Mary’s Cathedral was founded in 1168 AD and stands majestically over the City of Limerick on the banks of the River Shannon. It is one of the most important medieval buildings to survive intact in Ireland, which is still performing its original function. It is the oldest building in Limerick still in continuous daily use. Note: Wheelchair-accessible car park & entrance", 
    "service": "Wheelchair-accessible car park & entrance", 
    "mapLink": "https://goo.gl/maps/YL2uWJRtUi6FvnE76",
    "externalLink": "https://www.saintmaryscathedral.ie/"},
    
    {"title": "Treaty Stone", 
    "img": "https://irelandxo.com/sites/default/files/styles/full_width_image__780px_/public/default_images/Screen%20Shot%202019-07-03%20at%2012.09.41%20p.m..png?itok=6VxXjx_L", 
    "description": "The Treaty Stone is a monument with a stone said to be used in the signing of the 1691 Treaty of Limerick, marking the surrender of the city to William of Orange. The pedestal is decorated with an image of the castle, on the opposite side of the River Shannon, signifying that Limerick was a cathedral city. Note: Wheelchair-accessible entrance.", 
    "service": "Good for kids, Wheelchair-accessible entrance", 
    "mapLink": "https://goo.gl/maps/Y6yR7oUVSnPnWRtw7",
    "externalLink": "https://www.discoverireland.ie/limerick/treaty-stone"},
    
    {"title": "Riverside Walk", 
    "img": "https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/images/ariel-limerick.jpg?raw=true", 
    "description": "The Limerick City Riverside Walk is a scenic 3.25km shared walking and cycling trail which runs through the historic Shannon Fields and City Centre. There are many historic bridges, including Thomond Bridge and Sarsfield Bridge, to see on this walk. En route you will see some landmark buildings",
    "service": "Good for kids", 
    "mapLink": "https://goo.gl/maps/T1Go6rXhPZ9gykx56",
    "externalLink": "https://www.hookandladder.ie/sarsfield-street/"},

    {"title": "UL Campus", 
    "img": "https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/images/ul-bridge.jpeg?raw=true", 
    "description": "The University of Limerick campus is truly one of the most beautiful university campuses anywhere in the world. The University of Limerick has the longest footbridge in Ireland and one of the longest footbridges in Europe - it is called the Living Bridge! It consists of seven 50-metre spans linked together by piers which create four platforms of refuge for walkers.", 
    "service": "Good for kids, Wheelchair-accessible car park & entrance", 
    "mapLink": "https://goo.gl/maps/csiPxfTTaozTAdSJ9",
    "externalLink": "https://www.ul.ie/ul-campus"},
    
    {"title": "Castletroy Neighbourhood Park", 
    "img": "https://lh3.ggpht.com/RTfz1vOVrLOq_oOtkPugajh_HWFb5K84dgC-ui_7Xh8UyD5Pd9JSt5nM6duWFmL1qNZ2P1yYgHWsLwQS_FI", 
    "description": "Castletroy Neighbourhood Park is a large outdoor public park. It features an array of natural habitats, including a 4,300 sq. metre lake, wetlands, wildflower grass areas and woodlands. It also features 1.2 km of pedestrian pathways, a fully equipped children’s playground, skateboarding area, circular cycle route and central exhibition area with covering structure.", 
    "service": "Good for kids", 
    "mapLink": "https://goo.gl/maps/nSaXjnCCgPH6AURj9",
    "externalLink": "https://www.ilovelimerick.ie/castletroy-neighbourhood-park/"},
    
    {"title": "People's Park", 
    "img": "https://www.limerick.ie/sites/default/files/styles/hero_image/public/media/images/2017-03/People%27s-Park-Limerick-810x456.jpg?itok=n-ri4UsV", 
    "description": "The People's Park is a large public park located near Pery Square in Limerick. It can be found just west of the railway station and bus terminal. Items of interest in the People's Park include the refurbished drinking fountain, the Limerick City Gallery of Art, children's playground, a band stand and two park shelters.", 
    "service": "Good for kids", 
    "mapLink": "https://goo.gl/maps/LxeUR9GSb3Hb1ugW7",
    "externalLink": "https://limerickslife.com/peoples-park/"},
    
    {"title": "Sarsfield Bridge", 
    "img": "https://film.limerick.ie/sites/default/files/styles/full_screen/public/users/clare/images/locations/Sarsfield%20Bridge_0.jpg?itok=njX51_OH", 
    "description": "Sarsfield Bridge is a five-span limestone road bridge. It was built between 1824-35 connecting Sarsfield Street and Ennis Road. It was once a swivel bridge that could open allowing large vessels to pass into the upper quays. This function is no longer in use although the mechanisms can still be seen under the bridge.",
    "service": "Good for kids", 
    "mapLink": "https://goo.gl/maps/zhRnaqFJMQe99Bfd6",
    "externalLink": "https://www.buildingsofireland.ie/buildings-search/building/21512010/sarsfield-bridge-sarsfield-street-ennis-road-limerick-limerick-city"}
];

// Shuffle my array every 30 seconds
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
    setInterval(insertPopularSpots, 30000);
};

function insertPopularSpots(){
      const youMayLikeThisElement = shuffle(attractionsYouMayLike).slice(0,2).map(item =>{
        // Card 
        // https://getbootstrap.com/docs/4.0/components/card/
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
    });
  
  document.getElementById("attractionsYouMayLike").innerHTML =  youMayLikeThisElement;
}