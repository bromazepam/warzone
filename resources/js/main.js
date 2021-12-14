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
    {
        name: "Docks",
        top: 120,
        left: 489,
    },
    {
        name: "Docks",
        top: 50,
        left: 480,
    },
    {
        name: "Docks",
        top: 120,
        left: 572,
    },
    {
        name: "Runway",
        top: 193,
        left: 683,
    },
    {
        name: "Runway",
        top: 142,
        left: 699,
    },
    {
        name: "Mines",
        top: 270,
        left: 276,
    },
    {
        name: "Mines",
        top: 182,
        left: 444,
    },
    {
        name: "Mines",
        top: 252,
        left: 438,
    },
    {
        name: "Mines",
        top: 302,
        left: 362,
    },
    {
        name: "Mines",
        top: 397,
        left: 351,
    },
    {
        name: "Peak",
        top: 322,
        left: 507,
    },
    {
        name: "Beachhead",
        top: 322,
        left: 672,
    },
    {
        name: "Beachhead",
        top: 246,
        left: 694,
    },
    {
        name: "Beachhead",
        top: 364,
        left: 713,
    },
    {
        name: "Beachhead",
        top: 303,
        left: 607,
    },
    {
        name: "Village",
        top: 359,
        left: 158,
    },
    {
        name: "Village",
        top: 413,
        left: 154,
    },
    {
        name: "Village",
        top: 464,
        left: 191,
    },
    {
        name: "Village",
        top: 467,
        left: 270,
    },
    {
        name: "Lagoon",
        top: 517,
        left: 97,
    },
    {
        name: "Lagoon",
        top: 561,
        left: 157,
    },
    {
        name: "Lagoon",
        top: 517,
        left: 180,
    },
    {
        name: "Power Plant",
        top: 676,
        left: 363,
    },
    {
        name: "Capital",
        top: 736,
        left: 460,
    },
    {
        name: "Capital",
        top: 731,
        left: 585,
    },
    {
        name: "Resort",
        top: 720,
        left: 679,
    },
    {
        name: "Airfield",
        top: 562,
        left: 260,
    },
    {
        name: "Airfield",
        top: 612,
        left: 262,
    },
    {
        name: "Fields",
        top: 530,
        left: 410,
    },
    {
        name: "Fields",
        top: 492,
        left: 522,
    },
    {
        name: "Fields",
        top: 592,
        left: 547,
    },
    {
        name: "Fields",
        top: 505,
        left: 647,
    },
    {
        name: "Sub Pen",
        top: 571,
        left: 720,
    },
];

const pin = document.getElementById("ping");
pin.style.visibility = 'hidden';

const drop = document.getElementById("whereTo");
const map = document.getElementById("map");
const IMAGE_WIDTH = 856;
const IMAGE_HEIGHT = 856;

let alreadyDropped = [];

drop.addEventListener("click", () => {
    locate();
});

function locate() {
    let location = locations[Math.floor(Math.random() * locations.length)];

    if (alreadyDropped.includes(location) && (alreadyDropped.length !== locations.length)) {
        locate();
    } else if (alreadyDropped.length === locations.length) {
        alreadyDropped = [];
        locate();
    } else {
        alreadyDropped.push(location);
        result.innerText = location.name;

        let nameOfTheLocation = location.name;
        let liNode = document.createElement("li");
        let textNode = document.createTextNode(nameOfTheLocation);

        liNode.appendChild(textNode);

        const {x, y, width, height} = map.getBoundingClientRect();
        const scaleX = width / IMAGE_WIDTH;
        const scaleY = height / IMAGE_HEIGHT;

        pin.style.visibility = 'visible';
        pin.style.top = `${(location.top * scaleY) + y - (pin.offsetHeight)}px`;
        pin.style.left = `${(location.left * scaleX) + x - (pin.offsetWidth / 2)}px`;
    }
}
