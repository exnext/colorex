function createPickerElement({ picker, alphablend, horizontal } = {}) {
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

export default createPickerElement;