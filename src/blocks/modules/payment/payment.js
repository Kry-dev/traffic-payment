import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import FormValidation from "formvalidation";

$(document).ready(function() {
    $('select').select2();
    $('.js-states').select2({
        minimumResultsForSearch: -1,
        placeholder: "Select a state",
    });
});

document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('payment'),
        {
            fields: {
                str_phone: {
                    validators: {
                        phone: {
                            message: 'The value is not a valid phone number'
                        }
                    }
                },
                // firstName: {
                //     validators: {
                //         notEmpty: {
                //             message: 'The first name is required'
                //         },
                //         regexp: {
                //             regexp: /^[a-zA-Zs]+$/,
                //             message: 'The first name can only consist of alphabetical and space'
                //         }
                //     }
                // },
                // lastName: {
                //     validators: {
                //         notEmpty: {
                //             message: 'The last name is required'
                //         },
                //         regexp: {
                //             regexp: /^[a-zA-Zs]+$/,
                //             message: 'The last name can only consist of alphabetical and space'
                //         }
                //     }
                // },
                str_county: {
                    validators: {
                        notEmpty: {
                            message: 'The city is required'
                        }
                    }
                },
                // city: {
                //     validators: {
                //         notEmpty: {
                //             message: 'The city is required'
                //         }
                //     }
                // },
                // state: {
                //     validators: {
                //         notEmpty: {
                //             message: 'The state is required'
                //         }
                //     }
                // },
                // zipcode: {
                //     validators: {
                //         notEmpty: {
                //             message: 'The zipcode is required'
                //         }
                //     }
                // },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap: new FormValidation.plugins.Bootstrap({
                    rowSelector: function(field, ele) {
                        // field is the field name
                        // ele is the field element
                        switch (field) {
                            // case 'firstName':
                            // case 'lastName':
                            //     return '.col-sm-4';
                            
                            case 'phoneNumber':
                            case 'str_county':
                            // case 'city':
                            // case 'state':
                            // case 'zipcode':
                            //     return '.col-sm-3';
                            //
                            default:
                                return '.form-group';
                        }
                    }
                }),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh'
                }),
            },
        }
    );
});
