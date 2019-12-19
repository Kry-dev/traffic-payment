import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'jquery-validation';
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
    
    $("#signUp").validate({
        successClass: "valid-feedback",
        errorClass: "invalid-feedback",
        ignore: ":hidden",
        rules: {
            signUp_email: {required: true,},
            signUp_pass: {required: true,}
        },
        groups: {
            signup: "signUp_email signUp_pass",
        },
        messages: {
            signUp_email: {
                required: "Incorrect username or password."
            },
            signUp_pass: {
                required: "Incorrect username or password."
            }
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") === "signUp_email" || element.attr("name") === "signUp_pass") {
                error.insertAfter("#signUp_pass");
            } else {
                error.insertAfter(element);
            }
        },
    });
});
