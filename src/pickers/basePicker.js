function basePicker(element, horizontal) {
    let main = getPickerElement(element);
    let canvas = document.createElement('canvas');
    let selector = document.createElement('div');

    main.append(canvas, selector);

    canvas.width = main.clientWidth;
    canvas.height = main.clientHeight;

    function elements() {
        return {
            main,
            canvas,
            selector
        }
    }

    function size() {
        return {
            width: element.width,
            height: element.height
        }
    }
    
    function draw() {
        let ctx = element.getContext("2d");
        ctx.clearRect(0, 0, element.width, element.height);
        return ctx;
    }

    function click(x, y) {

    }

    function position(color) {

    }

    function getPickerElement(value) {
        if (typeof value === 'string') {
            return document.querySelector(value);
        } else if (value instanceof Element) {
            return value;
        }

        return null;
    }

    element.addEventListener("click", (event) => {
        click(event.offsetX, event.offsetY);
    }, false);
}

export default basePicker;