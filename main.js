let locationToronto = document.getElementById('locationToronto');
let locationHongKong = document.getElementById('locationHongKong');
let locationJapan = document.getElementById('locationJapan');  
let locationMalaysiaSingapore = document.getElementById('locationMalaysiaSingapore');  
let locationNewYork = document.getElementById('locationNewYork');  

let year2021 = document.getElementById('year2021');  
let year2022 = document.getElementById('year2022');  
let year2023 = document.getElementById('year2023');  
let year2024 = document.getElementById('year2024'); 

let withWhomAlone = document.getElementById('withWhomAlone'); 
let withWhomFamily = document.getElementById('withWhomFamily'); 
let withWhomFriends = document.getElementById('withWhomFriends'); 

let timeDay = document.getElementById('timeDay'); 
let timeNight = document.getElementById('timeNight'); 

let additionalVisualElementsBuildings = document.getElementById('additionalVisualElementsBuildings'); 
let additionalVisualElementsCarOrRoad = document.getElementById('additionalVisualElementsCarOrRoad'); 
let additionalVisualElementsLandscape = document.getElementById('additionalVisualElementsLandscape'); 
let additionalVisualElementsPeople = document.getElementById('additionalVisualElementsPeople'); 
let additionalVisualElementsWater = document.getElementById('additionalVisualElementsWater');


let colorOrange = document.getElementById('colorOrange'); 
let colorBlue = document.getElementById('colorBlue'); 
let colorPinkAndPurple = document.getElementById('colorPinkAndPurple'); 
let colorBlackAndGrey = document.getElementById('colorBlackAndGrey'); 

let allFilter = document.getElementById('allFilter'); 

let container = document.getElementById("output-container");

var closeButton = document.getElementById("close-button");
var popupWindow = document.getElementById("popup-window");



document.addEventListener("DOMContentLoaded", function() {
  const selectionsText = document.querySelectorAll(".selections-text");
  selectionsText.forEach(function(element) {
    element.addEventListener("click", function() {
      element.classList.toggle("clicked");
    });
  });

  fetch('skies.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(collection){
      displayData(collection);

      function displayData(collection){
        container.innerHTML = "";
        for (let item of collection){
          const itemElement = document.createElement("div");
          itemElement.innerHTML = `
            <a href="#" class="bwImages open-button" id="popup-link"><img class="filter-image" src="${item.image}"/></a>
          `;
          container.appendChild(itemElement);
          // Attach event listener inside the loop
          const popupLink = itemElement.querySelector('.open-button');
          popupLink.addEventListener("click", function(event) {
            event.preventDefault();
            // Show the pop-up window when the link is clicked
            popupWindow.innerHTML = "";
            popupWindow.innerHTML = `
            <div class="row">
            <div class="left-column">
            <img src="${item.image}" alt="" width="100%">
            </div>
        
            <div class="right-column">
              <div class="template-skies"><h3>SKIES</h3></div>      
              <div>
                <div>
                  <p class="medium">DATE:</p>
                  <p>${item.date}</p><br>
          
                  <p class="medium">TIME:</p>
                  <p>${item.time}</p><br>
                  
                  <p class="medium">LOCATION:</p>
                  <p>${item.location}</p><br>
                  
                  <p class="medium">COLOR(S) OF THE SKY:</p>
                  <p>${item.colorOfTheSky}</p><br>
                  
                  <p class="medium">WHAT WAS I DOING?</p>
                  <p>${item.whatWasIDoing}</p><br>
                  
                  <p class="medium">WITH WHOM?</p>
                  <p>${item.withWhom}</p><br>
                  
                  <p class="medium">ADDITIONAL VISUAL ELEMENT(S)?</p>
                  <p>${item.additionalVisualElements}</p>
        
                  <button id="close-button">Close</button>

                </div>
              </div>
            </div>
            `
            popupWindow.style.display = "block";
            var closeButton = document.getElementById("close-button");
            console.log("Link clicked:", item.image); // Example action
            closeButton.addEventListener("click", function(){
              popupWindow.style.display = "none";
              console.log('close');
            })
          });
        }
      }

 // Year     
      locationToronto.addEventListener("click", function(){
        const filteredData = collection.filter((item) => item.coordinates == "43.6532° N, 79.3832° W"); // Toronto coordinates
        displayData(filteredData);
      });
      locationHongKong.addEventListener("click", function(){ // Event listener for the new button
        const filteredData = collection.filter((item) => item.coordinates == "22.3193° N, 114.1694° E");   
        displayData(filteredData);
      });
      locationJapan.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.coordinates == "36.2048° N, 138.2529° E");   
        displayData(filteredData);
      });
      locationNewYork.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.coordinates == "40.7128° N, 74.0060° W");   
        displayData(filteredData);
      });
      locationMalaysiaSingapore.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.coordinates == "1.3521° N, 103.8198° E &  4.2105° N, 101.9758° E");   
        displayData(filteredData);
      });

 // Year     
      year2021.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.year === "2021");   
        displayData(filteredData);
      });
      year2022.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.year === "2022");   
        displayData(filteredData);
      });
      year2023.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.year === "2023");   
        displayData(filteredData);
      });
      year2024.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.year === "2024");   
        displayData(filteredData);
      });

 // With Whom     
      withWhomAlone.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.withWhom === "Alone");   
        displayData(filteredData);
      });
      withWhomFamily.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.withWhom === "Family");   
        displayData(filteredData);
      });
      withWhomFriends.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.withWhom === "Friend(s)");   
        displayData(filteredData);
      });

// Day or night     
      timeDay.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.dayOrNight === "Day");   
        displayData(filteredData);
      });
      timeNight.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.dayOrNight === "Night");   
        displayData(filteredData);
      });

// Additional Visual Elements
      additionalVisualElementsBuildings.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.additionalVisualElements.includes("Buildings"));
        displayData(filteredData);
        console.log("Clicked on 'Buildings' button");
      });
      additionalVisualElementsCarOrRoad.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.additionalVisualElements.includes("Road/Car"));
        displayData(filteredData);
        console.log("Clicked on 'Buildings' button");
      });
      additionalVisualElementsLandscape.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.additionalVisualElements.includes("Landscape"));
        displayData(filteredData);
      });
      additionalVisualElementsPeople.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.additionalVisualElements.includes("People"));
        displayData(filteredData);
      });
      additionalVisualElementsWater.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.additionalVisualElements.includes("Water"));
        displayData(filteredData);
      });

 // Color       
      colorOrange.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.colorOfTheSky.includes("Orange"));
        displayData(filteredData);
      });
      colorBlue.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.colorOfTheSky.includes("Blue"));
        displayData(filteredData);
      });
      colorPinkAndPurple.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.colorOfTheSky.includes("Pink/Purple"));
        displayData(filteredData);
      });
      colorBlackAndGrey.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.colorOfTheSky.includes("Black/Grey"));
        displayData(filteredData);
      });

// Time  
      timeDay.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.dayOrNight === "Day");   
        displayData(filteredData);
      });
      timeNight.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.dayOrNight === "Night");   
        displayData(filteredData);
      });

// All
      allFilter.addEventListener("click", function(){ 
        displayData(collection); 
      });

    });
});


  
