# colorex
Engine of color picker which you can use to create color picker control in any javascript framework.

## Including in a browser
```html
<link href="colorex.css" rel="stylesheet">
<script type='text/javascript' src='colorex.js'></script>
```

## Create simply component
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
```js
colorpicker.color = 'red';
colorpicker.color = '#00ff00';
colorpicker.color = 'rgb(0, 0, 255)';

let color = colorpicker.color; //#0000ff
```

## Create component with alphablend
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
```js
let config = {
    picker: document.getElementById("picker3"),
    color: '#760089'
};

let colorpicker = new colorex(config);

let color = colorpicker.color;
```

## Change event
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
```js
let config = {
    picker: document.querySelector('.picker5'),
    horizontal: true
};

let colorpicker = new colorex(config);
```

## Horizontal custom pickers
```js
let config = {
    picker: {
        rainbow: '#rainbow',
        gradient: document.getElementById('gradient'),
        alpha: document.querySelector('#alpha')
    },
    horizontal: { rainbow: false, alpha: alphablend }
};

let colorpicker = new colorex(config);
```

```html
<div class="colorex">
    <div>
        <div id="rainbow"></div>
        <div id="gradient"></div>
    </div>
    <div id="alpha"></div>
</div>
```

```css
.colorex *:not(#alpha) {
    display: flex;
}

.colorex {
    flex-direction: column;
    align-items: flex-end;    
}
```

## Pixelize
```js
let config = {
    picker: '.picker6',
    alphablend: true,
    pixelize: 10
};

let colorpicker = new colorex(config);
```

## Pixelize custom element
```js
let config = {
    picker: '.picker6',
    pixelize: { gradient: 10 }
};

let colorpicker = new colorex(config);
```

## Customize style
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