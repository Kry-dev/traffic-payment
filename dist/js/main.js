/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/adress-modal/adress-modal.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/adress-modal/adress-modal.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {// (function() {
  //
  //     var $inputAuto = $('#str_address1');
  //
  //     var addrComponents = {
  //         streetNumber: {
  //             display: 'short_name',
  //             type: 'street_number'
  //         },
  //         streetName: {
  //             display: 'long_name',
  //             type: 'route'
  //         },
  //         cityName: {
  //             display: 'long_name',
  //             type: 'locality'
  //         },
  //         stateName: {
  //             display: 'short_name',
  //             type: 'administrative_area_level_1'
  //         },
  //         zipCode: {
  //             display: 'short_name',
  //             type: 'postal_code'
  //         }
  //     };
  //
  //     var autocomplete;
  //     var autocompleteOptions = {
  //         radius: 10,
  //         types: ['geocode']
  //     };
  //
  //
  //     function initAutocomplete() {
  //         autocomplete = new google.maps.places.Autocomplete($inputAuto[0], autocompleteOptions);
  //         autocomplete.addListener('place_changed', setAddress);
  //     };
  //
  //     function setAddress() {
  //         var place = autocomplete.getPlace().address_components;
  //
  //         var streetAddr = [addrComponents.streetNumber, addrComponents.streetName];
  //         var streetAddrDisplay = [];
  //
  //         // Add additional field values
  //
  //         place.forEach(function(placeComponent) {
  //             streetAddr.forEach(function(streetAddrComponent) {
  //                 if (placeComponent.types[0] === streetAddrComponent.type) {
  //                     streetAddrDisplay.push(placeComponent[streetAddrComponent.display]);
  //                 }
  //                 // else if <additional field values>
  //             });
  //         });
  //         var addrString = streetAddrDisplay.join(' ');
  //         $inputAuto.val(addrString);
  //     };
  //
  //     initAutocomplete();
  //
  // }());
});

/***/ }),

/***/ "./src/blocks/modules/data/regex.json":
/*!********************************************!*\
  !*** ./src/blocks/modules/data/regex.json ***!
  \********************************************/
