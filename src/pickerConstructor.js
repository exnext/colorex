function createPickerElement({ picker, horizontal, alphablend }) {
    if (!picker) {
        throw new Error('Picker field is required');
    }

    let mr, mg, ma;
    let main = getElement(picker);

    if (main) {
        main.classList.add('colorex');
       
        mg = document.createElement('div');
        mr = document.createElement('div');       
        if (alphablend) {
            ma = document.createElement('div');
        }

        if (horizontal) {
            main.classList.add('horizontal');
        }
    } else if (picker.rainbow && picker.gradient) {
        mg = getElement(picker.gradient);
        mr = getElement(picker.rainbow);
        if (alphablend) {
            ma = getElement(picker.alphablend);
        }
    } else {
        throw new Error('Picker field is incorrect');
    }

    mg.classList.add('picker');
    mr.classList.add('picker');
    if (ma) {
        ma.classList.add('picker');
    }

    if (horizontal) {       
        mg.classList.add('horizontal');
        mr.classList.add('horizontal');
        if (ma) {
            ma.classList.add('horizontal');
        }
    }

    let gradient = document.createElement('canvas');
    let rainbow = document.createElement('canvas');
    let sg = document.createElement('div');
    let sr = document.createElement('div');

    mg.classList.add('gradient');
    mr.classList.add('rainbow');
    sg.classList.add('selector');
    sr.classList.add('selector');

    let alpha, sa;
    if (ma) {
        alpha = document.createElement('canvas');
        sa = document.createElement('div');

        ma.classList.add('alpha');
        sa.classList.add('selector');

        ma.append(alpha, sa);
    }

    mg.append(gradient, sg);
    mr.append(rainbow, sr);
    
    if (main) {
        main.append(mr, mg);
        if (ma) {
            main.append(ma);
        }
    } else {
        mr.parentElement.classList.add('colorex');
        mg.parentElement.classList.add('colorex');
        if (ma) {
            ma.parentElement.classList.add('colorex');
        }
    }

    gradient.width = mg.clientWidth;
    gradient.height = mg.clientHeight;
    rainbow.width = mr.clientWidth;
    rainbow.height = mr.clientHeight;

    if (alpha && ma) {
        alpha.width = ma.clientWidth;
        alpha.height = ma.clientHeight;
    }

    function getElement(value) {
        if (typeof value === 'string') {
            return document.querySelector(value);
        } else if (value instanceof Element) {
            return value;
        }

        return null;
    }

    return { rainbow, gradient, alpha, sr, sg, sa };
}

export default createPickerElement;