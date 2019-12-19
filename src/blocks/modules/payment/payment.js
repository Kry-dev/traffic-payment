// import { isValidLicense, isValidOrReturnDescription } from "./drive-license-validation";
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'jquery-validation';
import 'jquery-validation/dist/additional-methods';
// require("jquery-validation");
// require("jquery-validation/dist/additional-methods.js");
// https://github.com/gas-buddy/usdl-regex
// // https://ntsi.com/drivers-license-format/
// require('../data/regex.json');
// // let countyDATA = require('../data/county.json');
// // let countyDataObj = JSON.parse(countyDATA);
// import('../data/county.json').then(({default: countyDATA}) =>countyDATA);
$(document).ready(() => {
    function isValidLicense(state, number) {
        const key = (state || '').toUpperCase();
        if (!regs[key]) {
            throw new Error('Invalid state supplied');
        }
        const re = new RegExp(regs[state].rule, 'i');
        if (re.test(number)) {
            return true;
        }
        return false;
    }
    
    function isValidOrReturnDescription(state, number) {
        return isValidLicense(state, number) || regs[state].description;
    }
    /** INIT GOOGLE AUTOCOMPLEET */
    let placeSearch;
    let autocomplete;
    const componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'long_name',
        country: 'long_name',
        postal_code: 'short_name',
    };
    
    function initialize() {
        // Create the autocomplete object, restricting the search
        // to geographical location types.
        autocomplete = new google.maps.places.Autocomplete(
            (document.getElementById('autocomplete')), { types: ['geocode'] },
        );
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            fillInAddress();
        });
        
        const autocompleteinput = document.getElementById('autocomplete');
        autocompleteinput.addEventListener('focus', geolocate, true);
    }
    
    // [START region_fillform]
    function fillInAddress() {
        // Get the place details from the autocomplete object.
        const place = autocomplete.getPlace();
        
        for (const component in componentForm) {
            document.getElementById(component).value = '';
            document.getElementById(component).disabled = false;
        }
        
        // Get each component of the address from the place details
        // and fill the corresponding field on the form.
        for (let i = 0; i < place.address_components.length; i++) {
            console.log(place.address_components);
            const addressType = place.address_components[i].types[0];
            if (componentForm[addressType]) {
                const val = place.address_components[i][componentForm[addressType]];
                const element = document.getElementById(addressType);
                element.value = val;
                
                if ((addressType == 'administrative_area_level_1') || (addressType == 'country')) {
                    const valSecond = place.address_components[i].short_name;
                    element.setAttribute('data-code', valSecond);
                    element.setAttribute('data-name', val);
                }
            }
        }
    }
    
    function geolocate() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const geolocation = new google.maps.LatLng(
                    position.coords.latitude, position.coords.longitude,
                );
                const circle = new google.maps.Circle({
                    center: geolocation,
                    radius: position.coords.accuracy,
                });
                autocomplete.setBounds(circle.getBounds());
            });
        }
    }
    
    initialize();
    
    /** INIT DATE FIELDS */
    function initializeDate() {
        const dateMonth = document.getElementById('date-month');
        const dateDay = document.getElementById('date-day');
        const dateYear = document.getElementById('date-year');
        
        const Today = new Date();
        
        const minYear = Today.getYear() - 16 + 1900;
        const maxYear = Today.getYear() - 100 + 1900;
        // console.log('min year', minYear);
        // console.log('max year', maxYear);
        for (let i = minYear; i >= maxYear; i--) {
            const opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            dateYear.appendChild(opt);
        }
        const aMonth = ['January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        const nMonths = 12;
        for (let i = 1; i <= nMonths; i++) {
            const opt = document.createElement('option');
            
            
            if(i < 10){
                opt.innerHTML = "0"+ i;
                opt.value = "0"+ i;
                opt.setAttribute('value',"0"+ i);
                opt.setAttribute('data-number',"0"+ i);
                dateMonth.appendChild(opt);
            }else {
                opt.innerHTML = i;
                opt.value = i;
                opt.setAttribute('data-number', i);
                dateMonth.appendChild(opt);
            }
        }
        
        const nDays = 31;
        for (let i = 1; i <= nDays; i++) {
            const opt = document.createElement('option');
            
            if(i < 10){
                opt.innerHTML = "0"+ i;
                opt.value = "0"+ i;
                opt.setAttribute('value',"0"+ i);
                opt.setAttribute('data-number',"0"+ i);
            } else {
                opt.value = i;
                opt.innerHTML = i;
                opt.setAttribute('value', i);
                opt.setAttribute('data-number', i);
            }
            dateDay.appendChild(opt);
        }
        
        dateMonth.addEventListener('change', changeDateCount, true);
        dateYear.addEventListener('change', changeDateCount, true);
        dateDay.addEventListener('change', changeDateDay, true);
        
        function changeDateCount(event) {
            const dateDay = document.getElementById('date-day');
            const selectedYear = document.getElementById('date-year').value;
            const selectedMonthElement = document.getElementById('date-month');
            const selectedMonth = selectedMonthElement.options[selectedMonthElement.selectedIndex].getAttribute('value');
            if (selectedYear && selectedMonth) {
                const daysInMoth = getDaysInMonth(selectedMonth, selectedYear);
                dateDay.innerHTML = '';
                for (let i = 1; i <= daysInMoth; i++) {
                    const opt = document.createElement('option');
                    if(i < 10){
                        opt.innerHTML = "0"+ i;
                        opt.value = "0"+ i;
                        opt.setAttribute('value',"0"+ i);
                        opt.setAttribute('data-number',"0"+ i);
                    } else {
                        opt.value = i;
                        opt.innerHTML = i;
                        opt.setAttribute('value', i);
                        opt.setAttribute('data-number', i);
                    }
                    dateDay.appendChild(opt);
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
        document.getElementById('phone').addEventListener('input', (e) => {
            const x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : `${x[1]}${x[2]}${x[3] ? `${x[3]}` : ''}`;
        });
        
        const phone = document.getElementById('phone');
        const postalCode = document.getElementById('postal_code');
        
        postalCode.addEventListener('change', (() => {
            const postalCode = document.getElementById('postal_code');
            postalCode.value = postalCode.value.replace(/[^0-9]/g, '');
        }));
        
        postalCode.addEventListener('keyup', (e) => {
            let val = postalCode.value.replace(/\D/g, '');
            if (val.length > 5) {
                val = val.slice(0, 5);
                postalCode.value = val;
            }
            postalCode.value = val;
        });
    }
    
    PhoneZipVlidation();
    
    const $save = $('#action-save');
    const $reset = $('#action-reset');
    const $edit = $('#action-edit');
    const $autocomplete = $('#autocomplete-edit');
    const body = $('body');
    $('#autocomplete').prop('disabled', true);
    $autocomplete.find('input').prop('disabled', true);
    $autocomplete.find('select').prop('disabled', true);
    $autocomplete.addClass('disabled');
    $autocomplete.hide('slow');
    body.on('click', '#action-save', (e) => {
        if (!$autocomplete.hasClass('disabled')) {
            $('#autocomplete').prop('disabled', true);
            $autocomplete.find('input').prop('disabled', true);
            $autocomplete.find('select').prop('disabled', true);
            $autocomplete.addClass('disabled');
            $autocomplete.hide('slow');
        }
    });
    
    body.on('click', '#action-edit', (e) => {
        if ($autocomplete.hasClass('disabled')) {
            $('#autocomplete').prop('disabled', false);
            $autocomplete.find('input').prop('disabled', false);
            $autocomplete.find('select').prop('disabled', false);
            $autocomplete.removeClass('disabled');
            $autocomplete.show('slow');
        }
    });
    
    body.on('click', '#action-reset', (e) => {
        if ($autocomplete.hasClass('disabled')) {
            $('#autocomplete').prop('disabled', false);
            $autocomplete.find('input').prop('disabled', false);
            $autocomplete.find('select').prop('disabled', false);
            $autocomplete.removeClass('disabled');
            $autocomplete.show('slow');
        }
        $('#autocomplete').val('');
        $autocomplete.find('input').val('');
        $autocomplete.find('select').val('');
    });
    function countyJSON() {
        // const сountyUrl = `${window.location.href}../data/county.json`;
        const сountyUrl = `../data/county.json`;
        // const сountyUrl = countyDATA;
        // create select fields for County/Court of Violation
        function setDefaultSelect(idElement, position = 0, text, value = '') {
            const selectElement = document.getElementById(idElement);
            const firstDefaultOption = document.createElement('option');
            selectElement.length = position;
            firstDefaultOption.text = text;
            firstDefaultOption.value = value;
            selectElement.add(firstDefaultOption);
            selectElement.selectedIndex = 0;
            return selectElement;
        }
        const selectCounty = setDefaultSelect('county', 0, 'Select County');
        const selectCourt = setDefaultSelect('court', 0, 'Select Court');
        const selectLEA = setDefaultSelect('lea', 0, 'Select LEA');
        // function Get Court name from array county.json
        function getCourtValue(obj, keyText) {
            if (Array.isArray(obj)) {
                for (let i = 0; i < obj.length; i++) {
                    if (obj[i].name === keyText) {
                        return obj[i].court;
                    }
                }
            }
        }
        // function Get LEA name from array county.json
        function getLEAValue(array, keyText) {
            for (let i = 0; i < array.length; i++) {
                if (array[i].courtName === keyText) {
                    return array[i].lea;
                }
            }
        }
        // function reset selected option in select to 1st option, with dafault value=""
        function resetSelectElement(el) {
            el.options.length = 1;
            el.selectedIndex = 1; // first option is selected, or// -1 for no option selected
        }
        // function to enable select field
        function enableSelectElement(field) {
            field.disabled = false;
        }
        // function to disable select field
        function disableSelectElement(field) {
            field.disabled = true;
        }
        // function to create option list to into select
        function createOptionsList(obj, selectField) {
            let optionCounty;
            for (let i = 0; i < obj.length; i++) {
                optionCounty = document.createElement('option');
                optionCounty.text = obj[i].name;
                optionCounty.value = obj[i].name;
                selectField.add(optionCounty);
            }
        }
        const request = new XMLHttpRequest();
        // get data from сountyUrl (county.json) by AJAX request
        request.open('GET', сountyUrl, true);
        request.onload = function () {
            if (request.status === 200) {
                const data = JSON.parse(request.responseText);
                createOptionsList(data, selectCounty);//Build Select County options list
                let courtArray = [];
                let LEAArray = [];
                // add event when select County
                selectCounty.addEventListener('change', function () {
                    const selectedCountyVal = selectCounty.value;
                    resetSelectElement(selectCourt);
                    enableSelectElement(selectCourt); //enable select id = "court"
                    if ((selectedCountyVal.length !== 0) && (selectCounty.value !== 'Los Angeles')) {
                        disableSelectElement(selectLEA);
                        courtArray = getCourtValue(data, selectedCountyVal); // get court array from json
                        //build select options for court select filed
                        for (let i = 0; i < courtArray.length; i++) {
                            const optionCourt = document.createElement('option');
                            optionCourt.text = courtArray[i];
                            optionCourt.value = courtArray[i];
                            selectCourt.add(optionCourt);
                        }
                    } else if (selectCounty.value == 'Los Angeles') {
                        resetSelectElement(selectCourt);
                        enableSelectElement(selectCourt);
                        LEAArray = getCourtValue(data, selectedCountyVal);
                        selectCourt.addEventListener('change', function () {
                            const selectedCourtVal = selectCourt.value;
                            let listLEAOptions = getLEAValue(LEAArray, selectedCourtVal);
                            // if ((selectedCourtVal !== 0) || (selectedCourtVal !== '')) {
                            if (selectedCourtVal.length !== 0) {
                                resetSelectElement(selectLEA);
                                enableSelectElement(selectLEA);
                                for (let i = 0; i < listLEAOptions.length; i++) {
                                    let optionCourt = document.createElement('option');
                                    optionCourt.text = listLEAOptions[i];
                                    optionCourt.value = listLEAOptions[i];
                                    selectLEA.add(optionCourt);
                                }
                            }else {
                                resetSelectElement(selectLEA);
                                disableSelectElement(selectLEA);
                            }
                        });
                        
                        for (let i = 0; i < LEAArray.length; i++) { //build select options for court select filed
                            const optionCourt = document.createElement('option');
                            const optionLEA = document.createElement('option');
                            optionCourt.text = LEAArray[i].courtName;
                            optionCourt.value = LEAArray[i].courtName;
                            optionLEA.text = LEAArray[i].lea;
                            selectCourt.add(optionCourt);
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
        request.onerror = function() {
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
    $.validator.addMethod("dob", function (value, element) {
        var result = true;
        var ageMin = 16;
        var ageMax = 100;
        
        //is the date valid?
        //is it within the allowed range
        var myDate = value.split("/");
        // console.log(myDate);
        // var myDate = value;
        var subDay = myDate[0];
        var subMonth = myDate[1] - 1;
        var subYear = myDate[2];
        var subDate = new Date(subYear, subMonth, subDay);
        // this will "correct" any out of range input
        var calcDay = subDate.getDate();
        var calcMonth = subDate.getMonth();
        var calcYear = subDate.getFullYear();
        // this checks to see if any of the submitted input was out of range
        // comment this out to ignore the discrepancy if you want to set a "corrected" value below
        function isValidDate(strDate) {
            var myDateStr= new Date(strDate);
            if( ! isNaN ( myDateStr.getMonth() ) ) {
                return true;
            }
            return false;
        }
        console.log(isValidDate(value));
        if (calcDay != subDay || calcMonth != subMonth || calcYear != subYear) {
            console.log(calcDay ,subDay, calcMonth ,subMonth, calcYear,subYear);
            $.validator.messages.dob = "Please select a valid Date of Birth";
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
                    $.validator.messages.dob = "You must be at least 16 years old to complete our course";
                    result = false;
                    console.log('age:', age);
                }
            }
            
            if (ageMax != undefined) {
                if (age >= ageMax) {
                    $.validator.messages.dob = "Please select a valid Date of Birth";
                    result = false;
                    console.log('age:', age);
                }
            }
            console.log('dob validate good');
        }
        console.log(result);
        console.log('dob validate bad');
        return result;
    },
    "Please select a valid Date of Birth");
    $("#address").validate({
        successClass: "valid-feedback",
        errorClass: "invalid-feedback",
        ignore: ":hidden",
        rules: {
            phone : {
                digits: true,
                minlength: 10,
                maxlength: 10,
                required: true,
                phoneUS: true,
            },
            dobMonth : {
                required: true,
                // dob: true
            },
            dobDay : {
                required: true,
                // dob: true
            },
            dobYear : {
                required: true,
                // dob: true
            },
            dateBirth: {
                required: true,
                dob: true
            },
            str_number: {
                required: true,
            },
            str_name: {
                required: true,
            },
            city: {
                required: true,
            },
            state: {
                required: true,
            },
            country: {
                required : true,
            },
            postal_code: {
                required : true,
            },
            county: {
                required : true,
            },
            court: {
                required : true,
            },
            lea: {
                required : true,
            },
            case_number: {
                required : true,
            },
            license_state: {
                required : true,
            },
            license_number: {
                required : true,
            }
        },
        groups: {
            birthday: "dobMonth dobDay dobYear dateBirth",
        },
        messages: {
            phone: {
                required : "Please enter your phone number",
                minLength: "Your phone number must be 10 digits",
                maxLength: "Your phone number must be 10 digits",
                phoneUS: "Enter valid phone number"
            },
            str_address1 : {
                required: "Please enter your current address",
            },
            str_number: {
                required: "Please enter your street number",
            },
            str_name: {
                required: "Please enter your street name",
            },
            city: {
                required: "Please enter your City",
            },
            state: {
                required: "Please enter your State",
            },
            country: {
                required: 'Please select your County',
            },
            postal_code: {
                required : "Please enter your zip code"
            },
            county: {
                required : "Please select a County"
            },
            court: {
                required : "Please select a Court"
            },
            lea: {
                required : "Please select a LEA Code"
            },
            case_number: {
                required : "Please enter your Case Number"
            },
            license_state: {
                required : "Please enter your Driver’s License Number"
            },
            license_number: {
                required : true,
            }
        },
        errorPlacement: function(error, element) {
            let name = element.prop("name");
            if (name === "dobMonth" || name === "dobDay" || name === "dobYear") {
                error.insertAfter(".dateBirth");
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function (form){ // for demo
            alert('valid form submitted'); // for demo
            return false; // for demo
        }
    });
    $(".dob-field").on('change',function(){
        $("#dateBirth").val($('[name="dobDay"] option:selected').val()+"/"+$('[name="dobMonth"] option:selected').val()+"/"+$('[name="dobYear"] option:selected').val());
        console.log($("#dateBirth").val());
    });
    // let changeHandler = function () {
    //     console.log ($.trim(this.value));
    //     if ($.trim(this.value)){
    //         $("button[type=submit]").removeAttr("disabled");
    //     } else {
    //         $("button[type=submit]").attr("disabled", "disabled");
    //     }
    // };
    //
    // $("input, select, textarea").keyup(changeHandler())​
    
});
