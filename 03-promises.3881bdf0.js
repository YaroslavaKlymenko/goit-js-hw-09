!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("6JpON");var a=document.querySelector(".form");a.addEventListener("submit",(function(n){var t=function(n){var t,a,l=o+(n-1)*i;(t=n,a=l,new Promise((function(e,n){setTimeout((function(){Math.random()>.3?e({position:t,delay:a}):n({position:t,delay:a})}),a)}))).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position;n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(l,"ms"))}))};n.preventDefault();for(var o=parseInt(a.elements.delay.value),i=parseInt(a.elements.step.value),l=parseInt(a.elements.amount.value),u=1;u<=l;u++)t(u)}))}();
//# sourceMappingURL=03-promises.3881bdf0.js.map
