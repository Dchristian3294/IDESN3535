console.log("The user has submitted their contact information");

function validate_form_data() {

    var first_name = document.getElementById('first_name');
    console.log("first_name");

    var email = document.getElementById('email');
    console.log("email" + first_name.value);

    var first_name_value = first_name.value ;
    var email_value = email.value ;

    function check_string_length ( object, minimum_length ) {

        var string_to_check_length = object.value.length ;

        if ( string_to_check_length > minimum_length ) {
            console.log (object + " is long enough.")

            object.className = "text_field_format" ;
            first_name_error_message.className = "hidden error_message_format" ;

        }

        else {
            console.log (object + " is too short.")

            object.className = "text_field_format_error" ;

        }

    check_string_length(first_name, 2, first_name_error_message ) ;

    check_string_length(email, 5, email_error_message ) ;

}}