/*! exports provided: AL, AK, AZ, AR, CA, CO, CT, DE, DC, FL, GA, GU, HI, ID, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND, OH, OK, OR, PA, PR, RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"AL\":{\"rule\":\"^[0-9]{1,8}$\",\"description\":[\"1-8 Numeric\"]},\"AK\":{\"rule\":\"^[0-9]{1,7}$\",\"description\":[\"1-7 Numbers\"]},\"AZ\":{\"rule\":\"(^[A-Z]{1}[0-9]{1,8}$)|(^[A-Z]{2}[0-9]{2,5}$)|(^[0-9]{9}$)\",\"description\":[\"1 Alpha + 1-8 Numeric\",\"2 Alpha + 2-5 Numeric\",\"9 Numeric\"]},\"AR\":{\"rule\":\"^[0-9]{4,9}$\",\"description\":[\"4-9 Numeric\"]},\"CA\":{\"rule\":\"^[A-Z]{1}[0-9]{7}$\",\"description\":[\"1 Alpha + 7 Numeric\"]},\"CO\":{\"rule\":\"(^[0-9]{9}$)|(^[A-Z]{1}[0-9]{3,6}$)|(^[A-Z]{2}[0-9]{2,5}$)\",\"description\":[\"9 Numeric\",\"1 Alpha + 3-6 Numeric\",\"2 Alpha + 2-5 Numeric\"]},\"CT\":{\"rule\":\"^[0-9]{9}$\",\"description\":[\"9 Numeric\"]},\"DE\":{\"rule\":\"^[0-9]{1,7}$\",\"description\":[\"1-7 Numeric\"]},\"DC\":{\"rule\":\"(^[0-9]{7}$)|(^[0-9]{9}$)\",\"description\":[\"7 Numeric\",\"9 Numeric\"]},\"FL\":{\"rule\":\"^[A-Z]{1}[0-9]{12}$\",\"description\":[\"1 Alpha + 12 Numeric\"]},\"GA\":{\"rule\":\"^[0-9]{7,9}$\",\"description\":[\"7-9 Numeric\"]},\"GU\":{\"rule\":\"^[A-Z]{1}[0-9]{14}$\",\"description\":[\"1 Alpha + 14 Numeric\"]},\"HI\":{\"rule\":\"(^[A-Z]{1}[0-9]{8}$)|(^[0-9]{9}$)\",\"description\":[\"1 Alpha + 8 Numeric\",\"9 Numeric\"]},\"ID\":{\"rule\":\"(^[A-Z]{2}[0-9]{6}[A-Z]{1}$)|(^[0-9]{9}$)\",\"description\":[\"2 Alpha + 6 Numeric + 1 Alpha\",\"9 Numeric\"]},\"IL\":{\"rule\":\"^[A-Z]{1}[0-9]{11,12}$\",\"description\":[\"1 Alpha + 11-12 Numeric\"]},\"IN\":{\"rule\":\"(^[A-Z]{1}[0-9]{9}$)|(^[0-9]{9,10}$)\",\"description\":[\"1 Alpha + 9 Numeric\",\"9-10 Numeric\"]},\"IA\":{\"rule\":\"^([0-9]{9}$)|([0-9]{3}[A-Z]{2}[0-9]{4})$\",\"description\":[\"9 Numeric\",\"3 Numeric + 2 Alpha + 4 Numeric\"]},\"KS\":{\"rule\":\"(^([A-Z]{1}[0-9]{1}){2}[A-Z]{1}$)|(^[A-Z]{1}[0-9]{8}$)|(^[0-9]{9}$)\",\"description\":[\"1 Alpha + 1 Numeric + 1 Alpha + 1 Numeric + 1 Alpha\",\"1 Alpha + 8 Numeric\",\"9 Numeric\"]},\"KY\":{\"rule\":\"(^[A-Z]{1}[0-9]{8,9}$)|(^[0-9]{9}$)\",\"description\":[\"1 Alpha + 8-9 Numeric\",\"9 Numeric\"]},\"LA\":{\"rule\":\"^[0-9]{1,9}$\",\"description\":[\"1-9 Numeric\"]},\"ME\":{\"rule\":\"(^[0-9]{7,8}$)|(^[0-9]{7}[A-Z]{1}$)\",\"description\":[\"7-8 Numeric\",\"7 Numeric + 1 Alpha\"]},\"MD\":{\"rule\":\"^[A-Z]{1}[0-9]{12}$\",\"description\":[\"1Alpha+12Numeric\"]},\"MA\":{\"rule\":\"(^[A-Z]{1}[0-9]{8}$)|(^[A-Z]{2}[0-9]{7}$)|(^[0-9]{9}$)\",\"description\":[\"1 Alpha + 8 Numeric\",\"2 Alpha + 7 Numeric\",\"9 Numeric\"]},\"MI\":{\"rule\":\"(^[A-Z]{1}[0-9]{10}$)|(^[A-Z]{1}[0-9]{12}$)\",\"description\":[\"1 Alpha + 10 Numeric\",\"1 Alpha + 12 Numeric\"]},\"MN\":{\"rule\":\"^[A-Z]{1}[0-9]{12}$\",\"description\":[\"1 Alpha + 12 Numeric\"]},\"MS\":{\"rule\":\"^[0-9]{9}$\",\"description\":[\"9 Numeric\"]},\"MO\":{\"rule\":\"(^[A-Z]{1}[0-9]{5,9}$)|(^[A-Z]{1}[0-9]{6}[R]{1}$)|(^[0-9]{3}[A-Z]{1}[0-9]{6}$)|(^[0-9]{8}[A-Z]{2}$)|(^[0-9]{9}[A-Z]{1}$)|(^[0-9]{9}$)\",\"description\":[\"1 Alpha + 5-9 Numeric\",\"1 Alpha + 6 Numeric + 'R'\",\"8 Numeric + 2 Alpha\",\"9 Numeric + 1 Alpha\",\"9 Numeric\",\"3 Numeric + 1 Alpha + 6 Numeric\"]},\"MT\":{\"rule\":\"(^[A-Z]{1}[0-9]{8}$)|(^[0-9]{13}$)|(^[0-9]{9}$)|(^[0-9]{14}$)\",\"description\":[\"1 Alpha + 8 Numeric\",\"13 Numeric\",\"9 Numeric\",\"14 Numeric\"]},\"NE\":{\"rule\":\"(^[0-9]{1,7}$)|(^[A-Z]{1}[0-9]{6,8}$)\",\"description\":[\"1-7 Numeric\",\"1Alpha+6-8Numeric\"]},\"NV\":{\"rule\":\"(^[0-9]{9,10}$)|(^[0-9]{12}$)|(^[X]{1}[0-9]{8}$)\",\"description\":[\"9 Numeric\",\"10 Numeric\",\"12 Numeric\",\"'X' + 8 Numeric\"]},\"NH\":{\"rule\":\"(^[0-9]{2}[A-Z]{3}[0-9]{5}$)|(^[A-Z]{3}[0-9]{8}$)\",\"description\":[\"2 Numeric + 3 Alpha + 5 Numeric\"]},\"NJ\":{\"rule\":\"^[A-Z]{1}[0-9]{14}$\",\"description\":[\"1 Alpha + 14 Numeric\"]},\"NM\":{\"rule\":\"^[0-9]{8,9}$\",\"description\":[\"8 Numeric\",\"9 Numeric\"]},\"NY\":{\"rule\":\"(^[A-Z]{1}[0-9]{7}$)|(^[A-Z]{1}[0-9]{18}$)|(^[0-9]{8}$)|(^[0-9]{9}$)|(^[0-9]{16}$)|(^[A-Z]{8}$)\",\"description\":[\"1 Alpha + 7 Numeric\",\"1 Alpha + 18 Numeric\",\"8 Numeric\",\"9 Numeric\",\"16 Numeric\",\"8 Alpha\"]},\"NC\":{\"rule\":\"^[0-9]{1,12}$\",\"description\":[\"1-12 Numeric\"]},\"ND\":{\"rule\":\"(^[A-Z]{3}[0-9]{6}$)|(^[0-9]{9}$)\",\"description\":[\"3 Alpha + 6 Numeric\",\"9 Numeric\"]},\"OH\":{\"rule\":\"(^[A-Z]{1}[0-9]{4,8}$)|(^[A-Z]{2}[0-9]{3,7}$)|(^[0-9]{8}$)\",\"description\":[\"1 Alpha + 4-8 Numeric\",\"2 Alpha + 3-7 Numeric\",\"8 Numeric\"]},\"OK\":{\"rule\":\"(^[A-Z]{1}[0-9]{9}$)|(^[0-9]{9}$)\",\"description\":[\"1 Alpha + 9 Numeric\",\"9 Numeric\"]},\"OR\":{\"rule\":\"(^[0-9]{1,9}$)|(^[AB][0-9]{6}$)\",\"description\":[\"1-9 Numeric\",\"A+6 Numeric\",\"B+6 Numeric\"]},\"PA\":{\"rule\":\"^[0-9]{8}$\",\"description\":[\"8 Numeric\"]},\"PR\":{\"rule\":\"(^[0-9]{9}$)|(^[0-9]{5,7}$)\",\"description\":[\"5-7 Numeric\",\"9 Numeric\"]},\"RI\":{\"rule\":\"^([0-9]{7,8}$)|(^[A-Z]{1}[0-9]{6}$)\",\"description\":[\"7-8 Numeric\",\"1 Alpha + 6 Numeric\"]},\"SC\":{\"rule\":\"^[0-9]{5,11}$\",\"description\":[\"5-11 Numeric\"]},\"SD\":{\"rule\":\"(^[0-9]{6,10}$)|(^[0-9]{12}$)\",\"description\":[\"6-10 Numeric\",\"12 Numeric\"]},\"TN\":{\"rule\":\"^[0-9]{7,9}$\",\"description\":[\"7-9 Numeric\"]},\"TX\":{\"rule\":\"^[0-9]{7,8}$\",\"description\":[\"7-8 Numeric\"]},\"UT\":{\"rule\":\"^[0-9]{4,10}$\",\"description\":[\"4-10 Numeric\"]},\"VT\":{\"rule\":\"(^[0-9]{8}$)|(^[0-9]{7}[A]$)\",\"description\":[\"8 Numeric\",\"7 Numeric + 'A'\"]},\"VA\":{\"rule\":\"(^[A-Z]{1}[0-9]{8,11}$)|(^[0-9]{9}$)\",\"description\":[\"1 Alpha + 8 Numeric\",\"1 Alpha + 9 Numeric\",\"1 Alpha + 10 Numeric\",\"1 Alpha + 11 Numeric\",\"9 Numeric\"]},\"WA\":{\"rule\":\"^(?=.{12}$)[A-Z]{1,7}[A-Z0-9\\\\*]{4,11}$\",\"description\":[\"1-7 Alpha + any combination of Alpha, Numeric, and * for a total of 12 characters\"]},\"WV\":{\"rule\":\"(^[0-9]{7}$)|(^[A-Z]{1,2}[0-9]{5,6}$)\",\"description\":[\"7 Numeric\",\"1-2 Alpha + 5-6 Numeric\"]},\"WI\":{\"rule\":\"^[A-Z]{1}[0-9]{13}$\",\"description\":[\"1 Alpha + 13 Numeric\"]},\"WY\":{\"rule\":\"^[0-9]{9,10}$\",\"description\":[\"9-10 Numeric\"]}}");

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/locked/locked.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/locked/locked.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.locked').popover();
});

/***/ }),

