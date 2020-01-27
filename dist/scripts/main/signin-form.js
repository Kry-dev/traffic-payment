$(document).ready(() => {
    $(".toggle-password").on("click", function() {
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
    $("#sign-in").validate({
        successClass: "valid-feedback",
        errorClass: "invalid-feedback",
        ignore: ":hidden",
        errorPlacement: function(error, element) {
            if (element.attr("id") === "signin_email" || element.attr("id") === "signin_pass") {
                error.insertAfter("#signin_pass");
            } else {
                error.insertAfter(element);
            }
        },
    });
    $("#signin_email").rules("add", {
        required: true,
        messages: {
            required : "Incorrect username or password.",
            
        }
    });
    $("#signin_pass").rules("add", {
        required: true,
        minlength: 6,
        messages: {
            required : "Incorrect username or password.",
            minlength: "Your password must be at least 6 characters"
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
