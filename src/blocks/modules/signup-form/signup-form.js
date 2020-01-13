import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'jquery-validation';
$(document).ready(() => {
    $(".toggle-password").on('click', function() {
        console.log("click");
        $(this).toggleClass("fa-eye fa-eye-slash");
        let input = $($(this).attr("toggle"));
        console.log(input);
        if (input.attr("type") === "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
    $("#sign-up").validate({
        successClass: "valid-feedback",
        errorClass: "invalid-feedback",
        ignore: ":hidden",
        rules: {
            signup_email: {required: true,},
            signup_pass: {
                required: true,
                minlength:6,
            }
        },
        groups: {
            signup: "signUp_email signUp_pass",
        },
        messages: {
            signup_email: {
                required: "Incorrect username or password."
            },
            signup_pass: {
                required: "Incorrect username or password.",
                minlength: "Your password must be at least 6 characters"
            }
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") === "signup_email" || element.attr("name") === "signup_pass") {
                error.insertAfter("#signup_pass");
            } else {
                error.insertAfter(element);
            }
        },
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
