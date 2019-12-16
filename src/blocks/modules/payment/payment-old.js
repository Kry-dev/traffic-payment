import $ from "jquery";
window.jQuery = $;
window.$ = $;
// CALENDAR start

//Date method
function dates(tags) {
    let dates = "";
    let i;
    if (tags == "") {                           //If the dates('') paramenter is empty, add no tags
        for (i = 1; i < 32; i++) {
            dates += i;
        }
    } else {
        for (i = 1; i < 32; i++) {
            dates += "<" + tags + ">" + i + "</" + tags + ">";
        }
    }
    
    //You can call the class multiple times
    let multiple_list = document.getElementsByClassName("bear-dates");
    let placeholderDate = "Date";
    for (i = 0; i < multiple_list.length; i++) {
        multiple_list[i].innerHTML = "<option value='' disabled='' selected>" + placeholderDate + "</option>" + dates;
    }
}


//Days method
function days(tags) {
    //List all the Days with array
    let list_days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    let days,
        i,
        l;
    if (tags == ""){                //If the days('') paramenter is empty, add no tags
        for (i = 0, l = list_days.length, days = ""; i < l; i++) {
            days += list_days[i];
        }
    } else {                        //If the days('option') has paramenter, add the tags to it
        for (i = 0, l = list_days.length, days = ""; i < l; i++) {
            days += "<" + tags + ">" + list_days[i] + "</" + tags + ">";
        }
    }
    
    //You can call the class multiple times
    let multiple_list = document.getElementsByClassName("bear-days");
    for (i = 1; i < multiple_list.length; i++) {
        multiple_list[i].innerHTML = days;
    }
}


//Short Days method
function short_days(tags) {
    //List all the Days with array
    let list_days = [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ];
    let i,
        l,
        days;
    
    if (tags == "") {                       //If the short_days('') paramenter is empty, add no tags
        for (i = 0, l = list_days.length, days = ""; i < l; i++) {
            days += list_days[i];
        }
    } else {                                //If the days('option') has paramenter, add the tags to it
        for (i = 0, l = list_days.length, days = ""; i < l; i++) {
            days += "<" + tags + ">" + list_days[i] + "</" + tags + ">";
        }
    }
    
    //You can call the class multiple times
    let multiple_list = document.getElementsByClassName("bear-short-days");
    for (i = 1; i < multiple_list.length; i++) {
        multiple_list[i].innerHTML = days;
    }
}