/***/ "./src/blocks/modules/payment/payment.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/payment/payment.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
// import { isValidLicense, isValidOrReturnDescription } from "./drive-license-validation";

window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a; // https://github.com/gas-buddy/usdl-regex
// https://ntsi.com/drivers-license-format/

var regs = __webpack_require__(/*! ../data/regex.json */ "./src/blocks/modules/data/regex.json");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  function isValidLicense(state, number) {
    var key = (state || '').toUpperCase();

    if (!regs[key]) {
      throw new Error('Invalid state supplied');
    }

    var re = new RegExp(regs[state].rule, 'i');

    if (re.test(number)) {
      return true;
    }

    return false;
  }

  function isValidOrReturnDescription(state, number) {
    return isValidLicense(state, number) || regs[state].description;
  }
  /** INIT GOOGLE AUTOCOMPLEET */


  var placeSearch;
  var autocomplete;
  var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'long_name',
    country: 'long_name',
    postal_code: 'short_name'
  };

  function initialize() {
    // Create the autocomplete object, restricting the search
    // to geographical location types.
    autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
      types: ['geocode']
    });
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
      fillInAddress();
    });
    var autocompleteinput = document.getElementById('autocomplete');
    autocompleteinput.addEventListener('focus', geolocate, true);
  } // [START region_fillform]


  function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();

    for (var component in componentForm) {
      document.getElementById(component).value = '';
      document.getElementById(component).disabled = false;
    } // Get each component of the address from the place details
    // and fill the corresponding field on the form.


    for (var i = 0; i < place.address_components.length; i++) {
      console.log(place.address_components);
      var addressType = place.address_components[i].types[0];

      if (componentForm[addressType]) {
        var val = place.address_components[i][componentForm[addressType]];
        var element = document.getElementById(addressType);
        element.value = val;

        if (addressType == 'administrative_area_level_1' || addressType == 'country') {
          var valSecond = place.address_components[i].short_name;
          element.setAttribute('data-code', valSecond);
          element.setAttribute('data-name', val);
        }
      }
    }
  }

  function geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var geolocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy
        });
        autocomplete.setBounds(circle.getBounds());
      });
    }
  }

  initialize();
  /** INIT DATE FIELDS */

  function initializeDate() {
    var dateMonth = document.getElementById('date-month');
    var dateDay = document.getElementById('date-day');
    var dateYear = document.getElementById('date-year');
    var Today = new Date();
    var minYear = Today.getYear() - 16 + 1900;
    var maxYear = Today.getYear() - 100 + 1900; // console.log('min year', minYear);
    // console.log('max year', maxYear);

    for (var i = minYear; i >= maxYear; i--) {
      var opt = document.createElement('option');
      opt.value = i;
      opt.innerHTML = i;
      dateYear.appendChild(opt);
    }

    var aMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var nMonths = 12;

    for (var _i = 1; _i <= nMonths; _i++) {
      var _opt = document.createElement('option');

      if (_i < 10) {
        _opt.innerHTML = "0" + _i;
        _opt.value = "0" + _i;

        _opt.setAttribute('value', "0" + _i);

        _opt.setAttribute('data-number', "0" + _i);

        dateMonth.appendChild(_opt);
      } else {
        _opt.innerHTML = _i;
        _opt.value = _i;

        _opt.setAttribute('data-number', _i);

        dateMonth.appendChild(_opt);
      }
    }

    var nDays = 31;

    for (var _i2 = 1; _i2 <= nDays; _i2++) {
      var _opt2 = document.createElement('option');

      if (_i2 < 10) {
        _opt2.innerHTML = "0" + _i2;
        _opt2.value = "0" + _i2;

        _opt2.setAttribute('value', "0" + _i2);

        _opt2.setAttribute('data-number', "0" + _i2);
      } else {
        _opt2.value = _i2;
        _opt2.innerHTML = _i2;

        _opt2.setAttribute('value', _i2);

        _opt2.setAttribute('data-number', _i2);
      }

      dateDay.appendChild(_opt2);
    }

    dateMonth.addEventListener('change', changeDateCount, true);
    dateYear.addEventListener('change', changeDateCount, true);
    dateDay.addEventListener('change', changeDateDay, true);

    function changeDateCount(event) {
      var dateDay = document.getElementById('date-day');
      var selectedYear = document.getElementById('date-year').value;
      var selectedMonthElement = document.getElementById('date-month');
      var selectedMonth = selectedMonthElement.options[selectedMonthElement.selectedIndex].getAttribute('value');

      if (selectedYear && selectedMonth) {
        var daysInMoth = getDaysInMonth(selectedMonth, selectedYear);
        dateDay.innerHTML = '';

        for (var _i3 = 1; _i3 <= daysInMoth; _i3++) {
          var _opt3 = document.createElement('option');

          if (_i3 < 10) {
            _opt3.innerHTML = "0" + _i3;
            _opt3.value = "0" + _i3;

            _opt3.setAttribute('value', "0" + _i3);

            _opt3.setAttribute('data-number', "0" + _i3);
          } else {
            _opt3.value = _i3;
            _opt3.innerHTML = _i3;

            _opt3.setAttribute('value', _i3);

            _opt3.setAttribute('data-number', _i3);
          }

          dateDay.appendChild(_opt3);
        }
      }
    }

    function changeDateDay(event) {
      console.log(event);
    }

    function getDaysInMonth(month, year) {
      // Here January is 1 based
      // Day 0 is the last day in the previous month
      return new Date(year, month, 0).getDate();
    }
  }

  initializeDate();
  /** INIT PHONE AND ZIP FIELDS EDIT */

  function PhoneZipVlidation() {
    document.getElementById('phone').addEventListener('input', function (e) {
      var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      e.target.value = !x[2] ? x[1] : "".concat(x[1], " ").concat(x[2]).concat(x[3] ? "-".concat(x[3]) : '');
    });
    var phone = document.getElementById('phone');
    var postalCode = document.getElementById('postal_code');
    postalCode.addEventListener('change', function () {
      var postalCode = document.getElementById('postal_code');
      postalCode.value = postalCode.value.replace(/[^0-9]/g, '');
    });
    postalCode.addEventListener('keyup', function (e) {
      var val = postalCode.value.replace(/\D/g, '');

      if (val.length > 5) {
        val = val.slice(0, 5);
        postalCode.value = val;
      }

      postalCode.value = val;
    });
  }

  PhoneZipVlidation();
  var $save = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#action-save');
  var $reset = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#action-reset');
  var $edit = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#action-edit');
  var $autocomplete = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#autocomplete-edit');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '#action-save', function (e) {
    if (!$autocomplete.hasClass('disabled')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#autocomplete').prop('disabled', true);
      $autocomplete.find('input').prop('disabled', true);
      $autocomplete.find('select').prop('disabled', true);
      $autocomplete.addClass('disabled');
      $autocomplete.hide('slow');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '#action-edit', function (e) {
    if ($autocomplete.hasClass('disabled')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#autocomplete').prop('disabled', false);
      $autocomplete.find('input').prop('disabled', false);
      $autocomplete.find('select').prop('disabled', false);
      $autocomplete.removeClass('disabled');
      $autocomplete.show('slow');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '#action-reset', function (e) {
    if ($autocomplete.hasClass('disabled')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#autocomplete').prop('disabled', false);
      $autocomplete.find('input').prop('disabled', false);
      $autocomplete.find('select').prop('disabled', false);
      $autocomplete.removeClass('disabled');
      $autocomplete.show('slow');
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#autocomplete').val('');
    $autocomplete.find('input').val('');
    $autocomplete.find('select').val('');
  });

  function countyJSON() {
    var сountyUrl = "".concat(window.location.href, "../data/county.json"); // create select fields for County/Court of Violation

    function setDefaultSelect(idElement) {
      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var text = arguments.length > 2 ? arguments[2] : undefined;
      var value = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var selectElement = document.getElementById(idElement);
      var firstDefaultOption = document.createElement('option');
      selectElement.length = position;
      firstDefaultOption.text = text;
      firstDefaultOption.value = value;
      selectElement.add(firstDefaultOption);
      selectElement.selectedIndex = 0;
      return selectElement;
    }

    var selectCounty = setDefaultSelect('county', 0, 'Select County');
    var selectCourt = setDefaultSelect('court', 0, 'Select Court');
    var selectLEA = setDefaultSelect('lea', 0, 'Select LEA'); // function Get Court name from array county.json

    function getCourtValue(obj, keyText) {
      if (Array.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
          if (obj[i].name === keyText) {
            return obj[i].court;
          }
        }
      }
    } // function Get LEA name from array county.json


    function getLEAValue(array, keyText) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].courtName === keyText) {
          return array[i].lea;
        }
      }
    } // function reset selected option in select to 1st option, with dafault value=""


    function resetSelectElement(el) {
      el.options.length = 1;
      el.selectedIndex = 1; // first option is selected, or// -1 for no option selected
    } // function to enable select field


    function enableSelectElement(field) {
      field.disabled = false;
    } // function to disable select field


    function disableSelectElement(field) {
      field.disabled = true;
    } // function to create option list to into select


    function createOptionsList(obj, selectField) {
      var optionCounty;

      for (var i = 0; i < obj.length; i++) {
        optionCounty = document.createElement('option');
        optionCounty.text = obj[i].name;
        optionCounty.value = obj[i].name;
        selectField.add(optionCounty);
      }
    }

    var request = new XMLHttpRequest(); // get data from сountyUrl (county.json) by AJAX request

    request.open('GET', сountyUrl, true);

    request.onload = function () {
      if (request.status === 200) {
        var data = JSON.parse(request.responseText);
        createOptionsList(data, selectCounty); //Build Select County options list

        var courtArray = [];
        var LEAArray = []; // add event when select County

        selectCounty.addEventListener('change', function () {
          var selectedCountyVal = selectCounty.value;
          resetSelectElement(selectCourt);
          enableSelectElement(selectCourt); //enable select id = "court"

          if (selectedCountyVal.length !== 0 && selectCounty.value !== 'Los Angeles') {
            disableSelectElement(selectLEA);
            courtArray = getCourtValue(data, selectedCountyVal); // get court array from json
            //build select options for court select filed

            for (var i = 0; i < courtArray.length; i++) {
              var optionCourt = document.createElement('option');
              optionCourt.text = courtArray[i];
              optionCourt.value = courtArray[i];
              selectCourt.add(optionCourt);
            }
          } else if (selectCounty.value == 'Los Angeles') {
            resetSelectElement(selectCourt);
            enableSelectElement(selectCourt);
            LEAArray = getCourtValue(data, selectedCountyVal);
            selectCourt.addEventListener('change', function () {
              var selectedCourtVal = selectCourt.value;
              var listLEAOptions = getLEAValue(LEAArray, selectedCourtVal); // if ((selectedCourtVal !== 0) || (selectedCourtVal !== '')) {

              if (selectedCourtVal.length !== 0) {
                resetSelectElement(selectLEA);
                enableSelectElement(selectLEA);

                for (var _i4 = 0; _i4 < listLEAOptions.length; _i4++) {
                  var _optionCourt = document.createElement('option');

                  _optionCourt.text = listLEAOptions[_i4];
                  _optionCourt.value = listLEAOptions[_i4];
                  selectLEA.add(_optionCourt);
                }
              } else {
                resetSelectElement(selectLEA);
                disableSelectElement(selectLEA);
              }
            });

            for (var _i5 = 0; _i5 < LEAArray.length; _i5++) {
              //build select options for court select filed
              var _optionCourt2 = document.createElement('option');

              var optionLEA = document.createElement('option');
              _optionCourt2.text = LEAArray[_i5].courtName;
              _optionCourt2.value = LEAArray[_i5].courtName;
              optionLEA.text = LEAArray[_i5].lea;
              selectCourt.add(_optionCourt2);
            }
          } else {
            disableSelectElement(selectCourt);
            disableSelectElement(selectLEA);
          }
        });
      } else {
        console.log('there is no county.json file');
      }
    };

    request.onerror = function () {
      console.error('An error occurred fetching the JSON from ' + сountyUrl);
    };

    request.send();
  }

  countyJSON(); //Init JSON county
  // $('body').on('click', '#submit', (e) => {
  //     e.preventDefault();
  //     FormValidation(e);
  // });
  //
  // $('#address').on('submit', (e) => {
  //     e.preventDefault();
  //     FormValidation(e);
  // });
  //
  // function FormValidation(event) {
  //     let isValid = false;
  //     const $form = $('form#address');
  //     const selectorsForValidation = $form.find('select, input, textarea');
  //     const $selectorsForValidation = [...selectorsForValidation];
  //     console.log($selectorsForValidation);
  //
  //     $selectorsForValidation.forEach((element) => {
  //         const $element = $(element);
  //         const elementId = $element.attr('id');
  //         const $closestError = $element.closest('.form-group').find('.errorTxt');
  //         console.warn(elementId);
  //         console.log($element);
  //         const elementValue = $element.val();
  //
  //         //example
  //         if (!elementValue) {
  //             console.error('element without value');
  //             $closestError.html(`element without value`);
  //             isValid = false;
  //             return false; // stop and exit validation
  //         }
  //
  //         // console.log('$element value', elementValue);
  //         const elementValueLength = elementValue.length;
  //         // console.log('$element value', elementValueLength);
  //
  //         if (elementValueLength <= 2) {
  //             console.error('element lenght must be more that 2 chars....');
  //             $closestError.html(`element lenght must be more that 2 chars....`);
  //             isValid = false;
  //             return false; // stop and exit validation
  //         }
  //         //phone
  //         const $phone = $('#phone');
  //         const phoneValue = $phone.val();
  //         const phoneValueLength = phoneValue.length;
  //         const phonePattern = new RegExp('^\\d\W+$'); // regexp pattern
  //         console.log(phonePattern.test(phoneValue));
  //         // $phone.val('Your phone number must be 10 digits');
  //
  //         if (phoneValueLength < 10) {
  //             console.error('Your phone number must be 10 digits');
  //             $closestError.html(`Your phone number must be 10 digits`);
  //             isValid = false;
  //             return false; // stop and exit validation
  //         } else {
  //             isValid = true;
  //         }
  //         //DOB select fields
  //         const $month = $('month');
  //         const monthVal = $month.val();
  //         const $day = $('day');
  //         const dayVal = $day.val();
  //         const $year = $('year');
  //         const $DOBVal ="";
  //         const Today = new Date();
  //         console.log(Today);
  //         const minYear = Today.getYear() - 16 + 1900;
  //         const maxYear = Today.getYear() - 100 + 1900;
  //         // console.log('min year', minYear);
  //         // console.log('max year', maxYear);
  //         // example custom validation
  //         const $postal_code = $('#postal_code');
  //         const postal_code_value = $postal_code.val();
  //         const postal_code_pattern = new RegExp('^\\d+$'); // regexp pattern
  //         console.log(postal_code_pattern.test(postal_code_value));
  //
  //         if (postal_code_pattern.test(postal_code_value) === false) {
  //             console.error('element must contain only numbers');
  //             $closestError.html(`element must contain only numbers`);
  //             isValid = false;
  //             return false; // stop and exit validation
  //         }
  //         // if all validations is ok - set isValid == true
  //         isValid == true;
  //
  //     });
  //
  //
  //     if (!isValid) {
  //         return false;
  //     }
  //
  //     console.log('form valid, proceed submit data');
  // }
  //     $.validator.setDefaults({
  //         debug: true,
  //         success: "valid"
  //     });

  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.validator.addMethod("dob", function (value, element) {
    var result = true;
    var ageMin = 16;
    var ageMax = 100; //is the date valid?
    //is it within the allowed range

    var myDate = value.split("/"); // console.log(myDate);
    // var myDate = value;

    var subDay = myDate[0];
    var subMonth = myDate[1] - 1;
    var subYear = myDate[2];
    var subDate = new Date(subYear, subMonth, subDay);
    console.log(subYear); // this will "correct" any out of range input

    var calcDay = subDate.getDate();
    var calcMonth = subDate.getMonth();
    var calcYear = subDate.getFullYear(); // this checks to see if any of the submitted input was out of range
    // comment this out to ignore the discrepancy if you want to set a "corrected" value below

    function isValidDate(strDate) {
      var myDateStr = new Date(strDate);

      if (!isNaN(myDateStr.getMonth())) {
        return true;
      }

      return false;
    }

    console.log(isValidDate(value));

    if (calcDay != subDay || calcMonth != subMonth || calcYear != subYear) {
      console.log(calcDay, subDay, calcMonth, subMonth, calcYear, subYear);
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.validator.messages.dob = "Invalid date";
      result = false;
    }

    if (result) {
      var currDate = new Date();
      var currYear = currDate.getFullYear();
      var currMonth = currDate.getMonth();
      var currDay = currDate.getDate();
      var age = currYear - subYear;
      console.log('age:', age);

      if (subMonth > currMonth) {
        age = age - 1; // next birthday not yet reached
      } else if (subMonth == currMonth && currDay < subDay) {
        age = age - 1;
      }

      if (ageMin != undefined) {
        if (age < ageMin) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default.a.validator.messages.dob = "You must be at least 16 years old to complete our course";
          result = false;
          console.log('validate bad');
        }
      }

      if (ageMax != undefined) {
        if (age >= ageMax) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default.a.validator.messages.dob = "Please select a valid Date of Birth";
          result = false;
          console.log('validate bad');
        }
      }

      console.log('validate good');
    }

    console.log(result);
    console.log('validate bad');
    return result;
  }, "Please enter a date in the format DD/MM/YYYY");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#address").validate({
    successClass: "valid-feedback",
    errorClass: "invalid-feedback",
    ignore: ":hidden",
    rules: {
      phone: {
        required: true,
        digits: true,
        minlength: 10,
        maxlength: 10 // pattern: "^\\\\d\\W+$"

      },
      dobMonth: {
        required: true // dob: true

      },
      dobDay: {
        required: true // dob: true

      },
      dobYear: {
        required: true // dob: true

      },
      dateBirth: {
        required: true,
        dob: true
      } // str_number: {
      //     required: true,
      // },
      // str_name: {
      //     required: true,
      // },
      // city: {
      //     required: true,
      // },
      // state: {
      //     required: true,
      // },
      // country: {
      //     required : true,
      // },
      // county: {
      //     required : true,
      // },
      // court: {
      //     required : true,
      // },
      // lea: {
      //     required : true,
      // },
      // case_number: {
      //     required : true,
      // }

    },
    groups: {
      birthday: "dobMonth dobDay dobYear dateBirth"
    },
    messages: {
      phone: {
        required: "Please enter your phone number",
        minLength: "Your phone number must be 10 digits",
        maxLength: "Your phone number must be 10 digits"
      } // dateBirth: {
      //     required: true,
      //     dob: true
      // },
      // birthday: {
      //     required: true,
      //     dob: true
      // }
      //     // month: {
      //     //     required: true,
      //     //     dob: true
      //     // }
      //     // str_number: {
      //     //     required: "Please enter your street number",
      //     // },
      //     // str_name: {
      //     //     required: "Please enter your street name",
      //     // },
      //     // city: {
      //     //     required: "Please enter your City",
      //     // }

    },
    errorPlacement: function errorPlacement(error, element) {
      var name = element.prop("name");

      if (name === "dobMonth" || name === "dobDay" || name === "dobYear") {
        error.insertAfter(".dateBirth");
      } else {
        error.insertAfter(element);
      }
    },
    submitHandler: function submitHandler(form) {
      // for demo
      alert('valid form submitted'); // for demo

      return false; // for demo
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".dob-field").on('change', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#dateBirth").val(jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="dobDay"] option:selected').val() + "/" + jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="dobMonth"] option:selected').val() + "/" + jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="dobYear"] option:selected').val());
    console.log(jquery__WEBPACK_IMPORTED_MODULE_0___default()("#dateBirth").val());
  });
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// CALENDAR start
//Date method
function dates(tags) {
  var dates = "";
  var i;

  if (tags == "") {
    //If the dates('') paramenter is empty, add no tags
    for (i = 1; i < 32; i++) {
      dates += i;
    }
  } else {
    //If the dates('option') has paramenter, add the tags to it
    for (i = 1; i < 32; i++) {
      dates += "<" + tags + ">" + i + "</" + tags + ">";
    }
  } //You can call the class multiple times


  var multiple_list = document.getElementsByClassName("bear-dates");

  for (i = 0; i < multiple_list.length; i++) {
    multiple_list[i].innerHTML = dates;
  }
} //Days method


