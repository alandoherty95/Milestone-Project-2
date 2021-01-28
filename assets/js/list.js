/*--Below is a list of Sights, Activities and Coffee--*/

let selectionJSON = {
    // LIST OF ATTRACTIONS
    // ATTRACTION 1: King John's Castle
	KJC: {
		Id: "1",
        info: `King John's Castle is a 13th-century castle located on Kings Island in Limerick, next to the River Shannon. The foundation of the city of Limerick, however, is generally dated to 922, when the Viking leader Thormodu Helgason established a permanent base on Kings Island, this is the area where King John's Castle now stands. It is located at the heart of Limerick’s medieval quarter. The site on which the Castle stands has been occupied for over 1000 years.
        `
	},
	// ATTRACTION 2: Saint Mary's Cathedral
	MM: {
		Id: "2",
        info: `Saint Mary’s Cathedral was founded in 1168 AD and stands majestically over the City of Limerick on the banks of the River Shannon. It is one of the most important medieval buildings to survive intact in Ireland, which is still performing its original function. It is the oldest building in Limerick still in continuous daily use. It is an extraordinary building that has been ever-present during invasions, sieges, battles, wars, famines and times of peace.
        `
	},
	// ATTRACTION 3: Treaty Stone
	SS: {
		Id: "3",
		info: `The Treaty Stone is a monument with a stone said to be used in the signing of the 1691 Treaty of Limerick, marking the surrender of the city to William of Orange. The Treaty Stone stands across the River Shannon from King John's Castle. Tradition has it the Treaty of Limerick, that ended the Williamite-Jacobite War, was signed on this limestone block, in Limerick City.
        `
	},
	// ATTRACTION 4: Riverside Walk
	RW: {
		Id: "4",
        info: `The Limerick City Riverside Walk is a scenic 3.25km shared walking and cycling trail which runs through the historic Shannon Fields and City Centre. There are many historic bridges, including Thomond Bridge and Sarsfield Bridge, to see on this walk. En route you will see the landmark buildings of Barrington’s Hospital, St. Mary’s Church, St. Mary’s Cathedral, The Hunt Museum, Limerick City Quays, the Treaty Stone, the Old Courthouse and the Potato Market.
        `
	},
	// ATTRACTION 5: UL Campus
	ULC: {
		Id: "5",
		info: `The University of Limerick campus is truly one of the most beautiful university campuses anywhere in the world. Visitors never fail to be impressed by this peaceful green place with its trees, its fountains and the beautiful river Shannon flowing gracefully through. In spring, UL is a symphony of birdsong, while in autumn, it is a celebration of colour. It is located on the Castletroy side of the city. There are several walking, hiking and biking trails to choose from.
        `
	},
	// ATTRACTION 6: Castletroy Neighbourhood Park 
	CNP: {
		Id: "6",
        info: `Castletroy Neighbourhood Park is a large outdoor public park. It features an array of natural habitats, including a 4,300 sq. metre lake, wetlands, wildflower grass areas and woodlands. It also features 1.2 km of pedestrian pathways, a fully equipped children’s playground, skateboarding area, circular cycle route and central exhibition area with covering structure.
        `
	},
	// ATTRACTION 7: People's Park
	PP: {
		Id: "7",
		info: `The People's Park is a large public park located near Pery Square in Limerick. It can be found just west of the railway station and bus terminal. At the northern edge of the park is the Limerick City Gallery of Art. The park was formally opened in 1877, in memory of Richard Russell, a prominent local businessman. Items of interest in the People's Park include the refurbished drinking fountain, the Limerick City Gallery of Art, children's playground, a band stand and two park shelters.
        `
	},
	// ATTRACTION 8: Sarsfield Bridge
	SB: {
		Id: "8",
		info: `Sarsfield Bridge is a five-span limestone road bridge. It was built between 1824-35 connecting Sarsfield Street and Ennis Road. It was once a swivel bridge that could open allowing large vessels to pass into the upper quays. This function is no longer in use although the mechanisms can still be seen under the bridge. The westward expansion of Limerick and the growth of its commerce made the Shannon and the improvement of the harbour facilities a vital necessity.
        `
	},

	// LIST OF ACTIVITES

	// ACTIVITY 1: Cratloe Woods
	A1: {
		Id: "11",
        info: `Cratloe Woods is a forested area around the village of Cratloe, just outside of Limerick City. Much of the original oak forest has been replaced with coniferous softwoods during the past century; however, small pockets of native oak survive. Cratloe Wood Car Park and Picnic Site is located adjacent to Cratloe village and on the western side Cratloe Forest property which is over 700 Hectares in extent. It overlooks the Estuary of the River Shannon which is the longest river in Ireland and Great Britain. The Galtee Mountains in Co. Tipperary can be seen to the east, the Ballyhoura Mountains in North Cork to the south and Shannon Airport to the west.
        `
    },
    // ACTIVITY 2: Bunratty Castle & Folk Park
	A5: {
		Id: "15",
        info: `Bunratty Castle is a 15th-century castle and living 19th-century village bringing the periods alive at this family-friendly museum. The castle and the adjoining folk park are run by Shannon Heritage as tourist attractions. It is widely recognised as the most complete and authentic castle in Ireland. The site on which Bunratty Castle stands was in origin a Viking trading camp in 970. The present structure is the last of four castles to be built on the site. The present structure was built by the MacNamara family around 1425.
        `
	},
	// ACTIVITY 3: The Hunt Museum
	A2: {
		Id: "12",
        info: `The Hunt Museum preserves and exhibits the original artefacts gathered, over a lifetime, by John and Gertrude Hunt and known as the Hunt Collection. The Museum also displays its own collections, as well as visiting exhibitions of Local, National and International significance with the overall aim of maximising their cultural and educational potential for the people of Limerick and Ireland.
        `
	},
	// ACTIVITY 4: Limerick City Gallery of Art
	A3: {
		Id: "13",
		info: `Limerick City Gallery of Art is the largest contemporary art gallery in the Mid-Western Region, annually exhibiting national and international artists in a diverse exhibition programme. Limerick City Gallery of Art is one of the leading contemporary art galleries in Ireland and home to an important collection of Irish 18th -21st century art in all media. 
        `
	},
	// ACTIVITY 5: Aura Leisure Centre
	A4: {
		Id: "14",
		info: `Aura Leisure Centre is a public leisure facility with a gym, swimming pool, sauna, steam room and sports hall. Aura has a proven track record in working to support the delivery of public leisure facilities nationwide. It is located at Grove Island Shopping Centre on the Corbally side of the city. Aura Grove Island Leisure Centre offers excellent facilities for health and fitness with trained staff always on hand to ensure the optimum fitness experience. There is an extensive selection of exercise equipment ensuring a maximum range of fitness and health facilities for all members.
        `
	},
	// ACTIVITY 6: Nevsail Watersports
	A6: {
		Id: "16",
        info: `The Limerick Watersports & Activity Centre is based in the heart of Limerick City behind the Hunt Museum. A range of water and land based activities are on offer for all ages, abilities and group sizes. Group activities include team building, hen & stag parties as well as school tours and kids birthdays.
        `
	},
	// ACTIVITY 7: Milk Market
	A7: {
		Id: "17",
        info: `The Milk Market is a covered market selling fresh fruits, vegetables, meats, dairy items, crafts & baked goods since 1852. It provides Limerick residents and visitors with access to a wide variety of local, in-season products, typically directly from the producer. From passionate amateur cooks to people on the look-out for variety and value or to those who just love finer foods, this market has it all.
        `
	},
	// ACTIVITY 8: Crescent Shopping Centre
	A8: {
		Id: "18",
        info: `The Crescent Shopping Centre is a major shopping centre serving Limerick. It is located in Dooradoyle, on the southern outskirts of the city. The Crescent Shopping Centre is the biggest and most successful shopping complex outside of Dublin. It is home to over 90 stores, a host of cafes and restaurants, a drop in creche and a 12 screen cinema. There are a number of main anchor tenants, including Tesco, Penneys, Shaws Department Stores, Heatons, GAP Outlet, H&M, Argos and Boots.
        `
	},

	// LIST OF COFFEE SPOTS

	// COFFEE 1: Hook & Ladder Sarsfield Street
	HLSS: {
		Id: "21",
		info: `Hook & Ladder “Living Café” offers customers a unique experience with a variety of store concepts under one roof – a café, cookery school, furniture and home accessories store. Hook & Ladder have 4 cafés in Limerick. This casual and cosy café is very accommodating with a kids' menu and vegetarian options.`
	},
	// COFFEE 2: Habit Coffee+Retail
	CC: {
		Id: "22",
        info: `Habit Coffee+Retail is a coffee company aiming to deliver the best quality coffee by expertly trained baristas. This café has the sleek, minimalist look of a modern coffee shop. Coffee lovers have the option of sitting in or takeaway. `
	},
	// COFFEE 3: Wildberry Café 
	GJCL: {
		Id: "23",
		info: `Wildberry Café is a reasonably-priced coffee shop located at a busy crossroads in the middle of Limerick City. This warm and cosy café provides a takeaway and local delivery service. `
	},
	// COFFEE 4: Story Café
	SC: {
		Id: "24",
		info: `A coffee shop located in the heart of Limerick on the famous Denmark Street known for great service and vibrant atmosphere. An outdoor seating area occupies the front of the building allowing customers to sit outside and enjoy the bustling streets of LImerick.`
	},
	// COFFEE 5: Melt Chocolate & Coffee
	ICC: {
		Id: "25",
		info: `Melt Chocolate & Coffee is a quiet, comfortable coffee shop located on Little Catherine Street. It is facing a busy pedestrian walkway in the middle of Limerick City. There is a seating area inside and outside the shop to enjoy a coffee and treat while watching people move up and down the street. The menu includes sandwiches, paninis and pastries made fresh every morning.
        `
	},
	// COFFEE 6: Caffe Waffe
	ST: {
		Id: "26",
		info: `Caffe Waffe is a family-run café located on Lower Mallow Street. Freshly baked bread, scones, pastries and waffles are available every morning. This small, reasonably-priced café is very popular among school students and young professionals working in the area. It is an ideal location to grab a takeaway coffee and walk along by the river.
        `
	},
	// COFFEE 7: Delish Café
	ACC: {
		Id: "27",
		info: `Delish Café was originally founded in Limerick City April 2004. College friends, Lisa & Evelyn had a passion for making adventurous sandwiches & sensational salads with only the freshest yet wide variety of ingredients. This ambitious café is very accommodating with a kids' menu and vegetarian options. The café promotes a “Meet, Greet & Seat Philosophy” in all shops so that each and every customer is handled with care & valued.`
	},
	// COFFEE 8: Café Rose & Bistro
	CR: {
		Id: "28",
		info: `Café Rosé is a café & bistro in the heart of Limerick city serving tasty, modern cuisine. Café Rosé serves healthy breakfast, lunch, homemade desserts to eat in and to take away. This small, comfortable café is ideal for families with kids and also has the capability to cater for large groups.
        `
	},
};
