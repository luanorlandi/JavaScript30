parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({52:[function(require,module,exports) {

},{}],27:[function(require,module,exports) {
"use strict";require("./style.css");var e=function(e){e&&(e.currentTime=0,e.play())},t=function(e){e&&e.classList.add("playing")};window.addEventListener("keydown",function(n){var r=document.querySelector("div[data-key='"+n.keyCode+"'"),a=document.querySelector("audio[data-key='"+n.keyCode+"'");t(r),e(a)});var n=document.querySelectorAll(".key");n.forEach(function(n){return n.addEventListener("click",function(r){var a=n.getAttribute("data-key"),o=document.querySelector("audio[data-key='"+a+"'");t(n),e(o)})}),n.forEach(function(e){return e.addEventListener("transitionend",function(t){"transform"===t.propertyName&&e.classList.remove("playing")})});
},{"./style.css":52}]},{},[27])
//# sourceMappingURL=/Meme30/script.e3076451.map