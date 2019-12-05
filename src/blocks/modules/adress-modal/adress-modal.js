// import $ from "jquery";

$(document).ready(function() {
    (function() {
        
        var $inputAuto = $('#str_address1');
        
        var addrComponents = {
            streetNumber: {
                display: 'short_name',
                type: 'street_number'
            },
            streetName: {
                display: 'long_name',
                type: 'route'
            },
            cityName: {
                display: 'long_name',
                type: 'locality'
            },
            stateName: {
                display: 'short_name',
                type: 'administrative_area_level_1'
            },
            zipCode: {
                display: 'short_name',
                type: 'postal_code'
            }
        };
        
        var autocomplete;
        var autocompleteOptions = {
            radius: 10,
            types: ['geocode']
        };
        
        
        function initAutocomplete() {
            autocomplete = new google.maps.places.Autocomplete($inputAuto[0], autocompleteOptions);
            autocomplete.addListener('place_changed', setAddress);
        };
        
        function setAddress() {
            var place = autocomplete.getPlace().address_components;
            
            var streetAddr = [addrComponents.streetNumber, addrComponents.streetName];
            var streetAddrDisplay = [];
            
            // Add additional field values
            
            place.forEach(function(placeComponent) {
                streetAddr.forEach(function(streetAddrComponent) {
                    if (placeComponent.types[0] === streetAddrComponent.type) {
                        streetAddrDisplay.push(placeComponent[streetAddrComponent.display]);
                    }
                    // else if <additional field values>
                });
            });
            var addrString = streetAddrDisplay.join(' ');
            $inputAuto.val(addrString);
        };
        
        initAutocomplete();
        
    }());
});