function days(tags) {
  //List all the Days with array
  var list_days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var days, i, l;

  if (tags == "") {
    //If the days('') paramenter is empty, add no tags
    for (i = 0, l = list_days.length, days = ""; i < l; i++) {
      days += list_days[i];
    }
  } else {
    //If the days('option') has paramenter, add the tags to it
    for (i = 0, l = list_days.length, days = ""; i < l; i++) {
      days += "<" + tags + ">" + list_days[i] + "</" + tags + ">";
    }
  } //You can call the class multiple times


  var multiple_list = document.getElementsByClassName("bear-days");

  for (i = 0; i < multiple_list.length; i++) {
    multiple_list[i].innerHTML = days;
  }
} //Short Days method


function short_days(tags) {
  //List all the Days with array
  var list_days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  var i, l, days;

  if (tags == "") {
    //If the short_days('') paramenter is empty, add no tags
    for (i = 0, l = list_days.length, days = ""; i < l; i++) {
      days += list_days[i];
    }
  } else {
    //If the days('option') has paramenter, add the tags to it
    for (i = 0, l = list_days.length, days = ""; i < l; i++) {
      days += "<" + tags + ">" + list_days[i] + "</" + tags + ">";
    }
  } //You can call the class multiple times


  var multiple_list = document.getElementsByClassName("bear-short-days");

  for (i = 0; i < multiple_list.length; i++) {
    multiple_list[i].innerHTML = days;
  }
} //Months method


