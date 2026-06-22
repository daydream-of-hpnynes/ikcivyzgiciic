// ELEMENTS

const startBtn = document.getElementById("startBtn");
const welcome = document.getElementById("welcome");

const pinPage = document.getElementById("pinPage");
const submitPin = document.getElementById("submitPin");

const pinInput = document.getElementById("pinInput");
const pinError = document.getElementById("pinError");

const mainContent = document.getElementById("mainContent");

const music = document.getElementById("bgMusic");

// START BUTTON

startBtn.addEventListener("click", () => {

welcome.style.display = "none";
pinPage.style.display = "flex";

});

// PIN CHECK

submitPin.addEventListener("click", () => {

const pin = pinInput.value;

if(pin === "2305"){

pinPage.style.display = "none";

mainContent.style.display = "block";

music.play();

launchHearts();

window.scrollTo({
top:0,
behavior:"smooth"
});

}else{

pinError.innerText =
"Hmm... that's not our little secret 🤎";

pinError.style.color = "#8d6e63";

shakeInput();

}

});

// ENTER KEY

pinInput.addEventListener("keypress",(e)=>{

if(e.key === "Enter"){
submitPin.click();
}

});

// SHAKE EFFECT

function shakeInput(){

pinInput.animate(

[
{transform:"translateX(0px)"},
{transform:"translateX(-8px)"},
{transform:"translateX(8px)"},
{transform:"translateX(-8px)"},
{transform:"translateX(8px)"},
{transform:"translateX(0px)"}
],

{
duration:400
}

);

}

// HEARTS

function launchHearts(){

for(let i=0;i<60;i++){

let heart = document.createElement("div");

heart.innerHTML = "🤎";

heart.style.position = "fixed";

heart.style.left =
Math.random()*100 + "vw";

heart.style.top = "100vh";

heart.style.fontSize =
(Math.random()*20+15)+"px";

heart.style.pointerEvents = "none";

heart.style.zIndex = "9999";

document.body.appendChild(heart);

heart.animate(

[
{
transform:"translateY(0)",
opacity:1
},

{
transform:
`translateY(-120vh)
translateX(${Math.random()*200-100}px)`,

opacity:0
}

],

{
duration:5000,
easing:"ease-out"
}

);

setTimeout(()=>{

heart.remove();

},5000);

}

}

// FALLING PETALS

function createPetals(){

setInterval(()=>{

const petal =
document.createElement("div");

petal.innerHTML = "🌸";

petal.style.position = "fixed";

petal.style.left =
Math.random()*100+"vw";

petal.style.top = "-20px";

petal.style.fontSize =
(Math.random()*15+15)+"px";

petal.style.pointerEvents = "none";

petal.style.zIndex = "-1";

document.body.appendChild(petal);

petal.animate(

[
{
transform:
"translateY(0) rotate(0deg)"
},

{
transform:
`translateY(110vh)
translateX(${Math.random()*100-50}px)
rotate(360deg)`
}

],

{
duration:
Math.random()*5000+5000
}

);

setTimeout(()=>{

petal.remove();

},10000);

},700);

}

createPetals();

// SCROLL REVEAL

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate(

[
{
opacity:0,
transform:"translateY(40px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],

{
duration:1000,
fill:"forwards"
}

);

}

});

});

document.querySelectorAll(".section").forEach(section=>{

observer.observe(section);

});
