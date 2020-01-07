 function loan()
{
	var name = document.forms["LoanForm"]["name"];
	var acno = document.forms["LoanForm"]["acno"];
	var phone = document.forms["LoanForm"]["ph"];
	var email = document.forms["LoanForm"]["email"];
	var tennure = document.forms["LoanForm"]["tennure"];
	var address = document.forms["LoanForm"]["address"];
  var la = document.forms["LoanForm"]["la"];


	if (name.value == "")
	{
		window.alert("Please enter your name.");
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

	if (phone.value == "")
	{
		window.alert("Please enter your phone number.");
		phone.focus();
		return false;
	}

	if (la.value == "")
	{
		window.alert("Please enter Loan Amount");
		la.focus();
		return false;
	}

	if (tennure.selectedIndex < 1)
	{
		alert("Please Select Tennure.");
		tennure.focus();
		return false;
	}

}
