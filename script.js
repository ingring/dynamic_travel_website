// I start the script with a bonus, it is not a part of the assignment. However, I have chosen to start the script with this carousel, 
// because it is the first thing I want to run in this script. 
// On the other side, it is the first time, of many times, I am using a document method in this script which is a part of the assignment (II. Built-in objects: b)
// In addition, this is also the first time I create a loop in this script (III. Decisions and loops: b)

// Carousel to show different pictures in the header
function carousel() {
    // Returns an HTMLCollection containing all of the images with the specified class name slide
    const slides = document.getElementsByClassName('slide');

    // loop through every picture that has the class name slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'; 
    }
    slideIndex++;

    // if every image is showned, start again from the first image 
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    
    // display one image at a time 
    slides[slideIndex-1].style.display = 'block';  

    // change image every 6 seconds
    setTimeout(carousel, 6000); 
}

// calls on the function, the function will run when the script runs
let slideIndex = 0;
carousel();

// Got inspiration from this website: 
// https://www.w3schools.com/howto/howto_js_slideshow.asp 17.02.2022


// II. Built-in objects: e) Used the date object getDay() to find todays day as a number (0-6)
// I have used a function to declare local variables to prevent conflicts. For instance if I had declared another global variable later on in the script. 
function todaysDay() {
    const date = new Date();
    const dayNumber = date.getDay();
    let day = '';

    // II. Built-in objects: a) I used a switch statement to calculate the weekday number to the weekday name
    switch (dayNumber) {
        case 0:
        day = 'Sunday';
        break;
        case 1:
        day = 'Monday';
        break;
        case 2:
        day = 'Tuesday';
        break;
        case 3:
        day = 'Wednesday';
        break;
        case 4:
        day = 'Thursday';
        break;
        case 5:
        day = 'Friday';
        break;
        case 6:
        day = 'Saturday';
    }
    return 'Good ' + day + '!';
}

// Inspired by https://www.w3schools.com/js/js_switch.asp 21.03.2022

document.querySelector('#day').innerHTML = todaysDay();


// I. Objects: 
// a) Created 24 objects using the constructor notation 
// b) Five properties and one method
function Place(place, country, type, pop, img, top10) {
    this.place = place;
    this.country = country;
    this.type = type;
    this.population = pop;
    this.image = img;
    this.top10 = top10;

    this.info = function() {

        // II. Built-in objects: c) I used a combination of .charAt and .toUpperCase, both a method of the string object, to capitalize the first letter of the country
        const countryCapitalized = this.country.charAt(0).toUpperCase() + this.country.slice(1);
        let top10Info = '';

        if (this.top10) {
            top10Info = ' ' + this.place + ' is one of the cities from lonely planet top ten places to visit.';
        };

        // checks if the city has a population property, since I have deleted this to one of the cities
        if (this.population) {
            populationFact = ' Population: ' + this.population;
        } else {
            populationFact = '';
        };

        // checks if the city has an attraction property, since I have added this to one of the cities
        if (this.attraction) {
            attractionFact = ' Visit ' + this.attraction;
        } else {
            attractionFact = '';
        };

        return this.place + ' is a beautiful place to travel to. It is in the wonderful country ' + countryCapitalized + '.' + top10Info + populationFact + attractionFact;
    };
}

