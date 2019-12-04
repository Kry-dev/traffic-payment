import $ from "jquery";

// $(document).ready(function() {
//     $("#address-form").on('submit', function( event ) {
//         console.log( $( this ).serializeArray() );
//         event.preventDefault();
//     });
// });
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let addressForm = document.getElementsByClassName('address-form');
        // Loop over them and prevent submission
        let validation = Array.prototype.filter.call(addressForm, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
