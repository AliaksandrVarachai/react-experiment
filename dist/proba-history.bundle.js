/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 243);
/******/ })
/************************************************************************/
/******/ ({

/***/ 243:
/***/ (function(module, exports) {

eval("var appRoot = document.getElementById('app-root');\n\nvar page = document.getElementById('page');\n\nvar div = document.createElement('div');\n\nvar link1 = document.createElement('a');\nvar link2 = document.createElement('a');\nvar link3 = document.createElement('a');\nlink1.href = 'http://localhost:8080/proba1.html';\nlink2.href = window.location.href + '/2';\nlink3.href = window.location.href + '#3';\nlink1.onclick = navClick;\nlink2.onclick = navClick;\nlink3.onclick = navClick;\nlink1.appendChild(document.createTextNode('link #1'));\nlink2.appendChild(document.createTextNode('link #2'));\nlink3.appendChild(document.createTextNode('link #3'));\n\ndiv.appendChild(document.createElement('br'));\ndiv.appendChild(link1);\ndiv.appendChild(document.createElement('br'));\ndiv.appendChild(link2);\ndiv.appendChild(document.createElement('br'));\ndiv.appendChild(link3);\n\nappRoot.appendChild(div);\n\ndocument.getElementById('show-history').onclick = function (event) {\n  console.log('history=', history);\n  console.log('state=', history.state, 'title=', history.title, 'url=', history.url);\n  console.log('current=', location.href);\n};\n\nfunction navClick(event) {\n  event.preventDefault();\n  var target = event.target;\n  var state = { href: target.href };\n  var title = 'title=' + target.href;\n  var url = target.href;\n  history.pushState(state, title, url); //if history added with pushState method - the page does not reload!!!\n  page.innerHTML = JSON.stringify(state);\n}\n\ndocument.getElementById('next').onclick = function (event) {\n  history.forward();\n};\n\ndocument.getElementById('prev').onclick = function (event) {\n  history.back();\n};\n\nwindow.onpopstate = function (event) {\n  console.log('popstate, envet=', event);\n  //alert('popstate');\n};\n\nwindow.onhashchange = function (event) {\n  console.log('hashchange, event=', event);\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/proba-history.js\n// module id = 243\n// module chunks = 3\n\n//# sourceURL=webpack:///./src/proba-history.js?");

/***/ })

/******/ });