// I. Objects: c) The properties contains values of these data types: string, number, Boolean, and array
let placesArray = [
    new Place('Nice', 'france', 'beach', 1234123, 'https://images.unsplash.com/photo-1554149082-75d460afced3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', false),
    new Place('Barcelona', 'spain', ['beach', 'capital'], 1234123, 'https://images.unsplash.com/photo-1630219694734-fe47ab76b15e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80', true),
    new Place('Sardinia', 'italy', 'beach', 4321321, 'https://images.unsplash.com/photo-1568283740810-4ccb1175afa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=737&q=80', false),
    new Place('Dubrovnik', 'croatia', 'beach', 1234123, 'https://images.unsplash.com/photo-1555990793-da11153b2473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80', true),
    new Place('Split', 'croatia', 'beach', 1234123, 'https://images.unsplash.com/photo-1555990538-c48ab0a194b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80', false),
    new Place('Bodrum', 'turkey', 'beach', 1234123, 'https://images.unsplash.com/photo-1583061386694-e364c84ba31d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', true),
    new Place('Naples', 'italy', 'beach', 4321321, 'https://images.unsplash.com/photo-1610024804356-f814d8969399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80', false),
    new Place('London', 'england', 'capital', 1234123, 'https://images.unsplash.com/photo-1512734099960-65a682cbfe2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80', true),
    new Place('Copenhagen', 'denmark', 'capital', 1234123, 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', true),
    new Place('Berlin', 'germany', 'capital', 4321321, 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', false),
    new Place('Vienna', 'austria', 'capital', 1234123, 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80', true),
    new Place('Prague', 'the Czech Republic', 'capital', 1234123, 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', true),
    new Place('Oslo', 'norway', 'capital', 4321321, 'https://images.unsplash.com/photo-1433757741270-94a3bcadc2f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80', false),
    new Place('Paris', 'france', 'capital', 1234123, 'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', true),
    new Place('Rome', 'italy', 'capital', 1234123, 'https://images.unsplash.com/photo-1588614959060-4d144f28b207?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1086&q=80', true),
    new Place('Zagreb', 'croatia', 'capital', 4321321, 'https://images.unsplash.com/photo-1590233216259-d9576426f5e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80', false),
    new Place('Lisbon', 'portugal', 'capital', 1234123, 'https://images.unsplash.com/photo-1616607006500-b08d26749c64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', true),
    new Place('Warszawa', 'poland', 'capital', 1234123, 'https://images.unsplash.com/photo-1464520460796-5d98a3e5b296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', true),
    new Place('Amsterdam', 'netherlands', 'capital', 4321321, 'https://images.unsplash.com/photo-1576924542622-772281b13aa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', false),
    new Place('Milano', 'italy', 'smallCity', 1234123, 'https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80', true),
    new Place('Longyearbyen', 'norway', 'smallCity', 4321321, 'https://images.unsplash.com/photo-1585257511987-16bc1a30e184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80', true),
    new Place('Bruges', 'belgium', 'smallCity', 1234123, 'https://images.unsplash.com/photo-1585927206955-206932ece06b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', false),
    new Place('Krakow', 'poland', 'smallCity', 1234123, 'https://images.unsplash.com/photo-1495181941197-70a606546974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', true),
    new Place('Bergen', 'norway', 'smallCity', 4321321, 'https://images.unsplash.com/photo-1580946443359-1126222f9224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', false)
    ]

// I. Objects: d) removes the population of Nice and adds an property to Barcelona called attraction
const nice = placesArray.find(x => x.place === 'Nice');
delete nice.population;
const barcelona = placesArray.find(x => x.place === 'Barcelona');
barcelona.attraction = 'La Sagrada Familia';


// Global scope, because I want to reach these arrays in several places of the script
let placeNameArray = [];
let beach = [];
let capitals = [];
let otherCities = [];

// III. Decisions and loops: b) for loop with an if else statement (a)
// loops through the array with the objects and pushes it to the arrays to categories the cities
for(var i = 0; i < placesArray.length; i++) {
    const placeVariable = (placesArray[i].place);
    const typeVariable = (placesArray[i].type);

    placeNameArray.push(placeVariable);

    if (typeVariable === 'beach'){
        beach.push(placeVariable);
    }
    else if (typeVariable === 'capital'){
        capitals.push(placeVariable);
    }

    // if the city is both a capital and a beach
    else if ((typeVariable[0] === 'capital' || typeVariable[1] === 'capital') && (typeVariable[0] === 'beach' || typeVariable[1] === 'beach')){
        beach.push(placeVariable);
        capitals.push(placeVariable);
    }
    else {
        otherCities.push(placeVariable);
    }
}

//display the number of cities that is stored inside the placesArray array
document.querySelector('#cityQuantity').textContent = placesArray.length + ' cities';


// I. Objects: e) Display information about your objects to the user with the document method querySelector (II. Built-in objects b)
// I chose to display the information with a function that takes cityArray as a parameter so I can use the same function to every button. 
function cityRandom(cityArray) {
    document.querySelector('#result').style.display = 'grid'; 

    // II. Built-in objects: d) Used the method Math.floor and Math.random to find a random city from the relevant array
    let vacay = cityArray[Math.floor(Math.random() * cityArray.length)];
    let vacayPlace = placesArray.find(x => x.place === vacay);

    document.querySelector('#cityRandom').innerHTML = 'Travel to ' + vacay;
    document.querySelector('#info').innerHTML = vacayPlace.info();
    document.querySelector('#imgCity').setAttribute('src', vacayPlace.image);
}

// II. Built-in objects: a) uses window alert() method so the user can click the ok button and see the result without any effort
function alertResult() {
    window.alert('The result is here, see the result here!')
    window.location.href = '#result';
}

// calls on the function when the user click on one of the buttons on the page using the document method querySelector (II. Built-in objects b)
document.querySelector('#city').onclick = function() {cityRandom(placeNameArray), alertResult()};
document.querySelector('#beach').onclick = function() {cityRandom(beach)};
document.querySelector('#otherCities').onclick = function() {cityRandom(otherCities)};
document.querySelector('#capitals').onclick = function() {cityRandom(capitals)};


// ASSIGNMENT 3
// Create a new list item when clicking on the "Add" button

let cityNodelist = document.getElementsByTagName("LI");

function createCloseElement(element) {
    let span = document.createElement("SPAN");
    let cross = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(cross);
    element.appendChild(span);
}

// for the existing list
for (let i = 0; i < cityNodelist.length; i++) {
    createCloseElement(cityNodelist[i]);
};

function closeElement() {
    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            if (confirm('Are you sure you want to delete this city?')) {
                let div = this.parentElement;
                // return div.style.display = "none";
                return div.remove();
            };
        };
    };
};

closeElement();

function createEditElement(element) {
    let span = document.createElement("SPAN");
    // let edit = document.createTextNode("edit");
    let edit = document.createTextNode("\u270E");
    span.className = "edit";
    span.appendChild(edit);
    element.appendChild(span);
};

// for the existing list
for (let i = 0; i < cityNodelist.length; i++) {
    createEditElement(cityNodelist[i]);
};

function resetInputBox () {
    if (inputValue != "") {
        new item(inputValue);
        inputValue = "";
    }
}

function editElement() {
    let edit = document.getElementsByClassName("edit");
    let input = document.getElementById("cityInput");
    let editButton = document.getElementById("editButton");
    let cancelButton = document.getElementById("cancelButton");

    for (let i = 0; i < edit.length; i++) {
        edit[i].onclick = function(e) {

            console.log(e.target.parentNode)

            // input.style.display = "block";
            // editButton.style.display = "block";
            input.classList.toggle('hidden');
            editButton.classList.toggle('hidden');
            cancelButton.classList.toggle('hidden');


            // document.getElementById("cityInput").value = e.target.parentNode.textContent

            editButton.onclick = function() {
                if (confirm('Are you sure you want to edit this city?')) {
                    let li = document.createElement("li");
                    let inputValue = document.getElementById("cityInput").value;
                    const inputCapitalized = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
                    let inputText = document.createTextNode(inputCapitalized);
                    // let inputText = document.createTextNode(inputValue);
                    li.appendChild(inputText);
            
                    let cityListElement = edit[i].parentElement;
                    console.log(cityListElement);
                    cityListElement.replaceWith(li);
            

            
                    createCloseElement(li)
            
                    closeElement();
            
                    createEditElement(li);
                
                    editElement();
            
                    input.classList.toggle('hidden');
                    editButton.classList.toggle('hidden');
                    cancelButton.classList.toggle('hidden');
            
                    if (input.value != "") {
                        return input.value = "";
            

                    }
                } else {
                    input.classList.toggle('hidden');
                    editButton.classList.toggle('hidden');
                    cancelButton.classList.toggle('hidden');
            
                    if (input.value != "") {
                        return input.value = "";
                    }
                }
            };
        };
    };
};

editElement();

function displayInputBox(buttonDisplay) {
    // let input = document.createElement("input");
    // input.setAttribute("type", "text");
    // input.setAttribute("id", "cityInput");
    // input.setAttribute("placeholder", "City...");

    // let inputButton = document.createElement("button");
    // let add = document.createTextNode("add");
    // inputButton.appendChild(add);
    // inputButton.setAttribute("onclick", "newElement()");
    // inputButton.setAttribute("id", "inputButton");

    // console.log(input);
    // console.log(inputButton)

    // document.getElementById("input").appendChild(input);
    // document.getElementById("input").appendChild(inputButton);

    
    // let input = document.getElementById("cityInput");
    // let inputButton = document.getElementById("inputButton");
    // let cancelButton = document.getElementById("cancelButton");

    // input.style.display = "block";
    // inputButton.style.display = "block";
    // cancelButton.style.display = "block";
    // console.log(buttonDisplay.style.display)

    // if (buttonDisplay.style.display === "none") {
    //     buttonDisplay.style.display = "block";
    //   } else {
    //     buttonDisplay.style.display = "none";
    //   }


    buttonDisplay.classList.toggle('hidden');

}

// when you click on the + button
// hvis editButton har denne klassen - fjern den 
function addInputBox() {
    let input = document.getElementById("cityInput");
    let inputButton = document.getElementById("inputButton");
    let cancelButton = document.getElementById("cancelButton");

    displayInputBox(input);
    displayInputBox(inputButton);
    displayInputBox(cancelButton);
}

// egen funksjon til edit button, hvis inputButton eksisterer - fjern den

// to add new elements
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("cityInput").value;
    const inputCapitalized = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    let inputText = document.createTextNode(inputCapitalized);
    // let inputText = document.createTextNode(inputValue);
    li.appendChild(inputText);

    if (inputValue === '') {
      alert("You must write something!");
    } else {
        if (confirm('Are you sure you want to add this city to your bucket list?')) {
            document.getElementById("cityList").appendChild(li);
            document.getElementById("cityInput").value = "";

            createCloseElement(li)
            
            closeElement();
        
            createEditElement(li);

            addInputBox();
        }
    }
    // document.getElementById("cityInput").value = "";

    // createCloseElement(li)
    
    // closeElement();

    // createEditElement(li);

    // let input = document.getElementById("cityInput");
    // let inputButton = document.getElementById("inputButton");
    // let cancelButton = document.getElementById("cancelButton");

    // input.style.display = "none";
    // inputButton.style.display = "none";
    // cancelButton.style.display = "none";

  }

// function addInputBox() {
//     let input = document.getElementById("cityInput");
//     let inputButton = document.getElementById("inputButton");
//     let cancelButton = document.getElementById("cancelButton");

//     displayInputBox(input);
//     displayInputBox(inputButton);
//     displayInputBox(cancelButton);
// }

// function showInputBox (button) {
//     // let input = document.createElement("input");
//     // input.setAttribute("type", "text");
//     // input.setAttribute("id", "cityInput");
//     // input.setAttribute("placeholder", "City...");

//     // let inputButton = document.createElement("button");
//     // let add = document.createTextNode("add");
//     // inputButton.appendChild(add);
//     // inputButton.setAttribute("onclick", "newElement()");
//     // inputButton.setAttribute("id", "inputButton");

//     // console.log(input);
//     // console.log(inputButton)

//     // document.getElementById("input").appendChild(input);
//     // document.getElementById("input").appendChild(inputButton);

    
//     let input = document.getElementById("cityInput");
//     let inputButton = document.getElementById("inputButton");
//     let cancelButton = document.getElementById("cancelButton");

//     // input.style.display = "block";
//     // inputButton.style.display = "block";
//     // cancelButton.style.display = "block";

//     if (button.style.display === "none") {
//         console.log("heihei")
//         button.style.display = "block";
//       } else {
//         button.style.display = "none";
//       }
// }

// var x = document.getElementById("myDIV");
// if (x.style.display === "none") {
//   x.style.display = "block";
// } else {
//   x.style.display = "none";
// }


// https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

//   document.querySelector('#add').onclick = function() {addElement()};
//   document.querySelector('#replaceEdit').onclick = function() {addElement()};



// function checkButton () {
//     if (document.getElementById('addInputBox').clicked) {
//         console.log("input button was clicked")
//     }

//     else if (document.querySelector('.edit').clicked) {
//        console.log("edit button was clicked")
//     }
// }

// function addElement () {
//     if (document.getElementById('addInputBox').clicked == true)
//     {
//         console.log(newElement);
//     }

//     else if (document.querySelector('.edit').clicked == true)
//     {
//        console.log(editElement);
//     }
// }

document.getElementById("addInputBox").addEventListener("click", addInputBox);