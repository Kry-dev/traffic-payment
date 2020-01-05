import $ from "jquery";

$(document).ready(function() {
    /** INIT GOOGLE AUTOCOMPLEET */
    let placeSearch;
    let autocomplete;
    const componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'long_name',
        country: 'long_name',
        postal_code: 'short_name',
    };
    
    function initialize() {
        // Create the autocomplete object, restricting the search
        // to geographical location types.
        autocomplete = new google.maps.places.Autocomplete(
            (document.getElementById('autocomplete')), { types: ['geocode'] },
        );
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            fillInAddress();
        });
        
        const autocompleteinput = document.getElementById('autocomplete');
        autocompleteinput.addEventListener('focus keyup', geolocate, true);
    }
    
    // [START region_fillform]
    function fillInAddress() {
        // Get the place details from the autocomplete object.
        const place = autocomplete.getPlace();
        for (const component in componentForm) {
            document.getElementById(component).value = '';
            document.getElementById(component).disabled = false;
        }
        
        // Get each component of the address from the place details
        // and fill the corresponding field on the form.
        for (let i = 0; i < place.address_components.length; i++) {
            // console.log(place.address_components);
            const addressType = place.address_components[i].types[0];
            if (componentForm[addressType]) {
                const val = place.address_components[i][componentForm[addressType]];
                const element = document.getElementById(addressType);
                element.value = val;
                if ((addressType == 'administrative_area_level_1') || (addressType == 'country')) {
                    const valSecond = place.address_components[i].short_name;
                    element.setAttribute('data-code', valSecond);
                    element.setAttribute('data-name', val);
                }
                
                
            }
        }
    }
    function geolocate() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const geolocation = new google.maps.LatLng(
                    position.coords.latitude, position.coords.longitude,
                );
                const circle = new google.maps.Circle({
                    center: geolocation,
                    radius: position.coords.accuracy,
                });
                autocomplete.setBounds(circle.getBounds());
            });
        }
    }
    
    initialize();
    const $save = $('#action-save');
    const $reset = $('#action-reset');
    const $edit = $('#action-edit');
    const $autocomplete = $('#autocomplete-edit');
    const body = $('body');
    const inputs = $autocomplete.find("input");
    // let val = "";
    
    $('#autocomplete').prop('disabled', true);
    console.log($('#autocomplete').val());
    $autocomplete.find('input').prop('disabled', true);
    $autocomplete.find('select').prop('disabled', true);
    $autocomplete.addClass('disabled');
    $autocomplete.hide('fast');
    $autocomplete.on('click', (e) => {
        let getVal = $autocomplete.serialize();
        console.log(getVal);
    });
    $save.on('click', (e) => {
        e.preventDefault();
        let getVal = inputs.map(function () {
            if(this.value != 0 || this.value != ""){
                return this.value; // $(this).val()
            }
            
        }).get();
        // console.log(getVal);
        
        if (!$autocomplete.hasClass('disabled')) {
            
            $('#autocomplete').prop('disabled', true);
            $autocomplete.find('input').prop('disabled', true);
            $autocomplete.find('select').prop('disabled', true);
            $autocomplete.addClass('disabled');
            $autocomplete.hide('slow');
            console.log($('#autocomplete').val());
            $('#autocomplete').val(getVal);
            console.log($('#autocomplete').val());
        }
    });
    
    body.on('click', '#action-edit', (e) => {
        if ($autocomplete.hasClass('disabled')) {
            $('#autocomplete').prop('disabled', false);
            $autocomplete.find('input').prop('disabled', false);
            $autocomplete.find('select').prop('disabled', false);
            $autocomplete.removeClass('disabled');
            $autocomplete.show('slow');
            console.log($('#autocomplete').val());
        }
    });
    
    body.on('click', '#action-reset', (e) => {
        if ($autocomplete.hasClass('disabled')) {
            $('#autocomplete').prop('disabled', false);
            $autocomplete.find('input').prop('disabled', false);
            $autocomplete.find('select').prop('disabled', false);
            $autocomplete.removeClass('disabled');
            $autocomplete.show('slow');
            // console.log($('#autocomplete').val());
        }
        $('#autocomplete').val('');
        $autocomplete.find('input').val('');
        $autocomplete.find('select').val('');
    });
});
