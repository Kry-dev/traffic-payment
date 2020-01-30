$(document).ready(() => {
    /** INIT DATE FIELDS */
    function initializeDate() {
        const dateMonth = document.getElementById("date-month");
        const dateDay = document.getElementById("date-day");
        const dateYear = document.getElementById("date-year");
        
        const Today = new Date();
        
        const minYear = Today.getYear() - 16 + 1900;
        const maxYear = Today.getYear() - 100 + 1900;
        for (let i = minYear; i >= maxYear; i--) {
            const opt = document.createElement("option");
            opt.value = i;
            opt.innerHTML = i;
            dateYear.appendChild(opt);
        }
        const nMonths = 12;
        for (let i = 1; i <= nMonths; i++) {
            const opt = document.createElement("option");
            
            
            if (i < 10) {
                opt.innerHTML = "0" + i;
                opt.value = "0" + i;
                opt.setAttribute("value", "0" + i);
                opt.setAttribute("data-number", "0" + i);
                dateMonth.appendChild(opt);
            } else {
                opt.innerHTML = i;
                opt.value = i;
                opt.setAttribute("data-number", i);
                dateMonth.appendChild(opt);
            }
        }
        
        const nDays = 31;
        for (let i = 1; i <= nDays; i++) {
            const opt = document.createElement("option");
            
            if (i < 10) {
                opt.innerHTML = "0" + i;
                opt.value = "0" + i;
                opt.setAttribute("value", "0" + i);
                opt.setAttribute("data-number", "0" + i);
            } else {
                opt.value = i;
                opt.innerHTML = i;
                opt.setAttribute("value", i);
                opt.setAttribute("data-number", i);
            }
            dateDay.appendChild(opt);
        }
        
        dateMonth.addEventListener("change", changeDateCount, true);
        dateYear.addEventListener("change", changeDateCount, true);
        dateDay.addEventListener("change", changeDateDay, true);
        
        function changeDateCount(event) {
            const dateDay = document.getElementById("date-day");
            const selectedYear = document.getElementById("date-year").value;
            const selectedMonthElement = document.getElementById("date-month");
            const selectedMonth = selectedMonthElement.options[selectedMonthElement.selectedIndex].getAttribute("value");
            if (selectedYear && selectedMonth) {
                const daysInMoth = getDaysInMonth(selectedMonth, selectedYear);
                dateDay.innerHTML = "";
                for (let i = 1; i <= daysInMoth; i++) {
                    const opt = document.createElement("option");
                    if (i < 10) {
                        opt.innerHTML = "0" + i;
                        opt.value = "0" + i;
                        opt.setAttribute("value", "0" + i);
                        opt.setAttribute("data-number", "0" + i);
                    } else {
                        opt.value = i;
                        opt.innerHTML = i;
                        opt.setAttribute("value", i);
                        opt.setAttribute("data-number", i);
                    }
                    dateDay.appendChild(opt);
                }
            }
        }
        
        function changeDateDay(event) {
        }
        
        function getDaysInMonth(month, year) {
            // Here January is 1 based
            // Day 0 is the last day in the previous month
            return new Date(year, month, 0).getDate();
        }
    }
    
    initializeDate();
    
    /** INIT PHONE AND ZIP FIELDS EDIT */
    function PhoneValidation() {
        const phone = document.getElementById("phone");
        phone.addEventListener("input", (e) => {
            const x = e.target.value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : `${x[1]}${x[2]}${x[3] ? `${x[3]}` : ""}`;
        });
        
    
        phone.addEventListener("change", (() => {
            const postalCode = document.getElementById("phone");
            postalCode.value = postalCode.value.replace(/[^0-9]/g, "");
        }));
    
        phone.addEventListener("keyup", (e) => {
            let val = phone.value.replace(/\D/g, "");
            if (val.length > 10) {
                val = val.slice(0, 10);
                phone.value = val;
            }
            phone.value = val;
        });
    }
    
    PhoneValidation();
    
    // function to create option list to into select
    $.validator.addMethod("dob", function (value, element) {
        var result = true;
        var ageMin = 16;
        var ageMax = 100;
        
        //is the date valid?
        //is it within the allowed range
        var myDate = value.split("/");
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
            var myDateStr = new Date(strDate);
            if (!isNaN(myDateStr.getMonth())) {
                return true;
            }
            return false;
        }
        
        if (calcDay != subDay || calcMonth != subMonth || calcYear != subYear) {
            $.validator.messages.dob = "Please select a valid Date of Birth";
            result = false;
        }
        
        if (result) {
            var currDate = new Date();
            var currYear = currDate.getFullYear();
            var currMonth = currDate.getMonth();
            var currDay = currDate.getDate();
            
            var age = currYear - subYear;
            if (subMonth > currMonth) {
                age = age - 1; // next birthday not yet reached
            } else if (subMonth == currMonth && currDay < subDay) {
                age = age - 1;
            }
            
            if (ageMin != undefined) {
                if (age < ageMin) {
                    $.validator.messages.dob = "You must be at least 16 years old to complete our course";
                    result = false;
                }
            }
            
            if (ageMax != undefined) {
                if (age >= ageMax) {
                    $.validator.messages.dob = "Please select a valid Date of Birth";
                    result = false;
                }
            }
        }
        return result;
    },
    "Please select a valid Date of Birth");
    $("#personal").validate({
        successClass: "valid-feedback",
        errorClass: "invalid-feedback",
        ignore: ":hidden",
        groups: {
            street_line: "str_number str_name",
            birthday: "dobMonth dobDay dobYear dateBirth",
        },
        errorPlacement: function (error, element) {
            let name = element.prop("id");
            $(element).parent("div").addClass("field-error");
            if (name === "date-month" || name === "date-day" || name === "date-year") {
                error.insertAfter(".dateBirth");
            }  else {
                error.insertAfter(element);
            }
        },
    });
    $(".dob-field").on("blur change", function () {
        $("#dateBirth").val($("#date-day option:selected").val() + "/" + $("#date-month option:selected").val() + "/" + $("#date-year option:selected").val());
    });
    $("#phone").rules("add", {
        digits: true,
        minlength: 10,
        maxlength: 10,
        required: true,
        phoneUS: true,
        messages: {
            required : "Please enter your phone number",
            minLength: "Your phone number must be 10 digits",
            maxLength: "Your phone number must be 10 digits",
            phoneUS: "Enter valid phone number"
        }
    });
    $("#date-month").rules("add", {
        required: true,
    });
    $("#date-day").rules("add", {
        required: true,
    });
    $("#date-year").rules("add", {
        required: true,
    });
    $("#dateBirth").rules("add", {
        required: true,
        dob: true,
        messages: {
            required : "Please select a valid Date of Birth",
        }
    });
    $("#first_name").rules("add", {
        required: true,
        messages: {
            required : "Please enter your first name",
        }
    });
    $("#last_name").rules("add", {
        required: true,
        messages: {
            required : "Please enter your first name",
        }
    });
    $("#read-privacy").rules("add", {
        required: true,
        messages: {
            required : "The field is not checked",
        }
    });
    
    const inputSelector = ":input[required]:visible";
    function checkForm() {
        // here, "this" is an input element
        let isValidForm = true;
        $(this.form).find(inputSelector).each(function() {
            if (!this.value.trim()) {
                isValidForm = false;
            }
        });
        $(this.form).find("#submit").prop("disabled", !isValidForm);
        return isValidForm;
    }
    $("#submit").closest("form").submit(function() {// in a user hacked to remove "disabled" attribute, also monitor the submit event
        // launch checkForm for the first encountered input,
        // use its return value to prevent default if form is not valid
        return checkForm.apply($(this).find(":input")[0]);
    }).find(inputSelector).keyup(checkForm).keyup();
    
    
});
