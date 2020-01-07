function register()
{
 var fname = document.forms["rform"]["fname"];
 var lname = document.forms["rform"]["lname"];
 var name = document.forms["rform"]["name"];
 var acno = document.forms["rform"]["acno"];
 var phone = document.forms["rform"]["ph"];
 var email = document.forms["rform"]["email"];
 var address = document.forms["rform"]["address"];
 var ifsc = document.forms["rform"]["ifsc"];
 var psw = document.forms["rform"]["psw"];
 var psw1 = document.forms["rform"]["psw1"];



 if (fname.value == "")
 {
   window.alert("Please enter your First Name.");
   fname.focus();
   return false;
 }

 if (lname.value == "")
 {
   window.alert("Please enter your Last Name.");
   lname.focus();
   return false;
 }

 if (name.value == "")
 {
   window.alert("Please enter User Name.");
   name.focus();
   return false;
 }

 if (address.value == "")
 {
   window.alert("Please enter your address.");
   address.focus();
   return false;
 }

 if (email.value == "")
 {
   window.alert("Please enter a valid e-mail address.");
   email.focus();
   return false;
 }

 if (psw.value == "")
 {
   window.alert("Please enter Password.");
   email.focus();
   return false;
 }


 if (phone.value == "")
 {
   window.alert("Please enter your phone number.");
   phone.focus();
   return false;
 }

 if (acno.value == "")
 {
   window.alert("Please enter a valid Account Number");
   acno.focus();
   return false;
 }

 if (ifsc.value == "")
 {
   window.alert("Please enter a valid IFSC Number.");
   ifsc.focus();
   return false;
 }

 if (psw.value != psw1.value)
 {
   window.alert("Password Miss Match");
   window.alert("Make Sure that password and confirm password matches");
   psw1.focus();
   return false;
 }



}
