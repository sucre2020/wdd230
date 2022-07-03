const requestURL = "./data.json";
const cards = document.querySelector(".cards");
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");



gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //uses json() method
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const business = jsonObject;
    business.forEach(displayBusiness);
  });

function displayBusiness(business) {
  // Create elements to add to the document
  let card = document.createElement("section");
  card.setAttribute("class", "dicard");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  p.setAttribute("class", "diaddress");
  let p1 = document.createElement("p");
  p1.setAttribute("class", "diphone");
  let p2 = document.createElement("p");
  p2.setAttribute("class", "diwebpage");
  let p3 = document.createElement("p");
  p3.setAttribute("class", "dirating");
  let img = document.createElement("img");
  img.setAttribute("src", business.image)
  console.log(business)

 
  h2.textContent = `${business.name}`;
  p.innerHTML = `${business.address}`;
  p1.innerHTML = `${business.phone}`;
  p2.innerHTML = `${business.website}`;
  p3.innerHTML = `${business.rating}`;
 

  // Add/append the section(card) with the h2 element
  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(p3);
 
  
// Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.cards").appendChild(card);
}



//last modication 
const lastmod = document.querySelector("#lastmod");
lastmod.textContent = document.lastModified;

const datefield = document.querySelector(".date");

//Derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;
// datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}