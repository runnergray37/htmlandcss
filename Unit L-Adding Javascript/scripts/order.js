//Chris Gray HTML5 Unit L Skills Review

//Step 3
function writeConf(place) {
  alert("This pizza has been added to your cart for delivery to "+place+"");
  }
//Step 5
//Step 4
  function validateReq() {
	var name=document.getElementById('nameinput').value;
	var address=document.getElementById('addrinput').value;
	var city=document.getElementById('cityinput').value;
	var phone=document.getElementById('phoneinput').value;
	if (name ==null || name =="" || address ==null || address =="" || city ==null || city =="" || phone ==null || phone ==""){
		alert("Name, Street address, City and Phone must be filled out");
		return false;
	    }
//Step 5
    writeConf(city);
	document.forms('order').reset();
    }
//Step 6
/*function insertPlaceholders() {
    if (!Modernizr.input.placeholder) {
    document.getElementById('nameinput').value="First and last name";
    document.getElementById('addrinput').value="Building number and street";
    document.getElementById('emailinput').value="address@example.com";
    }
    }
window.onload=function() {
  addPlaceholders();
  }*/
function insertPlaceholders() {
  if (!Modernizr.input.placeholder) {
		var inputs = document.getElementsByTagName("input");
		for (var i=0;i<inputs.length;i++) {
		  if (inputs[i].getAttribute("type") == "text" || "email") {
			  if (inputs[i].getAttribute("placeholder") && inputs[i].getAttribute("placeholder").length > 0) {
			    inputs[i].value = inputs[i].getAttribute("placeholder");
			    inputs[i].onclick = function() {
 				    if (this.value == this.getAttribute("placeholder")) {
 			 	     this.value = "";
  				   }
  			    return false;
  				  }
  			  inputs[i].onblur = function() {
  			  	if (this.value.length < 1) {
   			 	    this.value = this.getAttribute("placeholder");
     				  }
					  }
   				}
  			}
			}
		}
	}