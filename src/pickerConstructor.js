function createPickerElement({ picker, horizontal, alphablend }) {
    if (!picker) {
        throw new Error('Picker field is required');
    }

    let main = getElement(picker);
    main.classList.add('colorex');
    if (horizontal) {
        main.classList.add('horizontal');
    }

    let mr, mg, ma;

    if (main) {
        mg = document.createElement('div');
        mr = document.createElement('div');
        if (alphablend) {
            ma = document.createElement('div');
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
    main.append(mr, mg);

    gradient.width = mg.clientWidth;
    gradient.height = mg.clientHeight;
    rainbow.width = mr.clientWidth;
    rainbow.height = mr.clientHeight;

    if (alpha && ma) {
        main.append(ma);
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

function createPickerElement2({ picker, alphablend, horizontal } = {}) {
    if (!picker) {
        throw new Error('Picker field is required');
    }

    let gradient, rainbow, alpha;

    let main = getElement(picker);
    if (main) {
        main.classList.add('colorex');
        
        gradient = document.createElement('div');
        rainbow = document.createElement('div');
        main.append(gradient, rainbow);
        
        if (alphablend) {
            alpha = document.createElement('div');
            main.append(alpha);
        }
    } else {
        gradient = getElement(picker.gradient);
        rainbow = getElement(picker.rainbow);

        if (alphablend && picker.alpha) {
            alpha = getElement(picker.alpha);
        }
    }

    gradient.classList.add('gradient');
    rainbow.classList.add('rainbow');
    if (alpha) {
        alpha.classList.add('alpha');
    }

    if (horizontal) {
        main.classList.add('horizontal');
        rainbow.classList.add('horizontal');
        if (alpha) {
            alpha.classList.add('horizontal');
        }        
    }

    function getElement(value) {
        if (typeof value === 'string') {
            return document.querySelector(value);
        } else if (value instanceof Element) {
            return value;
        }

        return null;
    }

    return { rainbow, gradient, alpha };
}

export { createPickerElement as default, createPickerElement2 };