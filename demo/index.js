import colorex from '../src/colorex.js';
import { colorex2 } from '../src/colorex.js';
import colorConvert from '../src/colorConvert.js';

const buttonColors = [];
const testColors = [
    '#ff0000', '#ff003f', '#ff007f', '#ff0080', '#ff00cf',
    '#ff00ff', '#cf00ff', '#8000ff', '#7f00ff', '#3f00ff',
    '#0000ff', '#003fff', '#007fff', '#0080ff', '#00cfff',
    '#00ffff', '#00ffcf', '#00ff80', '#00ff7f', '#00ff3f',
    '#00ff00', '#3fff00', '#7fff00', '#80ff00', '#cfff00',
    '#ffff00', '#ffcf00', '#ff8000', '#ff7f00', '#ff3f00'
]
const alphablend = true;

const colorPickers = [];

function addButtonColor(color) {
    if (buttonColors.indexOf(color) === -1) {
        buttonColors.push(color);

        let button = document.createElement('button');
        button.innerHTML = color;
        button.style.background = color;
        button.addEventListener('click', (e) => {
            colorPickers.forEach(function (colorPicker) {
                colorPicker.color = e.target.innerHTML;
            });
        });

        document.getElementById("colors").appendChild(button);
    }
}

testColors.forEach((color) => {
    addButtonColor(colorConvert(color).hex(alphablend));
});

document.getElementById("color").addEventListener('change', (e) => {
    colorPickers.forEach(function (colorPicker) {
        colorPicker.color = e.target.value;
    });
});


colorPickers.push(new colorex({
    picker: '#picker1',
    alphablend: alphablend,
    // color: '#E70000',
    color: '#760089',
    onChange: (result) => {
        document.getElementById("color").value = result.color;
        addButtonColor(result.color);
    }
}));


// colorPickers.push(new colorex({
//     picker: document.getElementById("picker2"),
//     alphablend: !alphablend,
//     color: '#FF8C00',
//     onChange: (result) => {
//         document.getElementById("color").value = result.color;
//         addButtonColor(result.color);
//     }
// }));


// colorPickers.push(new colorex({
//     picker: '#picker3',
//     horizontal: true,
//     alphablend: alphablend,
//     onChange: (result) => {
//         document.getElementById("color").value = result.color;
//         addButtonColor(result.color);
//     }
// }));

// colorPickers[colorPickers.length - 1].color = '#FFEF00';


// colorPickers.push(new colorex({
//     picker: document.getElementById("picker4"),
//     horizontal: true,
//     alphablend: !alphablend,
//     onChange: (result) => {
//         document.getElementById("color").value = result.color;
//         addButtonColor(result.color);
//     }
// }));

// colorPickers[colorPickers.length - 1].color = '#00811F';


// colorPickers.push(new colorex({
//     picker: '.picker5',
//     horizontal: false,
//     alphablend: alphablend,
//     onChange: (result) => {
//         document.getElementById("color").value = result.color;
//         addButtonColor(result.color);
//     }
// }));

// colorPickers[colorPickers.length - 1].color = '#0044FF';


// colorPickers.push(new colorex({
//     picker: '#picker6',
//     horizontal: false,
//     alphablend: !alphablend,
//     color: '#760089',
//     onChange: (result) => {
//         document.getElementById("color").value = result.color;
//         addButtonColor(result.color);
//     }
// }));

colorPickers.push(new colorex2({
    picker: '#picker7',
    // horizontal: false,
    alphablend: true,
    color: '#760089',
    onChange: (result) => {
        document.getElementById("color").value = result.color;
        addButtonColor(result.color);
    }
}));