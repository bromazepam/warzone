const locations = [
    {
        name: "Arsenal",
        top: 115,
        left: 286,
    },
    {
        name: "Arsenal",
        top: 102,
        left: 389,
    },
    {
        name: "Arsenal",
        top: 191,
        left: 290,
    },
    {
        name: "Ruins",
        top: 272,
        left: 184,
    },
    {
        name: "Ruins",
        top: 391,
        left: 252,
    },
    //todo add all locations
];


const pin = document.getElementById("ping");
const jump = document.getElementById("whereTo");
const map = document.getElementById("map");
let li = document.createElement("li");

const IMAGE_WIDTH = 856;
const IMAGE_HEIGHT = 856;
pin.style.visibility= 'hidden';

jump.addEventListener("click", () => {
    //todo make random location non repeating
    let location = locations[Math.floor(Math.random()*locations.length)];
    result.innerText = location.name;

    let nameOfTheLocation = location.name;
    let liNode = document.createElement("li");
    let textNode = document.createTextNode(nameOfTheLocation);

    liNode.appendChild(textNode);

    const { x, y, width, height } = map.getBoundingClientRect();

    const scaleX = width / IMAGE_WIDTH;
    const scaleY = height / IMAGE_HEIGHT;

    pin.style.visibility= 'visible';
    pin.style.top = `${(location.top * scaleY) + y - (pin.offsetHeight)}px`;
    pin.style.left = `${(location.left * scaleX) + x - (pin.offsetWidth / 2)}px`;
});

