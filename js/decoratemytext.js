function hi(){
	alert("Hello, world!");
}

function mbigger(){
	    setInterval(function () {
	        area = document.getElementById('mbig');
	        var fontSize = window.getComputedStyle(area, null).getPropertyValue("font-size");
	        fontSize = parseInt(fontSize) + 2 + "px"
	        area.style.fontSize = fontSize;
	        if(fontSize>24)
	            clearInterval(timer);

	    }, 500);
	}
	//document.getElementById("mbig").style.fontSize=24 + "px";

function mbold(value){
	if(value.checked){
		document.getElementById("mbig").style.fontWeight="bold";
		document.getElementById("mbig").style.color="green";
		document.getElementById("mbig").style.textDecoration="underline";
	}
	else{
		document.getElementById("mbig").style.fontWeight="normal";
	}
}