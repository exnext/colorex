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
        
        rainbow = document.createElement('div');
        gradient = document.createElement('div');
        main.append(rainbow, gradient);
        
        if (alphablend) {
            alpha = document.createElement('div');
            main.append(alpha);
        }
    } else {
        rainbow = getElement(picker.rainbow);
        gradient = getElement(picker.gradient);

        if (alphablend && picker.alpha) {
            alpha = getElement(picker.alpha);
        }
    }

    rainbow.classList.add('rainbow');
    gradient.classList.add('gradient');
    if (alpha) {
        alpha.classList.add('alpha');
    }

    let horizontalOrientation = getHorizontal(horizontal);
    if (main) {
        main.classList.toggle('column', horizontalOrientation.main);
    }
    rainbow.classList.toggle('horizontal', horizontalOrientation.rainbow);
    if (alpha) {
        alpha.classList.toggle('horizontal', horizontalOrientation.alpha);
    }

    function getElement(value) {
        if (typeof value === 'string') {
            return document.querySelector(value);
        } else if (value instanceof Element) {
            return value;
        }

        return null;
    }

    function getHorizontal(horizontal) {
        let result = {
            main: false,
            rainbow: false,
            alpha: false
        }

        if (typeof horizontal === 'boolean') {
            result = {
                main: horizontal,
                rainbow: horizontal,
                alpha: horizontal
            }
        } else {
            result = Object.assign(result, horizontal);
            result.main = result.rainbow && result.alpha;
        }

        return result;
    }

    return { rainbow, gradient, alpha };
}

export { createPickerElement as default, createPickerElement2 };