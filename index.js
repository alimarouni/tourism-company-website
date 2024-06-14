var bigBox = document.querySelector(".big-box");
var footer = document.querySelector("footer");
var addFormContainer = document.querySelector(".add-form-container");
var deleteContainer = document.querySelector(".delete-container");
var contactusContainer = document.querySelector("#contactus-container");
bigBox.style.display = "none";
footer.style.display = "none";
addFormContainer.style.display = "none";
deleteContainer.style.display = "none";
contactusContainer.style.display = "none";

// login -----------------------------------------
var loginform = document.querySelector(".login-box");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var btn = document.querySelector("#btn");

    btn.addEventListener("click", function(e) {
        e.preventDefault();
        var emailval = email.value.toLowerCase();
        var passval = password.value.toLowerCase();
        if (emailval === "" || passval === "") {
            alert("Email and password are required");
        } 
        else if (emailval === "user@gmail.com" && passval === "user") {
            loginform.style.display = "none";
            bigBox.style.display = "block";
            footer.style.display = "block";
            contactusContainer.style.display = "flex";
        } 
        else if(emailval === "manager@gmail.com" && passval === "manager"){
          loginform.style.display = "none";
          bigBox.style.display = "block";
          footer.style.display = "block";
          addFormContainer.style.display = "flex";
          deleteContainer.style.display = "flex";
        }
        else {
            alert("Invalid email or password");
            email.value = "";
            password.value = "";
        }
    });


var cities = [
  {
    "name": "Beirut",
    "country": "Lebanon",
    "description": "full of history",
    "topplaces": ["Rawche Rock", "Nejmeh Square", "Hamra Street"],
    "image": "./images/beirut.webp"
  },
  {
    "name": "Tyre",
    "country": "Lebanon",
    "description": "very old city",
    "topplaces": ["Tyre Temple", "Tyre Shore", "Old Market"],
    "image": "./images/tyre.jpg"
  },
  {
    "name": "Baalbek",
    "country": "Lebanon",
    "description": "The city of the sun",
    "topplaces": ["Roman ruins", "Old Market", "Marjeh square"],
    "image": "./images/baalbek.avif"
  },
  {
    "name": "Jbeil",
    "country": "Lebanon",
    "description": "2nd oldest city in the world",
    "topplaces": ["Old port", "Byblos castle", "Old Market"],
    "image": "./images/jbeil.avif"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "description": "Vibrant city",
    "topplaces": ["Taksim square", "Galata tower", "Haghia sophia mosque"],
    "image": "./images/istanbul.jpg"
  },
  {
    "name": "Antalya",
    "country": "Turkey",
    "description": "Beautiful costal city",
    "topplaces": ["Antalya mounts", "Land of legends", "The old city"],
    "image": "./images/antalya.jpg"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "description": "Old european city",
    "topplaces": ["Colosseum", "Vatican city", "St peters basilica"],
    "image": "./images/rome.jpg"
  },
  {
    "name": "Milan",
    "country": "Italy",
    "description": "Modern city",
    "topplaces": ["Duomo of milan", "Royal palace of milan", "Sforza castle"],
    "image": "./images/milan.jpg"
  }
];

//cities display-----------------------------------------------------------------
var citiesContainer = document.querySelector("#cities");
var deleteSelect = document.querySelector(".delete-select");

var lebanonList = document.querySelector("#lebanon-list");
var turkeyList = document.querySelector("#turkey-list");
var italyList = document.querySelector("#italy-list");

citiesContainer.innerHTML = "";
for (var i = 0; i < cities.length; i++) {
  citiesContainer.innerHTML += `
      <div class="city-card" id="${cities[i].name.toLowerCase()}" data-country="${cities[i].country}">
        <div class="card-inner">
          <div class="card-front">
            <img src="${cities[i].image}" class="city-image">
          </div>
          <div class="card-back">
            <p class="city-info"><span class="title">Counrty: </span>${cities[i].country}</p>
            <p class="city-info"><span class="title">Description: </span>${cities[i].description}</p>
            <p class="city-info"><span class="title">Top Places:</span><br>${cities[i]["topplaces"]}</p>
          </div>
        </div>
        <div class="city-name-container">
          <p class="city-name">${cities[i].name}</p>
        </div>
      </div>`;
      addCardEventListeners();
      deleteSelect.innerHTML += `
      <option id="${cities[i].name}-option" value="${cities[i].name}">${cities[i].name}</option>
      `

      if(cities[i].country.toLowerCase() === "lebanon"){
        lebanonList.innerHTML += `
        <a href="#${cities[i].name.toLowerCase()}"><li>${cities[i].name}</li></a>
        `
      }
      if(cities[i].country.toLowerCase() === "turkey"){
        turkeyList.innerHTML += `
        <a href="#${cities[i].name.toLowerCase()}"><li>${cities[i].name}</li></a>
        `
      }
      if(cities[i].country.toLowerCase() === "italy"){
        italyList.innerHTML += `
        <a href="#${cities[i].name.toLowerCase()}"><li>${cities[i].name}</li></a>
        `
      }
}