function months(tags) {
  //List all the Days with array
  var list_months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var i, l, months;

  if (tags == "") {
    //If the months('') paramenter is empty, add no tags
    for (i = 0, l = list_months.length, months = ""; i < l; i++) {
      months += list_months[i];
    }
  } else {
    //If the months('option') has paramenter, add the tags to it
    for (i = 0, l = list_months.length, months = ""; i < l; i++) {
      months += "<" + tags + ">" + list_months[i] + "</" + tags + ">";
    }
  } //You can call the class multiple times


  var multiple_list = document.getElementsByClassName("bear-months");

  for (i = 0; i < multiple_list.length; i++) {
    multiple_list[i].innerHTML = months;
  }
} //Short Months method


function short_months(tags) {
  //List all the Months with array
  var list_months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var i, l, months;

  if (tags == "") {
    //If the short_months('') paramenter is empty, add no tags
    for (i = 0, l = list_months.length, months = ""; i < l; i++) {
      months += list_months[i];
    }
  } else {
    //If the months('option') has paramenter, add the tags to it
    for (i = 0, l = list_months.length, months = ""; i < l; i++) {
      months += "<" + tags + ">" + list_months[i] + "</" + tags + ">";
    }
  } //You can call the class multiple times


  var multiple_list = document.getElementsByClassName("bear-short-months");

  for (i = 0; i < multiple_list.length; i++) {
    multiple_list[i].innerHTML = months;
  }
} //Year method


function years(tags, startY, endY) {
  var i,
      years = "";

  if (tags == "") {
    //If the years('') paramenter is empty, add no tags
    for (i = startY; i < endY + 1; i++) {
      years += i;
    }
  } else {
    //If the years('option') has paramenter, add the tags to it
    for (i = startY; i < endY + 1; i++) {
      years += "<" + tags + ">" + i + "</" + tags + ">";
    }
  } //You can call the class multiple times


  var multiple_list = document.getElementsByClassName("bear-years");

  for (i = 0; i < multiple_list.length; i++) {
    multiple_list[i].innerHTML = years;
  }
} //CALENDAR end

/***/ }),

/***/ "./src/js/import/libs.js":
/*!*******************************!*\
  !*** ./src/js/import/libs.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(select2__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_payment_payment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/payment/payment */ "./src/blocks/modules/payment/payment.js");
/* harmony import */ var _modules_locked_locked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/locked/locked */ "./src/blocks/modules/locked/locked.js");
/* harmony import */ var _modules_adress_modal_adress_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/adress-modal/adress-modal */ "./src/blocks/modules/adress-modal/adress-modal.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_libs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/libs */ "./src/js/import/libs.js");
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_2__);




/***/ })

/******/ });
//# sourceMappingURL=main.js.map