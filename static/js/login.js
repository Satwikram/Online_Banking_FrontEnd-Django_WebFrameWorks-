function login() {

  var ph = document.forms["login"]["ph"];
  var psw = document.forms["login"]["psw"];

  if (ph.value == null || ph.value == "")
  {
      window.alert("Please enter the Phone Number.");
      ph.focus()
      return false;
  }
  if (psw.value == null || psw.value == "")
  {
        window.alert("Please enter the password.");
        psw.focus()
        return false;
  }
  alert('Login successful');
}