//cities filter------------------------------------------------------------------
var filter = document.querySelector("#filter");
filter.addEventListener("change", function() {
  if (cities.length > 0) {
    citiesContainer.innerHTML = "";

      var filterValue = filter.value.toLowerCase();

      for (var i = 0; i < cities.length; i++) {
          if (cities[i].country.toLowerCase() === filterValue) {
            citiesContainer.innerHTML += `
            <div class="city-card" id="${cities[i].name.toLowerCase()}" data-country="${cities[i].country}">
              <div class="card-inner">
                <div class="card-front">
                  <img src="${cities[i].image}" class="city-image">
                </div>
                <div class="card-back">
                  <p class="city-info"><span class="title">Counrty: </span>${cities[i].country}</p>
                  <p class="city-info"><span class="title">Description: </span>${cities[i].description}</p>
                  <p class="city-info"><span class="title">Top Places:</span><br>${cities[i]["topplaces"]}</p>
                </div>
              </div>
              <div class="city-name-container">
                <p class="city-name">${cities[i].name}</p>
              </div>
            </div>`;
            addCardEventListeners();
                }
            else if(filterValue === "all"){
              for(var i = 0; i<cities.length; i++){
                citiesContainer.innerHTML += `
            <div class="city-card" id="${cities[i].name.toLowerCase()}" data-country="${cities[i].country}">
              <div class="card-inner">
                <div class="card-front">
                  <img src="${cities[i].image}" class="city-image">
                </div>
                <div class="card-back">
                  <p class="city-info"><span class="title">Counrty: </span> ${cities[i].country}</p>
                  <p class="city-info"><span class="title">Description: </span> ${cities[i].description}</p>
                  <p class="city-info"><span class="title">Top Places:</span><br>${cities[i]["topplaces"]}</p>
                </div>
              </div>
              <div class="city-name-container">
                <p class="city-name">${cities[i].name}</p>
              </div>
            </div>`;
            addCardEventListeners();
              }
            }
            }
        }
    }
);

//filter seach bar-----------------------------------------------------------
var searchBtn = document.querySelector("#search-btn");
var searchBar = document.querySelector("#filter-letter");
searchBtn.addEventListener("click", function(){
  if (cities.length > 0) {
    citiesContainer.innerHTML = "";
  var letterVal = searchBar.value;
  for (var i = 0; i < cities.length; i++) {
    if (cities[i].name.toLowerCase().includes(letterVal.toLowerCase())) {
      citiesContainer.innerHTML += `
      <div class="city-card" id="${cities[i].name.toLowerCase()}" data-country="${cities[i].country}">
        <div class="card-inner">
          <div class="card-front">
            <img src="${cities[i].image}" class="city-image">
          </div>
          <div class="card-back">
            <p class="city-info"><span class="title">Counrty: </span>${cities[i].country}</p>
            <p class="city-info"><span class="title">Description: </span>${cities[i].description}</p>
            <p class="city-info"><span class="title">Top Places:</span><br>${cities[i]["topplaces"]}</p>
          </div>
        </div>
        <div class="city-name-container">
          <p class="city-name">${cities[i].name}</p>
        </div>
      </div>`;
      addCardEventListeners();
          }
  }
}
});

//add cities---------------------------------------------------------------
var addBtn = document.querySelector("#submit-add");
var cityName = document.querySelector("#city-name");
var countryName = document.querySelector("#country-name");
var topPlaces = document.querySelector("#top-places");
var description = document.querySelector("#description");
var addImage = document.querySelector("#add-img");

addBtn.addEventListener("click", function(e) {
    e.preventDefault();

    if (cityName.value === "" || countryName.value === "" || topPlaces.value === "" || description.value === "" || addImage.files.length === 0) {
        alert("Please fill all the fields");
    } else {
        var topPlacesArray = topPlaces.value.split(",").map(function(item) {
            return item.trim();
        });

        var newCity = {
            name: cityName.value,
            country: countryName.value,
            description: description.value,
            topplaces: topPlacesArray,
            image: URL.createObjectURL(addImage.files[0]) 
        };

        cityName.value = "";
        countryName.value = "";
        topPlaces.value = "";
        description.value = "";
        addImage.value = "";

        cities.push(newCity);

        citiesContainer.innerHTML += `
            <div class="city-card" id="${newCity.name}" data-country="${newCity.country}">
                <div class="card-inner">
                    <div class="card-front">
                        <img src="${newCity.image}" class="city-image">
                    </div>
                    <div class="card-back">
                        <p class="city-info"><span class="title">Counrty: </span> ${newCity.country}</p>
                        <p class="city-info"><span class="title">Description: </span> ${newCity.description}</p>
                        <p class="city-info"><span class="title">Top Places:</span><br> ${newCity.topplaces.join(", ")}</p>
                    </div>
                </div>
                <div class="city-name-container">
                    <p class="city-name">${newCity.name}</p>
                </div>
            </div>`;
        alert("City added successfully.");
        addCardEventListeners();

        //adding the new city to the delete option list------------------------------------------
        deleteSelect.innerHTML += `
      <option id="${newCity.name}-option" value="${newCity.name}">${newCity.name}</option>
      `

        //adding the new city to the countries menu-------------------------------------------

        if(newCity.country.toLowerCase() === "lebanon"){
          lebanonList.innerHTML += `
          <a href="#${newCity.name.toLowerCase()}"><li>${newCity.name}</li></a>
          `
        }
        if(newCity.country.toLowerCase() === "turkey"){
          turkeyList.innerHTML += `
          <a href="#${newCity.name.toLowerCase()}"><li>${newCity.name}</li></a>
          `
        }
        if(newCity.country.toLowerCase() === "italy"){
          italyList.innerHTML += `
          <a href="#${newCity.name.toLowerCase()}"><li>${newCity.name}</li></a>
          `
        }
    }
});

