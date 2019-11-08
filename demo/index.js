import colorex from '../src/colorex.js';
import colorConvert from '../src/colorConvert.js';

let colors = document.getElementById("colors");
let ca = [];

[
    '#ff0000', '#ff003f', '#ff007f', '#ff0080', '#ff00cf',
    '#ff00ff', '#cf00ff', '#8000ff', '#7f00ff', '#3f00ff',
    '#0000ff', '#003fff', '#007fff', '#0080ff', '#00cfff',
    '#00ffff', '#00ffcf', '#00ff80', '#00ff7f', '#00ff3f',
    '#00ff00', '#3fff00', '#7fff00', '#80ff00', '#cfff00',
    '#ffff00', '#ffcf00', '#ff8000', '#ff7f00', '#ff3f00',
    '#ff0000'
].forEach((c) => {
    let cc = colorConvert(c).hex();
    ca.push(cc);

    let button = document.createElement('span');
    button.innerHTML = cc;
    button.style.background = cc;
    button.addEventListener('click', (e) => {
        colorPicker.Color = e.target.innerHTML;
    });

    colors.appendChild(button);
});

function rainbowEvent(obj) {

};

function gradientEvent(obj) {
    color.value = obj.color;

    if (ca.indexOf(obj.color) === -1) {
        ca.push(obj.color);

        let button = document.createElement('span');
        button.innerHTML = obj.color;
        button.style.background = obj.color;
        button.addEventListener('click', (e) => {
            colorPicker.Color = e.target.innerHTML;
        });

        colors.appendChild(button);
    }
};

let color = document.getElementById("color");

color.addEventListener('change', () => {
    colorPicker.Color = color.value;
});

let rainbow = document.getElementById("cpRainbow");
let gradient = document.getElementById("cpGradient");

let colorPicker = new colorex({
    rainbow: rainbow,
    gradient: gradient,
    rainbowEvent: rainbowEvent,
    gradientEvent: gradientEvent
});

colorPicker.Color = '#FFC107';