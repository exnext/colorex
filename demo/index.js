import colorex from '../src/colorex.js';
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

function addButtonColor(color) {
    if (buttonColors.indexOf(color) === -1) {
        buttonColors.push(color);

        let button = document.createElement('button');
        button.innerHTML = color;
        button.style.background = color;
        button.addEventListener('click', (e) => {
            colorPicker.color = e.target.innerHTML;
        });

        document.getElementById("colors").appendChild(button);
    }
}

testColors.forEach((color) => {
    addButtonColor(colorConvert(color).hex(false));
});

document.getElementById("color").addEventListener('change', (e) => {
    colorPicker.color = e.target.value;
});

let colorPicker = new colorex({
    picker: '#picker',
    // horizontal: true,
    alphablend: true,
    onChange: (result) => {
        document.getElementById("color").value = result.color;
        addButtonColor(result.color);
    }
});

colorPicker.color = '#FFC107';