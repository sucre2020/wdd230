// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url = `https:api.openweathermap.org/data/2.5/weather?q=Calabar&unit=Imperial&appid=f5f1726a88b8b68571ef6e987059a17b`;

apiFetch(url);

async function apiFetch(apiURL){
    try{
        const response = await fetch(apiURL);
        if (response.ok){
            const data = await response.json(); 
            //console.log(data); //temp
            // 
            displayResults(data); 
        } else{
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }
}
function displayResults(weatherData){
  currentTemp.innerHTML = weatherData.main.temp.toFixed(1);  


  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}

//js for toggle menu

    var MenuItems = document.getElementById("MenuItems");
    MenuItems.style.maxHeight = "0px"
    function menutoggle(){
        if(MenuItems.style.maxHeight == "0px")
        {
            MenuItems.style.maxHeight = "700px";
        }
        else
        {
            MenuItems.style.maxHeight = "0px";
        }
    }

//Temple inn & suites Temple page

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
  let img = document.createElement("img");
  img.setAttribute("src", business.image)
  console.log(business)

 
  h2.textContent = `${business.name}`;
  p.innerHTML = `${business.address}`;
 

  // Add/append the section(card) with the h2 element
  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(p);
 
  
// Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.cards").appendChild(card);
}