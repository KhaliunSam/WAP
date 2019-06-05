function hi(){
	alert("Hello, world!");
}

var timerId = 0;
function mbigger(){
	if(timerId == 0)
		timerId = setInterval(increaseFontSize, 500);
	else {
        clearInterval(timerId);
        timerId = 0;
    }	
}
	//document.getElementById("mbig").style.fontSize=24 + "px";

function increaseFontSize(){
	var area = document.getElementById('mbig');
    var fontSizeStr = window.getComputedStyle(area, null).getPropertyValue("font-size");
    var fontSize = parseInt(fontSizeStr);
    
    if(fontSize >= 24){
        clearInterval(timerId);
        timerId = 0;
        return;
    }
    fontSizeStr = fontSize + 2 + "px";
    area.style.fontSize = fontSizeStr;
    console.log(fontSizeStr);
}

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