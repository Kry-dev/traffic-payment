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
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_validation_dist_additional_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-validation/dist/additional-methods */ "./node_modules/jquery-validation/dist/additional-methods.js");
/* harmony import */ var jquery_validation_dist_additional_methods__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_validation_dist_additional_methods__WEBPACK_IMPORTED_MODULE_2__);
// import { isValidLicense, isValidOrReturnDescription } from "./drive-license-validation";

window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
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
    var place = autocomplete.getPlace(); // Initialize fulladdress for when we combine street number and street name

    var fullAddress = "";

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
        element.value = val; // switch(i){
        //     case 0:
        //         fullAddress= val;
        //         fullAddress= fullAddress.concat(" ");
        //         break;
        //     case 1:
        //         fullAddress= fullAddress.concat(val);
        //         document.getElementById("street_address").value = fullAddress;
        //         break;
        //     default:
        //         document.getElementById(addressType).value = val;
        // }

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
      e.target.value = !x[2] ? x[1] : "".concat(x[1]).concat(x[2]).concat(x[3] ? "".concat(x[3]) : '');
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
  var body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#autocomplete').prop('disabled', true);
  $autocomplete.find('input').prop('disabled', true);
  $autocomplete.find('select').prop('disabled', true);
  $autocomplete.addClass('disabled'); // $autocomplete.hide('slow');

  body.on('click', '#action-save', function (e) {
    if (!$autocomplete.hasClass('disabled')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#autocomplete').prop('disabled', true);
      $autocomplete.find('input').prop('disabled', true);
      $autocomplete.find('select').prop('disabled', true);
      $autocomplete.addClass('disabled');
      $autocomplete.hide('slow');
    }
  });
  body.on('click', '#action-edit', function (e) {
    if ($autocomplete.hasClass('disabled')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#autocomplete').prop('disabled', false);
      $autocomplete.find('input').prop('disabled', false);
      $autocomplete.find('select').prop('disabled', false);
      $autocomplete.removeClass('disabled');
      $autocomplete.show('slow');
    }
  });
  body.on('click', '#action-reset', function (e) {
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

  function countyJSON() {
    // const сountyUrl = `${window.location.href}../data/county.json`;
    var сountyUrl = "../data/county.json"; // const сountyUrl = countyDATA;
    // create select fields for County/Court of Violation

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
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#leaBox').hide();
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
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#leaBox").show();
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
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#leaBox").hide();
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
  // function Get Rejex State name from array rejex.json

  function getLicenseRegex(element, object, keyText) {
    if (Array.isArray(object)) {
      for (var i = 0; i < object.length; i++) {
        if (object[i].code === keyText) {
          element.val("");
          element.attr('data-state', "");
          element.attr('data-rule-pattern', object[i].rule);
          element.attr('placeholder', object[i].description);
          element.attr('data-state', keyText); // return object[i].rule;
        }
      }
    }
  }

  function licenseJSON() {
    var licenseURL = "../data/regex.json";
    var selectState = setDefaultSelect('license-state', 0, 'Select State');
    var licenseNumber = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#license-number');
    var request = new XMLHttpRequest(); // get data from licenseUrl  (regex.json) by AJAX request

    request.open('GET', licenseURL, true);

    request.onload = function () {
      if (request.status === 200) {
        // function to create option list to into select
        var createStatesList = function createStatesList(rejexObj, selectField) {
          var optionCounty;

          for (var i = 0; i < rejexObj.length; i++) {
            optionCounty = document.createElement('option');
            optionCounty.text = rejexObj[i].name;
            optionCounty.value = rejexObj[i].code;
            selectField.add(optionCounty);
          }
        };

        var rejexObj = JSON.parse(request.responseText);
        createStatesList(rejexObj, selectState); //Build Select States options list
        // add event when select County

        selectState.addEventListener('change', function () {
          var selectedStateVal = selectState.value;

          if (selectedStateVal == "0") {
            licenseNumber.val("");
            licenseNumber.attr('placeholder', "e.g. DL05876");
          } else if (selectedStateVal.length !== 0 && selectedStateVal !== "") {
            getLicenseRegex(licenseNumber, rejexObj, selectState.value);
          } else {
            licenseNumber.val("");
            licenseNumber.attr("placeholder", "e.g. DL05876");
          }
        });
      } else {
        console.log('there is no rejex.json file');
      }
    };

    request.onerror = function () {
      console.error('An error occurred fetching the JSON from ' + licenseURL);
    };

    request.send();
  }

  licenseJSON();
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
      // console.log(calcDay ,subDay, calcMonth ,subMonth, calcYear,subYear);
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
  }, "Please select a valid Date of Birth"); //regex

  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.validator.addMethod("pattern", function (value, element) {
    // let re = new RegExp($("#license-number").data("rule-pattern"));
    var re = new RegExp(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).attr('data-rule-pattern')); // // console.log(regexp);
    // console.log(re);
    // if(!value){
    //     $.validator.messages.dob = "Please enter your Driver’s License Number";
    // }

    return this.optional(element) || re.test(value); // return this.optional(element) || new RegExp(regex).test(value);
  }, "Please recheck your Driver’s License Number"); // $("#license-number").rules("add", { regexLicense: () });

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#address").validate({
    successClass: "valid-feedback",
    errorClass: "invalid-feedback",
    ignore: ":hidden",
    rules: {
      phone: {
        digits: true,
        minlength: 10,
        maxlength: 10,
        required: true,
        phoneUS: true
      },
      dobMonth: {
        required: true
      },
      dobDay: {
        required: true
      },
      dobYear: {
        required: true
      },
      dateBirth: {
        required: true,
        dob: true
      },
      str_address: {
        required: true
      },
      str_number: {
        required: true
      },
      str_name: {
        required: true
      },
      city: {
        required: true
      },
      state: {
        required: true
      },
      country: {
        required: true
      },
      postal_code: {
        required: true
      },
      county: {
        required: true
      },
      court: {
        required: true
      },
      lea: {
        required: true
      },
      case_number: {
        required: true
      },
      license_state: {
        required: true
      },
      license_number: {
        required: true,
        pattern: true
      }
    },
    groups: {
      street_line: "str_number str_name",
      birthday: "dobMonth dobDay dobYear dateBirth"
    },
    messages: {
      phone: {
        required: "Please enter your phone number",
        minLength: "Your phone number must be 10 digits",
        maxLength: "Your phone number must be 10 digits",
        phoneUS: "Enter valid phone number"
      },
      str_address: {
        required: "Please enter your current address"
      },
      // str_number: {
      //     required: "Please enter your street number",
      // },
      // str_name: {
      //     required: "Please enter your street name",
      // },
      street_line: {
        required: "Please enter your street number and name"
      },
      city: {
        required: "Please enter your City"
      },
      state: {
        required: "Please enter your State"
      },
      country: {
        required: 'Please select your County'
      },
      postal_code: {
        required: "Please enter your zip code"
      },
      county: {
        required: "Please select a County"
      },
      court: {
        required: "Please select a Court"
      },
      lea: {
        required: "Please select a LEA Code"
      },
      case_number: {
        required: "Please enter your Case Number"
      },
      license_state: {
        required: "Please select your Driver’s License State"
      },
      license_number: {
        required: "Please enter your Driver’s License Number"
      }
    },
    errorPlacement: function errorPlacement(error, element) {
      var name = element.prop("name");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).parent('div').addClass('field-error');

      if (name === "dobMonth" || name === "dobDay" || name === "dobYear") {
        error.insertAfter(".dateBirth");
      } else if (name === "str_number" || name === "str_name") {
        error.insertAfter(".street-address");
      } else {
        error.insertAfter(element);
      }
    } // submitHandler: function (form){
    //     alert('valid form submitted');
    //     $("button[type='submit']").prop('disabled', false);
    //     return false;
    // }

  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".dob-field").on('change', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#dateBirth").val(jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="dobDay"] option:selected').val() + "/" + jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="dobMonth"] option:selected').val() + "/" + jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="dobYear"] option:selected').val());
    console.log(jquery__WEBPACK_IMPORTED_MODULE_0___default()("#dateBirth").val());
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('input,select').on('blur keyup', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#address").valid()) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#submit').prop('disabled', false);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#submit').prop('disabled', 'disabled');
    }
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