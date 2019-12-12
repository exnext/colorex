# colorex

Engine of color picker which you can use to create color picker control in any javascript framework.

## Including in a browser

```html
<link href="colorex.css" rel="stylesheet">
<script type='text/javascript' src='colorex.js'></script>
```

## Create simply component

Example from below presents code to create simply component with rainbow and gradeint pickers.

```js
let config = {
    picker: '#picker1'
};

let colorpicker = new colorex(config);
```

```html
<div id="picker1"></div>
```

## Set and get color

Each object of colorex has color property, which we can use to set and get color value. Setter allow any html type which presents color. Getter return only heaxadecimal value.

```js
colorpicker.color = 'red';
colorpicker.color = '#00ff00';
colorpicker.color = 'rgb(0, 0, 255)';

let color = colorpicker.color; //#0000ff
```

## Create component with alphablend

Adding alphablend with true value, we create colorex component with alphablend picker. Getter of color property return hacadecimal value with alpha;

```js
let config = {
    picker: '.picker2',
    alphablend: true
};

let colorpicker = new colorex(config);

colorpicker.color = '#00ff007f';
colorpicker.color = 'rgb(0, 0, 255, 0.5)';

let color = colorpicker.color; //#0000ff7f
```

## Initialization start color

User can create component with start value of color. It is necesary if default color should not be visible on the start

```js
let config = {
    picker: document.getElementById("picker3"),
    color: '#760089'
};

let colorpicker = new colorex(config);

let color = colorpicker.color;
```

## Change event

All clicked on picker evokes onChange event. Argument has color filed with actual value of color for colorex component; 

```js
let config = {
    picker: document.querySelector('#picker4'),
    onChange: (result) => {
        let color = result.color;
    }
};

let colorpicker = new colorex(config);
```

## Horizontal pickers

Adding horizontal with true value, we can change rainbow and alphablend pickers orientation

```js
let config = {
    picker: document.querySelector('.picker5'),
    horizontal: true
};

let colorpicker = new colorex(config);
```

## Horizontal custom pickers

Changes orientation is possible for selcted picker. You must build yours own DOM for component and hint elements for part of component.

```js
let config = {
    picker: {
        rainbow: '#rainbow',
        gradient: document.getElementById('gradient'),
        alpha: document.querySelector('.alpha')
    },
    horizontal: { rainbow: false, alpha: true }
    // horizontal: { alpha: true }
};

let colorpicker = new colorex(config);
```

Below is example DOM of component and extend colorex class in CSS. Class colorex is necesaty on main element, but you can added new classes with overrite style values. If you don't set this, 
your control may visible bad.

```html
<div class="colorex">
    <div>
        <div id="rainbow"></div>
        <div id="gradient"></div>
    </div>
    <div class="alpha"></div>
</div>
```

```css
.colorex *:not(.alpha) {
    display: flex;
}

.colorex {
    flex-direction: column;
    align-items: flex-end;
}
```

## Pixelize

Pixelize is feature with step draw color on pickers and step changes values on them. Pixelize with 0 value work like config without pixalize field.

```js
let config = {
    picker: '.picker6',
    alphablend: true,
    pixelize: 10
};

let colorpicker = new colorex(config);
```

## Pixelize custom element

Similar to horizontal custom element, user can customize all pickers. On this situation own DOM build is not necesary.

```js
let config = {
    picker: '.picker6',
    pixelize: { gradient: 10 }
    // pixelize: { gradient: 10, alphablend: 0 }
    // pixelize: { rainbow: 20, gradient: 10, alphablend: 14 }
};

let colorpicker = new colorex(config);
```

## Customize style

To personalize layout of all component you should override style of css. You can look to file colorex.css which style you need do override. You can also presonalize layout by oberride below variabes which are predefined and used in colorex.css.

```css
.colorex {
    --border-width: 2px;
    --space-between: 16px;
    --gradient-selector-size: 30px;
    --gradient-size: 300px;
    --picker-selector-size: 14px;
    --picker-size: 40px;
    --alpha-background: #eeeeee;
}
```
