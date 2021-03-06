(function() {
	let timeId;
	let prvVal;
	let stop;
	const NORMALSPEED = 250;
	const TURBOSPEED = 50;
	let timeInterval = NORMALSPEED;
	let text;
	let idx;

	function changeContent() {
		document.getElementById('tarea').value = text[idx];
		idx = (idx + 1) % text.length;
		if (!stop)
			setTimeout(changeContent, timeInterval);
	};

	function disableInputs(truth) {
		document.getElementById('start').disabled = truth;
		document.getElementById('stop').disabled = !truth;
		document.getElementById('animation').disabled = truth;
		document.getElementById('tarea').readOnly = truth;
	};
	
	function startClick() {
		prvVal = document.getElementById('tarea').value;
		text = prvVal.split("=====\n");
		idx = 0;
		stop = false;
		setTimeout(changeContent, timeInterval);
		disableInputs(true);
	};
	
	function stopClick() {
		stop = true;
		setTimeout(function() {
			document.getElementById('tarea').value = prvVal;
		}, timeInterval);
		disableInputs(false);
	};

	function animationChange() {
		let animType = document.getElementById('animation').value;
		document.getElementById('tarea').value = ANIMATIONS[animType];
	}

	function speedChange() {
		if (document.getElementById('speed').checked) {
			timeInterval = TURBOSPEED;
		} else
			timeInterval = NORMALSPEED;
	}

	function sizeChange() {
		document.getElementById('tarea').style.fontSize = document
				.getElementById('size').value;
	}

	window.onload = function() {
		document.getElementById('start').onclick = startClick;
		document.getElementById('stop').onclick = stopClick;
		document.getElementById('animation').onchange = animationChange;
		document.getElementById('speed').onchange = speedChange;
		document.getElementById('size').onchange = sizeChange;
	};
})();