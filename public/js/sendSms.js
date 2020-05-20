function sendSms() {
	
	var apiKey="GEIRCHYE9R8X2C97Z5JZR3MZCZ45MJPX";
	var secretCode="AZZDNP57X26TILG9"
	var phoneNum= document.getElementById("mobileNo").value;
	var msg = document.getElementById("note").value;
	alert("APIKey:"+apiKey+"  SecretCode"+secretCode+" "+phoneNum+" msg:"+msg);
  var url ="https://www.sms4india.com/api/v1/sendCampaign?apikey="+apiKey+"&secret="+secretCode+"&usetype=stage&phone="+phoneNum+"&message="+msg+"."; 	
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.withCredentials = true;
  xhttp.send();
  
  
}