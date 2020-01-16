$(document).ready(() => {
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
        const aMonth = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        const nMonths = 12;
        for (let i = 1; i <= nMonths; i++) {
            const opt = document.createElement('option');
            
            
            if(i < 10){
                opt.innerHTML = "0"+ i;
                opt.value = "0"+ i;
                opt.setAttribute("value","0"+ i);
                opt.setAttribute("data-number","0"+ i);
                dateMonth.appendChild(opt);
            }else {
                opt.innerHTML = i;
                opt.value = i;
                opt.setAttribute("data-number", i);
                dateMonth.appendChild(opt);
            }
        }
        
        const nDays = 31;
        for (let i = 1; i <= nDays; i++) {
            const opt = document.createElement("option");
            
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
    function countyJSON() {
        // const сountyUrl = `${window.location.href}../data/county.json`;
        const сountyUrl = `data/county.json`;
        // const сountyUrl = countyDATA;
        // create select fields for County/Court of Violation
        
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
        
        $('#leaBox').hide();
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
                        $("#leaBox").show();
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
                        $("#leaBox").hide();
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
    // function Get Rejex State name from array rejex.json
    function getLicenseRegex(element ,object, keyText) {
        if (Array.isArray(object)) {
            for (let i = 0; i < object.length; i++) {
                if (object[i].code === keyText) {
                    element.val("");
                    element.attr('data-state', "");
                    element.attr('data-rule-pattern', object[i].rule);
                    element.attr('placeholder', object[i].description);
                    element.attr('data-state', keyText);
                    // return object[i].rule;
                }
            }
        }
    }
    function forceKeyPressUppercase(e) {
        let charInput = e.keyCode;
        if((charInput >= 97) && (charInput <= 122)) { // lowercase
            if(!e.ctrlKey && !e.metaKey && !e.altKey) { // no modifier key
                let newChar = charInput - 32;
                let start = e.target.selectionStart;
                let end = e.target.selectionEnd;
                e.target.value = e.target.value.substring(0, start) + String.fromCharCode(newChar) + e.target.value.substring(end);
                e.target.setSelectionRange(start+1, start+1);
                e.preventDefault();
            }
        }
    }
    function licenseJSON (){
        const licenseURL = `data/regex.json`;
        const selectState = setDefaultSelect('license-state', 0, 'Select State');
        const licenseNumber = $('#license-number');
        const request = new XMLHttpRequest();
        // get data from licenseUrl  (regex.json) by AJAX request
        request.open('GET', licenseURL, true);
        request.onload = function () {
            if (request.status === 200) {
                const rejexObj = JSON.parse(request.responseText);
                // function to create option list to into select
                function createStatesList(rejexObj, selectField) {
                    let optionCounty;
                    for (let i = 0; i < rejexObj.length; i++) {
                        optionCounty = document.createElement('option');
                        optionCounty.text = rejexObj[i].name;
                        optionCounty.value = rejexObj[i].code;
                        selectField.add(optionCounty);
                    }
                }
                createStatesList(rejexObj, selectState);//Build Select States options list
                // add event when select County
                selectState.addEventListener('change', function () {
                    const selectedStateVal = selectState.value;
                    if(selectedStateVal == "0"){
                        licenseNumber.val("");
                        licenseNumber.attr('placeholder', "e.g. DL05876");
                    } else if ((selectedStateVal.length !== 0)&&(selectedStateVal !== "")) {
                        getLicenseRegex( licenseNumber, rejexObj, selectState.value);
                        document.getElementById("license-number").addEventListener("keypress", forceKeyPressUppercase, false);
                    } else {
                        licenseNumber.val("");
                        licenseNumber.attr("placeholder", "e.g. DL05876");
                    }
                })
            } else {
                console.log('there is no rejex.json file');
            }
        };
        request.onerror = function() {
            console.error('An error occurred fetching the JSON from ' + licenseURL);
        };
        request.send();
    }
    licenseJSON();
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
            // console.log(calcDay ,subDay, calcMonth ,subMonth, calcYear,subYear);
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
    //regex
    $.validator.addMethod("pattern", function(value, element, ) {
            // let re = new RegExp($("#license-number").data("rule-pattern"));
            let re = new RegExp($(element).attr('data-rule-pattern'));
            // // console.log(regexp);
            // console.log(re);
            // if(!value){
            //     $.validator.messages.dob = "Please enter your Driver’s License Number";
            // }
            return this.optional(element) || re.test(value);
            // return this.optional(element) || new RegExp(regex).test(value);
        }, "Please recheck your Driver’s License Number"
    );
    $("#address").validate({
        // onkeyup: true,
        // onfocusout: true,
        // focusCleanup: true,
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
            },
            dobDay : {
                required: true,
            },
            dobYear : {
                required: true,
            },
            dateBirth: {
                required: true,
                dob: true
            },
            str_address:{
                required: true,
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
    
                pattern: true
            }
        },
        groups: {
            street_line: "str_number str_name",
            birthday: "dobMonth dobDay dobYear dateBirth",
        },
        messages: {
            phone: {
                required : "Please enter your phone number",
                minLength: "Your phone number must be 10 digits",
                maxLength: "Your phone number must be 10 digits",
                phoneUS: "Enter valid phone number"
            },
            str_address : {
                required: "Please enter your current address",
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
                required: "Please enter your City",
            },
            state: {
                required: "Please enter your State",
            },
            country: {
                required: 'Please select your Country',
            },
            postal_code: {
                required : "Please enter your zip code",
            },
            county: {
                required : "Please select a County",
            },
            court: {
                required : "Please select a Court",
            },
            lea: {
                required : "Please select a LEA Code",
            },
            case_number: {
                required : "Please enter your Case Number",
            },
            license_state: {
                required : "Please select your Driver’s License State",
            },
            license_number: {
                required : "Please enter your Driver’s License Number",
            }
        },
        errorPlacement: function(error, element) {
            let name = element.prop("name");
            $(element).parent('div').addClass('field-error');
            if (name === "dobMonth" || name === "dobDay" || name === "dobYear") {
                error.insertAfter(".dateBirth");
            } else if (name === "str_number" || name === "str_name"){
                error.insertAfter(".street-address");
            } else {
                error.insertAfter(element);
            }
        },
        // submitHandler: function(form) { // <- pass 'form' argument in
        //     alert('valid form submitted');
        //     $("#submit").attr("disabled", false);
        //     form.submit(); // <- use 'form' argument here.
        // }
    });
    $(".dob-field").on('blur change',function(){
        $("#dateBirth").val($('[name="dobDay"] option:selected').val()+"/"+$('[name="dobMonth"] option:selected').val()+"/"+$('[name="dobYear"] option:selected').val());
        console.log($("#dateBirth").val());
    });
    $("#submit").prop('disabled', true);
    function checkInputs() {
        let isValid = true;
        // $('#address :input').filter('[required]').each(function() {
        $('#address input:required').each(function() {
            if ($(this).val() === '') {
                $("#submit").prop('disabled', true);
                isValid = false;
                console.log('submit disabled');
                return false;
            }
        });
        
        if(isValid) {$("#submit").prop('disabled', false)}
        console.log('submit enabled');
        return isValid;
    }
    
    // $("#submit").click(function() {
    //     alert(All checkInputs());
    // });

    //Enable or disable button based on if inputs are filled or not
    $(".form-control:required").on("change" ,function() {
        checkInputs();
    });
    
    $(".locked").popover();
});
