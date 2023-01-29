let input = document.querySelector('input');
let boxContainer = document.querySelector('.box-container');

async function gettingData(e){
let data = await fetch("./infos/state_capitals.json");
let final = await data.json();
let val = e.target.value.trim();
let fin2 = val === ""  ? [] : final.filter(a => a.abbr.toLowerCase() === val || a.name.toLowerCase().includes(val)) || [];

initialize(fin2)
}


input.addEventListener('keydown', gettingData);

function initialize(arr){
boxContainer.innerHTML = "";
for(let i = 0; i < arr.length; i++){
    let box = document.createElement('div');
    box.className = "box";
    let name = document.createElement('div');
    name.className = "name";
    let nameSpan = document.createElement('span');
    let span = document.createElement('span');
    let locDiv = document.createElement('div');
    locDiv.className = "loc";
    let long = document.createElement('div');
    let lat = document.createElement('div');
    long.className ="long";
    lat.className = "lat";
    long.innerHTML = arr[i].long;
    lat.innerHTML = arr[i].lat;

    name.innerHTML = `<p>${arr[i].name} ${arr[i].abbr}  </p> <span> ${arr[i].capital} </span>`;
    long.innerHTML ="long : " +  arr[i].long ;
    lat.innerHTML = "lat : " + arr[i].lat;
locDiv.appendChild(long);
locDiv.appendChild(lat);
box.appendChild(name);
box.appendChild(locDiv);
boxContainer.appendChild(box);
}
}