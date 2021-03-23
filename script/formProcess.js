function bookingProcess()
{
	var bookingFormProcess = document.getElementById("booking");
	if (formValidate(bookingFormProcess) )
	alert("Your booking is Made Succefully");
}
function formValidate(bookingFormProcess)
{
	var Vname = bookingFormProcess.Vname.value;
	
	var msg="";
	
	if(Vname=="")
		msg+="Please enter your name";
	
	if(msg=="")
		return true;
	else
	{
		alert(msg);
		return false;
	}
}