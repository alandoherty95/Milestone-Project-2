# **TESTING.MD**

This project was tested throughout the stages of development and deployment. The website was tested using GitPod preview in browser, Chrome DevTools and manual testing. It was also deployed on GitHub Pages early on in the development to allow live testing after each commit was pushed.


### Users:
- As a local of Limerick City, I want to quickly identify places I'd like to visit so that I can spend more time exploring and less time deciding where to go.
- As a visitor to Limerick, I want to find information about the many destinations so that I can organise my time efficiently in order to visit multiple destinations on the same day.
- As a relatively inactive person, I want to use a website to learn more about the attractions in Limerick to encourage me to become more active by getting outdoors more often.
### Owner:
- As the owner of this website I would like to provide images, descriptions and external links for each location selected encouraging people to be more active.
- As the owner, I want users to be able to effortlessly browse through the many selections and to choose their favourites.
- As the owner, I want to promote certain destinations more favourably than others for the duration of a month. These selections will be updated every month to showcase new ones.
- As the owner, I want to display all selected locations on a single map to allow users to plan their trips more efficiently.
- 
### User Stories (Extra Detail)

**Persona One:** 
I am a user who lives in Limerick but there is a large part of the city I have not yet explored or visited. I feel there are so many sites to see and things to do, it can be difficult to decide on one. I am unsure which places are worth visiting in my free time. I usually spent more time deciding where to go and less time outside. 
I like picking my favourite places and then formulating plans with my friends. 

There are so many places worth visiting in Limerick City so it is helpful to narrow down the best places in my area. I really like the 'Monthly Recommendations' provided on the main homepage and I am looking forward to seeing more attractions that I have not had the chance to see even though I have always lived in Limerick. This website allows me to focus my time and attention on the best locations to visit.


**Persona Two:** 
I am a user who lives outside of Limerick but would love to learn more about the city before visiting. I like to plan my trips precisely in order to visit as many locations as possible during my stay in the city. For this reason, I like to strategically organise my time and route to achieve this goal. I love reading about my destinations before travelling.

This website is very useful for planning and selecting my desired locations. I really enjoy reading information about each location. My knowledge of Limerick has grown immensely after reading the information contained in the About section. This allows me to gain a better understanding of each destination and make the most of my trip to Limerick. The website allows me to plan and organise a more productive trip.


**Persona Three:** 
I am a user who lives in Limerick City and made a resolution to become more active this year. Admittedly, I need a little motivation to get outside more often and to increase my step count. I love learning about the city I grew up in and I would like to achieve that while being more active. This website provides the right motivation and intrigue to get outdoors more regularly.

I have recently become more active and adventurous. The website has been instrumental in encouraging me to get outdoors more often. I enjoy grabbing a coffee at some of the recommended coffee shops and then walking around the city, particularly the Riverside Walk. I have significantly increased my step count and overall health and fitness levels in recent weeks with the help of 'Discover Limerick'. I love the mobile version of the website as it allows me to check in while moving around the city.



<a name="testing"></a>

  

## Testing


Feature Testing

![enter image description here](https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/resources/feature-testing-table.png?raw=true)


- The website underwent testing routinely throughout the build. I found [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) to be extremely useful in the creation of this project. Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser. DevTools was useful for editing on-the-fly and for diagnosing problems quickly.

- I found the Responsive Viewer Chrome Extension to be very useful in testing multiple screen sizes simultaneously. Responsive Viewer was used to test the responsiveness of the website on devices of small, medium and large size.

