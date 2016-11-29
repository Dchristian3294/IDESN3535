/**
 * Created by rickypuorro on 10/14/16.
 */


function radiocolor(color) {
    if (color == "orange") {
        $("body").css("background", "coral");
        return false;

    } else if (color == "teal") {
        $("body").css("background", "#1dbcbd");
        return false;
    } else if (color == "slate") {
        $("body").css("background", "#37474F");
        return false;


    } else if (color == "lightblue");{
        $("body").css("background", "#00B0FF");
    }
}

function validate_form_data() {
    console.log("The user has submitted the form.");



    var fullname = $('#fullname').val().length ;
 //  document.getElementById('fullname');
   // console.log(fullname.value);

    console.log("fullname: "+fullname);

    var email = $("#enteremail").val().length;

    var password = $("#password").val().length;


    // object.property
    // object.method()



    console.log('email: ' + email);


        if (fullname < 2)  {
            console.log("i got here");
           $("#fullname").focus();
            $("#errorBox").html ("name must be longer than 2 characters");

            return;
        }

        if (email < 5) {
            $("#email").focus();
            $("#errorBox").html ("email must be longer than 5 characters");

            return;
        }

        if (password < 10) {
           $("#password").focus();
           $("#errorBox").html ("password must be longer than 10 characters");
            return;
        }
        if (document.form.radiobutton[0].checked == false && document.form.radiobutton[1].checked == false && document.form.radiobutton[2].checked ==
            false && document.form.radiobutton[3].checked == false) {
            $("#errorBox").html ("pick a color");
            return;
        }
        else $("#errorBox").html (" ");

    if (fullname != '' && email != '' && password != '') {
            $("#message").html ("form submitted successfully");
        }}
