document.addEventListener("DOMContentLoaded",function(event) {

  document.getElementById('firstName').addEventListener('blur', function(event) {
    var firstName = document.querySelector("#firstName").value;

    if(firstName === "") {
      document.querySelector("#add-firstName-class").className = "form-group has-feedback has-error";
      document.querySelector("#add-firstName-glyph").className = "glyphicon form-control-feedback glyphicon-remove";
    }
    else {
      document.querySelector("#add-firstName-class").className = "form-group has-feedback has-success";
      document.querySelector("#add-firstName-glyph").className = "glyphicon form-control-feedback glyphicon-ok";

    }
  });

  document.querySelector("#lastName").addEventListener('blur',function(event){

    var lastName = document.querySelector("#lastName").value;

    if(lastName === "") {
      document.querySelector("#add-lastName-class").className = "form-group has-feedback has-error";
      document.querySelector("#add-lastName-glyph").className = "glyphicon form-control-feedback glyphicon-remove";
    }

    else {
      document.querySelector("#add-lastName-class").className = "form-group has-feedback has-success";
      document.querySelector("#add-lastName-glyph").className = "glyphicon form-control-feedback glyphicon-ok";
    }
  });

  document.querySelector("#email").addEventListener('blur', function(event){
    var email = document.querySelector("#email").value;

    if(email === "") {
      document.querySelector("#add-email-class").className = "form-group has-feedback has-error";
      document.querySelector("#add-email-glyph").className = "glyphicon form-control-feedback glyphicon-remove";
    }
    else if(email.indexOf('@') === -1 || (email.indexOf('.com') === -1 && email.indexOf('.org') === -1 && email.indexOf('.net') === -1 && email.indexOf('.co.in') === -1)) {
      document.querySelector("#add-email-class").className = "form-group has-feedback has-error";
      document.querySelector("#add-email-glyph").className = "glyphicon form-control-feedback glyphicon-remove";
    }
    else {
      document.querySelector("#add-email-class").className = "form-group has-feedback has-success";
      document.querySelector("#add-email-glyph").className = "glyphicon form-control-feedback glyphicon-ok";
    }

  });

  document.querySelector("#password").addEventListener('blur', function(event){

    var password = document.querySelector("#password").value;

    if(password === "") {
      document.querySelector("#add-password-class").className = "form-group has-feedback has-error";
      document.querySelector("#add-password-glyph").className = "glyphicon form-control-feedback glyphicon-remove";
    }
    else if(password.length < 6) {
      document.getElementById('red-label').style.color = "red";
      document.querySelector("#add-password-class").className = "form-group has-feedback has-error";
      document.querySelector("#add-password-glyph").className = "glyphicon form-control-feedback glyphicon-remove";
    }
    else {
      document.getElementById('red-label').style.color = "green";
      document.querySelector("#add-password-class").className = "form-group has-feedback has-success";
      document.querySelector("#add-password-glyph").className = "glyphicon form-control-feedback glyphicon-ok";
    }

  });

  document.querySelector("#confirmPassword").addEventListener('blur', function(event){

    var password = document.querySelector("#password").value;
    var confirmPassword = document.querySelector("#confirmPassword").value;
    if(confirmPassword === "") {
      document.querySelector("#add-confirmPassword-class").className = "form-group has-feedback has-error";
      document.querySelector("#add-confirmPassword-glyph").className = "glyphicon form-control-feedback glyphicon-remove";
    }
    else if(confirmPassword != password) {
      document.querySelector("#add-confirmPassword-class").className = "form-group has-feedback has-error";
      document.querySelector("#add-confirmPassword-glyph").className = "glyphicon form-control-feedback glyphicon-remove";
    }
    else {
      document.querySelector("#add-confirmPassword-class").className = "form-group has-feedback has-success";
      document.querySelector("#add-confirmPassword-glyph").className = "glyphicon form-control-feedback glyphicon-ok";
    }

  });

});
