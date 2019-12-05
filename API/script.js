// update on dom load
window.onload= requestJSON;

//fetch data from Numbers API
function requestJSON(){
	fetch("https://numbersapi.p.rapidapi.com/random/trivia?max=20&fragment=true&min=10&json=true", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "numbersapi.p.rapidapi.com",
		"x-rapidapi-key": "fc632aecadmsh64aa553249c8038p111cc9jsn2d2f9680d60a"
	}
})
.then(response => response.json())
.then(gotJSON);
}  
    
function gotJSON(json) {
      console.log('Hello, gotJSON()!');
      console.log(json);
      console.log(json.text);
      console.log(`My id is ${json.number}!`);
  
  const luckyNum= document.getElementById('number')
  const numFact = document.getElementById('fact')

  const newH1 = document.createElement('h1');
  const newP = document.createElement('p');
  newH1.innerHTML = `<h1>Your lucky number today is  ${json.number}</h1>`;
  newP.innerHTML = `<p> ${json.number} is ${json.text} </p>`;
  luckyNum.appendChild(newH1);
  numFact.appendChild(newP);


}