var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=a||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,v=function(){return c.Date.now()};function p(t,e,n){var o,i,r,f,a,u,c=0,l=!1,p=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=o,r=i;return o=i=void 0,c=e,f=t.apply(r,n)}function h(t){return c=t,a=setTimeout(O,e),l?y(t):f}function j(t){var n=t-u;return void 0===u||n>=e||n<0||p&&t-c>=r}function O(){var t=v();if(j(t))return w(t);a=setTimeout(O,function(t){var n=e-(t-u);return p?d(n,r-(t-c)):n}(t))}function w(t){return a=void 0,b&&o?y(t):(o=i=void 0,f)}function T(){var t=v(),n=j(t);if(o=arguments,i=this,u=t,n){if(void 0===a)return h(u);if(p)return a=setTimeout(O,e),y(u)}return void 0===a&&(a=setTimeout(O,e)),f}return e=m(e)||0,g(n)&&(l=!!n.leading,r=(p="maxWait"in n)?s(m(n.maxWait)||0,e):r,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=i=a=void 0},T.flush=function(){return void 0===a?f:w(v())},T}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var a=i.test(t);return a||r.test(t)?f(t.slice(2),a?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(t,e,{leading:o,maxWait:e,trailing:i})};const b=document.querySelector(".feedback-form");b.addEventListener("input",e((function(t){y[t.target.name]=t.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),b.addEventListener("submit",(function(t){t.preventDefault(),console.log(y),t.target.reset(),localStorage.removeItem("feedback-form-state"),y={}}));let y={};!function(){try{const t=localStorage.getItem("feedback-form-state");t&&(y=JSON.parse(t),Object.entries(y).forEach((t=>{b.elements[t[0]].value=t[1]})))}catch(t){console.log(t)}}();
//# sourceMappingURL=03-feedback.03def627.js.map
