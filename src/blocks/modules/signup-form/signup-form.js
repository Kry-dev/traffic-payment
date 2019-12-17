import $ from 'jquery';
import validate from 'jquery-validation';
window.jQuery = $;
window.$ = $;
$(document).ready(() => {
    $(".toggle-password").on('click', function() {
        console.log('click');
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
        rules: {
            signup_email: {required: true,},
            signup_pass: {required: true,}
        },
        groups: {
            signin: "signup_email signup_pass",
        },
        messages: {
            signup_pass: {
                required: "Incorrect username or password."
            },
            signup_email: {
                required: "Incorrect username or password."
            }
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") =="signup_email" || element.attr("name") =="signup_pass") {
                error.insertAfter("#signin_pass");
            } else {
                error.insertAfter(element);
            }
        },
    });
});
