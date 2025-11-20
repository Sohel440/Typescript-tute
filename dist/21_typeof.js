"use strict";
function describeTypeof(n) {
    if (typeof n === 'string') {
        return 'string';
    }
    else if (typeof n === 'number') {
        return 'number';
    }
}
console.log(describeTypeof(10), describeTypeof('so'));
