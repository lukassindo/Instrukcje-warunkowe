var a = prompt('Enter value a');
var b = prompt('Enter value b');
var value = (a * a) - (2 * a * b) + (b * b);

var elValue = document.getElementById('result');
elValue.textContent = value;
console.log(value);

var msg;
var elHide = document.getElementById('hide');

if (value > 0) {
	msg = 'Jest to wynik dodatni';
} else if (value < 0) {
	msg = 'Jest to wynik ujemny';
} else if (value === 0) {
    msg = 'Jest to wynik zerowy';
} else {
	elHide.style.display = "none";
	msg = 'Nieprawidłowe dane';
}

console.log(msg);

var el = document.getElementById('plusorminus');
el.textContent = msg;