//delete city------------------------------------------------------------------------
var deleteBtn = document.querySelector("#delete-btn");
deleteBtn.addEventListener("click", function() {
  var selectedCity = deleteSelect.value;
  var confirmation =confirm("are you sure you want to delete this city");
  if(confirmation){
    var index = cities.findIndex(function(city) {
      return city.name === selectedCity;
    });
  if (index !== -1) {
    cities.splice(index, 1);
    citiesContainer.innerHTML = "";
    deleteSelect.innerHTML = "";
    lebanonList.innerHTML = "";
    italyList.innerHTML = "";
    turkeyList.innerHTML = "";
for (var i = 0; i < cities.length; i++) {
  citiesContainer.innerHTML += `
      <div class="city-card" id="${cities[i].name.toLowerCase()}" data-country="${cities[i].country}">
        <div class="card-inner">
          <div class="card-front">
            <img src="${cities[i].image}" class="city-image">
          </div>
          <div class="card-back">
            <p class="city-info"><span class="title">Counrty: </span>${cities[i].country}</p>
            <p class="city-info"><span class="title">Description: </span>${cities[i].description}</p>
            <p class="city-info"><span class="title">Top Places:</span><br>${cities[i]["topplaces"]}</p>
          </div>
        </div>
        <div class="city-name-container">
          <p class="city-name">${cities[i].name}</p>
        </div>
      </div>`;
      addCardEventListeners();
      deleteSelect.innerHTML += `
      <option id="${cities[i].name}-option" value="${cities[i].name}">${cities[i].name}</option>`

      //deleting the new city from the countries lists menu----------------------------------------
      if(cities[i].country.toLowerCase() === "lebanon"){
        lebanonList.innerHTML += `
        <a href="#${cities[i].name.toLowerCase()}"><li>${cities[i].name}</li></a>
        `
      }
      if(cities[i].country.toLowerCase() === "turkey"){
        turkeyList.innerHTML += `
        <a href="#${cities[i].name.toLowerCase()}"><li>${cities[i].name}</li></a>
        `
      }
      if(cities[i].country.toLowerCase() === "italy"){
        italyList.innerHTML += `
        <a href="#${cities[i].name.toLowerCase()}"><li>${cities[i].name}</li></a>
        `
      }
}
  }
  }  
 });


//contact us for user--------------------------------------------------------------------
var contactBtn = document.querySelector("#contact-btn");
var contactFname = document.querySelector("#contact-fname");
var contactLname = document.querySelector("#contact-lname");
var contactEmail = document.querySelector("#contact-email");
var contactFeedback = document.querySelector("#contact-feedback");

contactBtn.addEventListener("click", function(e){
  e.preventDefault();
  contactFnameval = contactFname.value.toLowerCase();
  contactLnameval = contactLname.value.toLowerCase();
  contactEmailval = contactEmail.value.toLowerCase();
  contactFeedbackval = contactFeedback.value.toLowerCase();

  if(contactFnameval === "" || contactLnameval === "" || contactEmailval === "" || contactFeedbackval === ""){
    alert("Fill all the Fields please");
  } else {
    alert("Thank You We will contact you as soon as possible");
  }
});



 

//cards rotation-----------------------------------------------------------
function addCardEventListeners() {
  const cityCards = document.querySelectorAll('.city-card');
  cityCards.forEach(function(card) {
    card.addEventListener('mouseover', function() {
      flipCard(card);
    });

    card.addEventListener('mouseout', function() {
      unflipCard(card);
    });
  });
}
function flipCard(card) {
  card.querySelector('.card-inner').style.transform = "rotateY(180deg)";
}
function unflipCard(card) {
  card.querySelector('.card-inner').style.transform = "rotateY(0deg)";
}
















