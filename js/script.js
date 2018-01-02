var a = 4;
var b = 7;
var value = (a * a) - (2 * a * b) + (b * b);

var elValue = document.getElementById('result');
elValue.innerHTML = value;
console.log(value);

var msg;

if (value > 0) {
	msg = 'Jest to wynik dodatni';
	console.log('Jest to wynik dodatni');
} else if (value < 0) {
	msg = 'Jest to wynik ujemny';
	console.log('Jest to wynik ujemny');
} else {
    msg = 'Jest to wynik zerowy';
    console.log('Jest to wynik zerowy');
}

var el = document.getElementById('plusorminus');
el.textContent = msg;






