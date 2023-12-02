function validEmail(str) {
  //your JS code here.
	var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	if(str.value.match(mailformat))
	{
		return false;
	}
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
