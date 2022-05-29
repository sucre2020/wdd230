let t = parseFloat (document.querySelector("#t").textContent);
let s = parseFloat (document.querySelector("#s").textContent);

let windchill = "";

if (t <= 50 && s > 3){
    windchill = windChill(t,s);
    windchill = `${windchill}&#176;F`;
}else{
    windchill = "N/A";
}