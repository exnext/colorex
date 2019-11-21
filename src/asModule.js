function asModule(value, ) {
    // Node: Export function
    if (typeof module !== "undefined" && module.exports) {
        module.exports = value;
    }
    // AMD/requirejs: Define the module
    else if (typeof define === 'function' && define.amd) {
        define(function () { return value; });
    }
    // Browser: Expose to window
    else {
        window[name] = value;
    }
}

export default asModule;