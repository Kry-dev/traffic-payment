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
/******/ 		"verify": 0
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
/******/ 	deferredModules.push(["./src/js/import/pages/verify.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/verify-form/verify-form.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/verify-form/verify-form.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_1__);

window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
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
    var subDate = new Date(subYear, subMonth, subDay); // this will "correct" any out of range input

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
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.validator.messages.dob = "Please select a valid Date of Birth";
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
          console.log('age:', age);
        }
      }

      if (ageMax != undefined) {
        if (age >= ageMax) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default.a.validator.messages.dob = "Please select a valid Date of Birth";
          result = false;
          console.log('age:', age);
        }
      }

      console.log('dob validate good');
    }

    console.log(result);
    console.log('dob validate bad');
    return result;
  }, "Please select a valid Date of Birth");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#verify").validate({
    successClass: "valid-feedback",
    errorClass: "invalid-feedback",
    ignore: ":hidden",
    rules: {
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
      }
    },
    groups: {
      birthday: "dobMonth dobDay dobYear dateBirth"
    },
    messages: {},
    errorPlacement: function errorPlacement(error, element) {
      var name = element.prop("name");

      if (name === "dobMonth" || name === "dobDay" || name === "dobYear") {
        error.insertAfter("#date-year");
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

  function changeHandler() {
    console.log(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.trim(this.value));

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default.a.trim(this.value)) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("button[type=submit]").removeAttr("disabled");
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("button[type=submit]").attr("disabled", "disabled");
    }
  } //
  // $('input, select, textarea').change(changeHandler())​


  jquery__WEBPACK_IMPORTED_MODULE_0___default()('input, select, textarea').change(function () {
    alert('Handler for .keyup() called.');
    changeHandler();
  });
});

/***/ }),

/***/ "./src/js/import/pages/verify.js":
/*!***************************************!*\
  !*** ./src/js/import/pages/verify.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_verify_form_verify_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/verify-form/verify-form */ "./src/blocks/modules/verify-form/verify-form.js");


/***/ })

/******/ });
//# sourceMappingURL=verify.js.map