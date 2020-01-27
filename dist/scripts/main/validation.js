//валидация формы
let form = $("form").validate({
    //options
//правила валидации
    ignore: ".ignore", //это нужно для g-recaptcha, т.к. валидатор не проверяет скрытые поля без этой опции
    rules: {
        name: "required",
        password: {},
        //валидация g-recaptcha
        hiddenRecaptcha: {
            recaptcha: true
        }
    },
    invalidHandler: function (event, validator) {
        // создаем список из ошибок валидации, объединяя одинаковые
        let errors = [];
        for (item in validator.invalid) {
            if (validator.invalid[item] == "Заполните поле") validator.invalid[item] = "Заполните все обязательные поля";
            if (errors.indexOf(validator.invalid[item]) < 0) errors.push(validator.invalid[item]);
            
        }
        let errorsText = "<ul class=\"errors-list\"><li>";
        errorsText += errors.join("</li><li>");
        errorsText += "</li></ul>";
        
        $(".errors-list").html(errorsText);
    },
    success: function (element) {  // отмечаем следующий неверный элемент
        element.closest("form").find(".input-for-valid.error-first").removeClass("error-first");
        $(element.closest("form").find(".input-for-valid.error-validation")[0]).addClass("error-first");
        $(element).parent().find("label.error-validation").remove();
    },
});

// Установить опции по умолчанию
jQuery.validator.setDefaults({
    debug: true
});

$.validator.addMethod("cyrillic", function (value, element, params) {
    return this.optional(element) || /^[а-яё\s]+$/i.test(value);
}, "должно быть на кириллице");

//
$.validator.addMethod("photos", function (value, element, params) {
    return $(".file-input .files input").length;
});

//валидация капчи
$.validator.addMethod("recaptcha", function (value, element, params) {
    let N = parseInt(element.id.slice(-1)) || 0;
    return (grecaptcha.getResponse(N) == "") ? false : true;
}, "Подтвердите, что Вы не робот");

//regex
$.validator.addMethod("regex", function (value, element, regexp) {
    let re = new RegExp(regexp);
    return this.optional(element) || re.test(value);}, "Please check your input."
);
$("#Textbox").rules("add", {regex: "^[a-zA-Z'.\\s]{1,40}$"});


// // валидация элемента при использовании с select2
// $("select.styled-select").select2({
//     dropdownAutoWidth: true,
//     width: "100%"
// }).on("select2:select", function (e) {
//     $(this).valid();
// });


let validator = $("form").validate();
validator.form(); // Validates the form.
validator.element(); // Validates a single element.
validator.resetForm(); // Resets the controlled form.
validator.showErrors(); // Show the specified messages.
validator.numberOfInvalids(); // Returns the number of invalid fields.
validator.destroy(); //  Destroys this instance of validator.


// добавить метод валидации
$.validator.addMethod("map", function (value, element, params) {
    return (value) ? true : false;
});


//так же можно добавить через data атрибуты элементов

// для правила - data-rule-[method]
// для сообщения - data-msg-[method]

// data-rule-required=”true”
// data-rule-email=”true”
// data-rule-url=”true”
// data-rule-date=”true”
// data-rule-dateISO=”true”
// data-rule-number=”true”
// data-rule-digits=”true”
// data-rule-creditcard=”true”
// data-rule-minlength=”6”
// data-rule-maxlength=”24”
// data-rule-rangelength=”5,10”
// data-rule-min=”5”
// data-rule-max=”10”
// data-rule-range=”5,10”
// data-rule-equalto=”#password”
// data-rule-remote=”custom-validatation-endpoint.aspx”
// (Untested, additional, but should work)
// data-rule-accept=””
// data-rule-bankaccountNL=”true”
// data-rule-bankorgiroaccountNL=”true”
// data-rule-bic=””
// data-rule-cifES=””
// data-rule-creditcardtypes=””
// data-rule-currency=””
// data-rule-dateITA=””
// data-rule-dateNL=””
// data-rule-extension=””
// data-rule-giroaccountNL=””
// data-rule-iban=””
// data-rule-integer=”true”
// data-rule-ipv4=”true”
// data-rule-ipv6=”true”
// data-rule-mobileNL=””
// data-rule-mobileUK=””
// data-rule-lettersonly=”true”
// data-rule-nieES=””
// data-rule-nifES=””
// data-rule-nowhitespace=”true”
// data-rule-pattern=””
// data-rule-phoneNL=”true”
// data-rule-phoneUK=”true”
// data-rule-phoneUS=”true”
// data-rule-phonesUK=”true”
// data-rule-postalcodeNL=”true”
// data-rule-postcodeUK=”true”
// data-rule-require_from_group=””
// data-rule-skip_or_fill_minimum=””
// data-rule-strippedminlength=””
// data-rule-time=””
// data-rule-time12h=””
// data-rule-url2=””
// data-rule-vinUS=””
// data-rule-zipcodeUS=”true”
// data-rule-ziprange=””
