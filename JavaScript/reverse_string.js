function reverseString(str) {
	return String(str).split('').reverse().join('');
}

function onReverseClick() {
	const input = document.getElementById('textInput').value;
	const reversed = reverseString(input);
	document.getElementById('result').textContent = reversed;
	alert('Reversed string: ' + reversed);
}
