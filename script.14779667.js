parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({62:[function(require,module,exports) {
module.exports="/javascript30/vitas-ahahah.6ac64367.wav";
},{}],63:[function(require,module,exports) {
module.exports="/javascript30/vitas-hahaha.41adc988.wav";
},{}],64:[function(require,module,exports) {
module.exports="/javascript30/vitas-blblbl.ea17f132.wav";
},{}],60:[function(require,module,exports) {

},{"./images/background.png":[["background.6b493f94.png",67],67]}],32:[function(require,module,exports) {
"use strict";var e=require("./sounds/vitas-ahahah.wav"),t=o(e),n=require("./sounds/vitas-hahaha.wav"),a=o(n),u=require("./sounds/vitas-blblbl.wav"),r=o(u);function o(e){return e&&e.__esModule?e:{default:e}}require("./style.css");var s=90,i=0,d=function(e,t){var n=t==s?0:.1;e.style.transitionDuration=n+"s",e.style.transform="rotate("+t+"deg)"},l=function(e){var t=document.querySelector(".second-hand"),n=e.getSeconds()/60*360+s;d(t,n)},c=function(e){var t=document.querySelector(".minute-hand"),n=e.getMinutes()/60*360+s;d(t,n)},f=function(e){var t=document.querySelector(".hour-hand"),n=e.getHours()/12*360+s;d(t,n)},v=function(e){l(e),c(e),f(e)},h=function(e){var n=e.getSeconds();if(n===i)new Audio(r.default).play();else if(n%2){new Audio(t.default).play()}else{new Audio(a.default).play()}};setInterval(function(){var e=new Date;v(e),h(e)},1e3);
},{"./sounds/vitas-ahahah.wav":62,"./sounds/vitas-hahaha.wav":63,"./sounds/vitas-blblbl.wav":64,"./style.css":60}]},{},[32])
//# sourceMappingURL=/javascript30/script.14779667.map