//Months method
function months(tags) {
    //List all the Days with array
    let list_months = [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    
    let i,
        l,
        months;
    
    if (tags == "") {            //If the months('') paramenter is empty, add no tags
        for (i = 0, l = list_months.length, months = ""; i < l; i++) {
            months += list_months[i];
        }
    } else {                    //If the months('option') has paramenter, add the tags to it
        for (i = 0, l = list_months.length, months = ""; i < l; i++) {
            months += "<" + tags + ">" + list_months[i] + "</" + tags + ">";
        }
    }
    
    //You can call the class multiple times
    let multiple_list = document.getElementsByClassName("bear-months");
    for (i = 0; i < multiple_list.length; i++) {
        multiple_list[i].innerHTML = months;
    }
}


//Short Months method
function short_months(tags) {
    //List all the Months with array
    let list_months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    let i,
        l,
        months;
    if (tags == "") {              //If the short_months('') paramenter is empty, add no tags
        for (i = 0, l = list_months.length, months = ""; i < l; i++) {
            months += list_months[i];
        }
    } else { //If the months('option') has paramenter, add the tags to it
        for (i = 0, l = list_months.length, months = ""; i < l; i++) {
            months += "<" + tags + ">" + list_months[i] + "</" + tags + ">";
        }
    }
    //You can call the class multiple times
    let multiple_list = document.getElementsByClassName("bear-short-months");
    let monthPlaceholder = "Month";
    for (i = 0; i < multiple_list.length; i++) {
        multiple_list[i].innerHTML = "<option value='' disabled='' selected>" + monthPlaceholder + "</option>" + months;
    }
}


//Year method
function years(tags, startY, endY) {
    let i,
        years = "";
    if (tags == "") {             //If the years('') paramenter is empty, add no tags
        for (i = startY; i < endY + 1; i++) {
            years = i;
        }
    } else {                          //If the years('option') has paramenter, add the tags to it
        for (i = startY; i < endY + 1; i++) {
            years += "<" + tags + ">" + i + "</" + tags + ">";
        }
    }
    //You can call the class multiple times
    let multiple_list = document.getElementsByClassName("bear-years");
    let yearPlaceholder = "Year";
    for (i = 0; i < multiple_list.length; i++) {
        multiple_list[i].innerHTML = "<option value='' disabled='' selected>" + yearPlaceholder + "</option>" + years;
    }
    
}

//CALENDAR end

//get current date
let now = new Date();
let currentMonth = now.getMonth();
let currentYear = now.getFullYear();
let minAge = 16;
let maxAge = 100;
let startYear = currentYear - minAge;
let endYear = currentYear - maxAge;
console.log("today is: " + now);
console.log("current month is: " + currentMonth);
console.log("currentYear: " + currentYear);
console.log("startYear: " + startYear);
console.log("endYear: " + endYear);
$(document).ready(function () {
    // $('select').select2();
    // $('.js-states').select2({
    //     minimumResultsForSearch: -1,
    //     placeholder: "Select a state",
    // });
    short_months('option');
    dates('option');
    //You can change the startYear(2003) and endYear(1919)
    years('option', endYear, startYear );
    function initialize() {
        let input = document.getElementById("str_address1");
        let autocomplete = new google.maps.places.Autocomplete(input);
        google.maps.event.addListener(autocomplete, "place_changed", function () {
            let place = autocomplete.getPlace();
            document.getElementById("city").value = place.name;
            // document.getElementById('cityLat').value = place.geometry.location.lat();
            // document.getElementById('cityLng').value = place.geometry.location.lng();
        });
    }
    
    google.maps.event.addDomListener(window, "load", initialize);
    /*  validate form  */
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });
    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf("  ") < 0 && value !== "";
    }, "Space are not allowed");
    jQuery.validator.addMethod("phoneUS", function (phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.length > 9 && phone_number.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
    }, "Use numeric values only");
    
    $("#payment").each(function () {
        $(this).validate({
            // onfocusout: true,
            successClass: "valid-feedback",
            errorClass: "invalid-feedback",
            ignore: ":hidden",
            rules: {
                str_phone: {
                    required: true,
                    phoneUS: true,
                },
                month: {
                    required: true,
                },
                day: {
                    required: true,
                },
                year: {
                    required: true,
                },
                str_address1: {
                    required: true,
                },
                // str_county: {
                //     required: true
                // },
                // str_court: {
                //     required: true,
                //     minlength: 5
                // }
            },
            messages: {
                str_phone: {
                    required: "Please enter your phone number",
                    phoneUS: "Use numeric values only. ",
                    digits: true
                },
                str_address1: {
                    required: "Please enter your current address",
                },
                month: {
                    required: "Please select your month of birth",
                },
                day: {
                    required: "Please select your day of birth",
                },
                year: {
                    required: "Please select year year of birth",
                },
                // email: {
                //     required: "Email не может быть пустым",
                //     email: "Неверный формат Email"
                // },
                // Phone: {
                //     required: "Телефон не может быть пустым"
                // },
                // password: {
                //     required: "Пароль не может быть пустым",
                //     minlength: jQuery.validator.format("Введите не менее {0} символов")
                // }
            }
        });
    });
    /*  end of validate form  */
    $("#address-collapse").each(function () {
        $(this).validate({
            successClass: "valid-feedback",
            errorClass: "invalid-feedback",
            ignore: ":hidden",
            rules: {
                str_number: {
                    required: true,
                },
                str_name: {
                    required: true,
                },
                unit_number: {
                    required: false,
                },
                city: {
                    required: false,
                }
                
            },
            messages: {
                str_number: {
                    required: "Please enter your street number",
                },
                str_name: {
                    required: "Please enter your street name",
                },
                city: {
                    required: "Please enter your City",
                }
            }
        });
    });
    /*  validate form Address */
    // let dataAddress = $('#address-collapse').serializeArray();
    // console.log(dataAddress);
    // dataAddress.each(data,function(){
    //     console.log(this.name+'='+this.value);
    // });
    /*  end of validate form Address  */
    let birthDateString = function () {
        let mm = document.getElementById("month").value;
        let dd = document.getElementById("day").value;
        let yyyy = document.getElementById("year").value;
        console.log(mm);
        console.log(dd);
        console.log(yyyy);
        return dd + '/' + mm + '/' + yyyy;
    };
    function getAge(birthDateString) {
        var today = new Date();
        var birthDate = new Date(birthDateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    
    if(getAge("27/06/1989") >= 18) {
        alert("You have 18 or more years old!");
    }
    $(".payment-DOB").on("change", function () {
        getAge(birthDateString);
    })
});

