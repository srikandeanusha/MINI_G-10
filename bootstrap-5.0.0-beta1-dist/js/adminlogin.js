$(document).ready(function () {

// Show Password in confirm password
$(document).on('click', '.toggle-password', function() {
    var input = $("#confirm-password");
    let getData = document.getElementById("confirm-password").value;
    if(getData == ""){
        $(this).toggleClass("fa-eye fa-eye-slash");
    }
    else{
        $(this).toggleClass("fa-eye fa-eye-slash");
    }
    
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});
$(function () {
    //for confrim password
    $("#signin").click(function () {
        var password = $("#password").val();
        var confirmPassword = $("#confirm-password").val();
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
    });
  });
  //for admin credentials
  
    document.getElementById("signin").addEventListener("click",function () {
        var username="cybage";
        var password = $("#password").val();
        if (username!==password)
        {
            alert("Credentials entered");
            window.location = "../html/admindashboard.html"; 
            return false;
        }
        return true;
    });
  });
  


