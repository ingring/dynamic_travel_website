let cityNodelist = document.getElementsByTagName("LI");

for (let i = 0; i < cityNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let cross = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(cross);
    cityNodelist[i].appendChild(span);
};

// create edit for every li element
for (let i = 0; i < cityNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let edit = document.createTextNode("edit");
    span.className = "replace";
    span.appendChild(edit);
    cityNodelist[i].appendChild(span);
};

closeElement()

// hide the item if the user clicks on the cross
function closeElement() {
    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            if (confirm('Are you sure you want to delete this city?')) {
                let div = this.parentElement;
                return div.style.display = "none";
            };
        };
    };
};

// https://www.w3schools.com/howto/howto_js_todolist.asp

let oldCity = "";

// Create a new list item when clicking on the "Add" button
function editElement() {
    let replace = document.getElementsByClassName("replace");

    for (let i = 0; i < replace.length; i++) {
        replace[i].onclick = function() {

            let myInput = document.getElementById("myInput");
            myInput.style.display = "block";

            let replaceEdit = document.getElementById("replaceEdit");
            replaceEdit.style.display = "block";

            oldCity = this.parentElement;

            oldCity.setAttribute('id', 'byebyecity');
        }
    }

    // let inputValue = document.getElementById("myInput").value;
    // let t = document.createTextNode(inputValue);

    // if (inputValue === '') {
    //     alert("You must write something!");
    // } else {
    //     oldCity.replaceWith(t);
    // }
  }
editElement();

function addElement() {
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    let oldCityValue = document.getElementById("byebyecity").innerHTML;

    console.log(t)
    console.log(oldCity)
    console.log(oldCityValue)

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        if (confirm('Are you sure you want to edit this city?')) {
            return oldCity.replace(barcelona, t);
        };
    }
};

document.querySelector('#replaceEdit').onclick = function() {addElement()};