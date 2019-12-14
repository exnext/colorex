import colorConvert from './colorConvert.js';
import createPickerElement from './pickerConstructor.js';
import modularization from './modularization.js';

import gradientPicker from './pickers/gradientPicker.js';
import rainbowPicker from './pickers/rainbowPicker.js';
import alphaPicker from './pickers/alphaPicker.js';

function colorex(config) {
    let { gradient, rainbow, alpha } = createPickerElement(config);
    let pixelize = getPixelize(config.pixelize);
    
    let gp, rp, ap;
    
    rp = new rainbowPicker({ 
        element: rainbow,
        pixelize: pixelize.rainbow,
        click: (point, color) => {
            gp.setColor(color);
            if (ap) {
                ap.setColor(color);
            }
            
            if (config.onChange) {
                config.onChange({ color: this.color });
            }
        }
    });

    gp = new gradientPicker({ 
        element: gradient,
        pixelize: pixelize.gradient,
        click: (point, color) => {
            if (ap) {
                ap.setColor(color);
            }

            if (config.onChange) {
                config.onChange({ color: this.color });
            }
        }
    });
    
    if (alpha) {
        ap = new alphaPicker({
            element: alpha,
            pixelize: pixelize.alpha,
            click: (point, color) => {
                if (config.onChange) {
                    config.onChange({ color: this.color });
                }
            }
        });
    }

    Object.defineProperty(this, 'color', {
        get: () => {
            let rgb = colorConvert(gp.color).rgb();
            
            if (ap) {
                rgb.a = ap.alphaValue();
            }

            return colorConvert(rgb).hex(!!ap);
        },
        set: (value) => {
            rp.color = value;
            gp.color = value;
            if (ap) {
                ap.color = value;
            }
        }
    });

    this.color = config.color || "red";

    function getPixelize(pixelize) {
        let result = {
            rainbow: 0,
            gradient: 0,
            alpha: 0
        }

        if (typeof pixelize === 'number') {
            result = {
                rainbow: pixelize,
                gradient: pixelize,
                alpha: pixelize
            }
        } else {
            result = Object.assign(result, pixelize);
        }

        return result;
    }
}

modularization(colorex, 'colorex');

export default colorex;