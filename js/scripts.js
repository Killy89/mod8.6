var a = prompt('Podaj a: '),
    b = prompt('Podaj b: ');

var value = (a * a) - (2 * a * b) + (b * b);

if (value > 0) {
    alert('Wynik jest dodatni i wynosi: ' + value);
    console.log('Wynik jest dodatni i wynosi: ' + value);
}
else if (value < 0) {
    alert('Wynik jest ujemny i wynosi: ' + value);
    console.log('Wynik jest ujemny i wynosi: ' + value);
}
else {
    alert('Wynik jest równy zero');
    console.log('Wynik jest równy zero');
}