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
            signin_email: {required: true,},
            signin_pass: {required: true,}
        },
        groups: {
            signin: "signin_email signin_pass",
        },
        messages: {
            signin_pass: {
                required: "Incorrect username or password."
            },
            signin_email: {
                required: "Incorrect username or password."
            }
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") =="signin_email" || element.attr("name") =="signin_pass") {
                error.insertAfter("#signin_pass");
            } else {
                error.insertAfter(element);
            }
        },
    });
    $('input,select').on('blur keyup', function() {
        if ($("#sign-in").valid()) {
            $('#submit').prop('disabled', false);
        } else {
            $('#submit').prop('disabled', 'disabled');
        }
    });
});
