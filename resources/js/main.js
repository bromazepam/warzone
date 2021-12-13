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
    // {
    //     name: "Beachhead",
    //     top: 332,
    //     left: 679,
    // },
    // {
    //     name: "Military Base",
    //     top: 147,
    //     left: 474,
    // },
    // {
    //     name: "Salt Mine",
    //     top: 198,
    //     left: 633,
    // },
    // {
    //     name: "Array",
    //     top: 339,
    //     left: 599,
    // },
    // {
    //     name: "TV Station",
    //     top: 366,
    //     left: 521,
    // },
    // {
    //     name: "Air Port",
    //     top: 351,
    //     left: 273,
    // },
    // {
    //     name: "Super Store",
    //     top: 399,
    //     left: 329,
    // },
    // {
    //     name: "Factory",
    //     top: 428,
    //     left: 399,
    // },
    // {
    //     name: "Storage Town",
    //     top: 428,
    //     left: 246,
    // },
    // {
    //     name: "Stadium",
    //     top: 449,
    //     left: 612,
    // },
    // {
    //     name: "Lumber",
    //     top: 449,
    //     left: 756,
    // },
    // {
    //     name: "Hospital",
    //     top: 531,
    //     left: 458,
    // },
    // {
    //     name: "Boneyard",
    //     top: 530,
    //     left: 236,
    // },
    // {
    //     name: "Train Station",
    //     top: 560,
    //     left: 344,
    // },
    // {
    //     name: "Downtown",
    //     top: 566,
    //     left: 576,
    // },
    // {
    //     name: "Farmland",
    //     top: 557,
    //     left: 734,
    // },
    // {
    //     name: "Promenade East",
    //     top: 614,
    //     left: 431,
    // },
    // {
    //     name: "Promenade West",
    //     top: 638,
    //     left: 281,
    // },
    // {
    //     name: "Hills",
    //     top: 699,
    //     left: 342,
    // },
    // {
    //     name: "Park",
    //     top: 675,
    //     left: 548,
    // },
    // {
    //     name: "Port",
    //     top: 653,
    //     left: 657,
    // },
    // {
    //     name: "Prison",
    //     top: 732,
    //     left: 756,
    // },
];


const pin = document.getElementById("ping");
const jump = document.getElementById("whereTo");
const map = document.getElementById("map");
let li = document.createElement("li");

const IMAGE_WIDTH = 856;
const IMAGE_HEIGHT = 856;
pin.style.visibility= 'hidden';

jump.addEventListener("click", () => {
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

