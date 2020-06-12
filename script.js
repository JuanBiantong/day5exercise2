//SOAL 2
function multiplyByNineFifths (number){
	return number *(9/5);
}
function getFarenheit (celcius) {
	return multiplyByNineFifths (celcius) + 32;
}
console.log(getFarenheit(24))

function multiplyByFifthsNine (number){
	return number *(5/9);
}
function getCelsius (farenheit) {
	return multiplyByFifthsNine (farenheit-32);
}
console.log(getCelsius(50))