- I validated all HTML pages using the [Markup Validator](https://validator.w3.org/#validate_by_input). The Markup Validator is a free service by W3C that helps check the validity of Web documents.

- I validated all CSS pages using the [Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input). The W3C CSS Validation Service is a free software created by the W3C to help Web designers and Web developers check Cascading Style Sheets (CSS).

- I used [JS Hint](https://jshint.com/) to ensure the JavaScript code complies with coding rules and to ensure there are no syntax errors. Minor syntax errors were detected and resolved during development.

- I reviewed all the selected locations in my Google Maps API individually to ensure all the ID's and markers were all working smoothly and were displaying in the correct locations on the map.

- I tested the Current Weather API feature to ensure it was functioning as intended. In early stages, the temperature was displaying 0 instead of the correct figure. I rewrote the code and tested multiple times. I found a solution by adjusting the following line of code:

` var temp = data.main.temp; ` in place of `var temp = Math.round(data.main.temp); `

This resolved my issue and allowed me to use a toggle for users to switch the temperature seamlessly between Celsius and Fahrenheit depending on the users' preference.

- One major bug I experienced was with GitHub. An issue affecting a number of developers, when trying to run a preview server ports were stuck on detecting and would not open a port. When I run command python3 -m http.server the terminal displays:

`33060 – detecting...`

`3306 – detecting...`

`8000 – detecting...`

- I experienced this issue for several hours on February 5th & 6th. I learned more about the issue from Slack and after a few hours, the ports were open again. The issue was logged by another developer experiencing the same issues: https://github.com/gitpod-io/gitpod/issues/3118.

- I found Lighthouse to be very helpful. Lighthouse is an open-source, automated tool for improving the quality of web pages. I was able to test the responsiveness and load times of the website using Lighthouse. I could also test the performance and accessibility on mobile and desktop (including private browsers).

- I faced some challenges in receiving feedback on my progress with the project due to social distancing measures in place. However, at different stages in the development of this website, I was able to gain valuable feedback from friends and family members. I used Microsoft Teams to video call friends and colleagues while sharing my screen. This allowed me to navigate throughout the website to show off some of the features. I received great feedback and was able to implement in a constructive way.

- I demonstrated the website to members of my family. This feedback session was very helpful in identifying areas to improve upon. The font size and images were increased after receiving feedback. This helped ensure the website was more user-friendly and intuitive to people of all ages.

- The recommended places were shuffling and refreshing too frequently. This was constructive feedback I received while demonstrating the website to family members. Consequently, I update the JS code to refresh the results every 30 seconds to resolve this.
  

### Testing - User Stories


**User Story 1:** As a local of Limerick City, I want to quickly identify places I'd like to visit so that I can spend more time exploring and less time deciding where to go.

I can open the main homepage and scroll down to quickly view ‘Our Monthly Favourites’. I am able to click on each selection to find out more information as well as related locations that I might be interested in.

In order for this user to browse our selected locations:
- Open homepage of website.
- Scroll down slightly to view ‘Our Monthly Favourites’.
- View image and read description about the three selected locations.

**User Story 2:** As a visitor to Limerick, I want to find information about the many destinations so that I can organise my time efficiently in an attempt to visit multiple destinations on the same day.

I can view all selected locations in the Google Maps section allowing me to plan my route efficiently. I can click on each marker to learn more information about each location. I like to visit several places in the same area and so, this feature is beneficial to me.

In order for this user to browse all locations:
- Open homepage of website.
- View navigation bar at the top of the page.
- Navigate to the desired tab: Attractions, Activities or Coffee.
- View images and read descriptions about any of the destinations displayed.

Or 
- Open homepage of website.
- Scroll down slightly to view the Google Maps section.
- Click on any marker to view more information about each location.

**User Story 3:** As a relatively inactive person, I want to use a website to learn more about the attractions in Limerick to encourage me to become more active by getting outdoors more often.
 
I can navigate throughout the website to view all attractions, activities and coffee spots before deciding. Being able to see these attractions, motivates me to be more active and spend more time outdoors exploring. I like using the mobile version of the website because I can check it while moving around the city.

In order for this user to find a suitable destination:
- Open homepage of website.
- View navigation bar at the top of the page.
- Navigate to the desired tab: Attractions, Activities or Coffee.
- View images and read descriptions about any of the destinations displayed.


### Further Testing

  

- The website was tested on multiple browsers including Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.

  

- The website was viewed on a variety of devices such as desktops, mobile devices and tablets.

  

- More testing was completed to ensure that all pages were linking correctly.

  

### Devices Tested

  

iPhone XR, XS Max

414x896

  

iPhone XS, X

375x812

  

Galaxy S9 Plus, S8 Plus

412x846

  

Galaxy S9, Note 8, S8

360x740

  

Pixel 3, 3 XL

393x786

  

Medium Screen

1024x800

  

Large Screen

1280x800

  

iPhone 8 Plus, 7 Plus, 6S Plus

414x736

  

iPhone 8, 7, 6S, 6

375x667

  

---

  

<a name="bugs"></a>

  

## Bugs

  



  

- I had an issue with the Accordion jumping to the top of the page every time I clicked on it. I was able to resolve this by adding this detail to each < a > tag.

  

`<a href="javascript:void(0);"></a>`

  

- The images did not display when I deployed the website at first. I quickly realised the images didn't use an absolute file path. I corrected this by adding absolute file paths instead of relative file paths.

  

- I experienced an issue with the Open Weather API feature. I identified a bug while testing the Current Weather to ensure it was functioning correctly. In the early stages, the current temperature was displaying 0 instead of the correct figure. I rewrote the code and tested multiple times. I found a solution by adjusted the following line of code:

  

` var temp = data.main.temp; ` in place of `var temp = Math.round(data.main.temp); `

  

This resolved my issue and allowed me to use a toggle for users to switch seamlessly between Celsius and Fahrenheit.

  

- I identified another bug in 'Our Monthly Favourites' section. I created a clickable card for each of our 3 'Monthly Favourites'. After rewriting code and testing, I found that the issue was simply a missing full stop in my JS code.

  

`var cards = document.querySelectorAll("favourite-card");` was adjusted to `var cards = document.querySelectorAll(".favourite-card");`

  

I made this adjustment and tested again. The clickable cards are now functioning and allows the user to navigate directly to either of the 3 'Monthly Favourites' by clicking anywhere on the card.


- I was having an issue with the info windows in Google Maps. Multiple info windows could stay open at the same time. This is a negative user experience. I identified the problem and reworked my JS code to resolve this bug. I was able to improve my Google Maps API code by adding extra markers to distinguish between attractions, activities and coffee spots.

I added the following code to my Google Maps API to close previous info window when a new marker was clicked on:
`function closeOtherInfo() {
    if( InfoObj.length > 0) {
        InfoObj[0].set("marker", null);
        InfoObj[0].close();
        InfoObj[0].length = 0;
    }
}'
  

### Known Bugs
