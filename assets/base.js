!function(t){var n={};function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(i,o,function(n){return t[n]}.bind(null,o));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e(e.s=1)}([function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),o=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._monaEvents={}}return i(t,[{key:"emit",value:function(t){for(var n=arguments.length,e=Array(1<n?n-1:0),i=1;i<n;i++)e[i-1]=arguments[i];this._monaEvents[t]&&(this._monaEvents[t].forEach(function(t){t.fun.apply(t,e),0<t.count&&(t.count-=1)}),this._monaEvents[t]=this._monaEvents[t].filter(function(t){return 0!==t.count}))}},{key:"on",value:function(t,n){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:-1;if(!t)throw new Error("事件名不允许为空");if("number"==typeof a)throw new Error("事件名不允许为数字");var i=t.split("."),o=i[0];this._monaEvents[o]||(this._monaEvents[o]=[]),this._monaEvents[o].push({fun:n,count:e,key:i[1]})}},{key:"once",value:function(t,n){this.on(t,n,1)}},{key:"off",value:function(t,n){if(t){var e=t.split("."),i=e[0],o=e[1];if(this._monaEvents[i]){if(!o)return n?void(this._monaEvents[i]=this._monaEvents[i].filter(function(t){return t.fun!==n})):void(this._monaEvents[i]=void 0);if(o){if(n)return void(this._monaEvents[i]=this._monaEvents[i].filter(function(t){return t.key!==o&&t.fun===n}));this._monaEvents[i]=this._monaEvents[i].filter(function(t){return t.key!==o})}}}}}]),t}();n.default=o},function(t,n,e){"use strict";e.r(n);var i=e(0),o=e.n(i);function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}function a(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}e(2);var s=new(function(){function t(){var n,e,i;!function(n,e){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this),i=[],(e="toastList")in(n=this)?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i}var n,e;return n=t,(e=[{key:"show",value:function(t){this.node||(this.node=document.createElement("div"),this.node.className="capricorn-component-toast",document.body.appendChild(this.node)),"string"==typeof t&&(t=r({},{message:t})),this.toastList.push(t),this._item()}},{key:"clear",value:function(){this.toastList=[],this.node.innerText="",this.node.classList.add("hide")}},{key:"_item",value:function(){var t=this;if(0!==this.toastList.length&&!this.timer){this.node.classList.remove("hide");var n=this.toastList[0],e=n.message,i=n.duration,o=void 0===i?2e3:i;this.node.innerText=e,clearTimeout(this.timer),this.timer=setTimeout(function(){t.node.innerText="",t.toastList.shift(),0===t.toastList.length?t.node.classList.add("hide"):t._item()},o)}}}])&&a(n.prototype,e),t}());e(4),!window.Capricorn&&(window.Capricorn={}),window.toast=s,window.Capricorn.Events=o.a,window.Capricorn.events=new o.a},function(t,n){},,function(t,n){}]);