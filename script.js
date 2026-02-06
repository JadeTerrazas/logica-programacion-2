

let celsius = Number(prompt("Conversor de temperaturas. \nIngrese la temperatura en grados Celsius:"));

if(isNaN(celsius))
{
do
{
    celsius = Number(prompt("Formato incorrecto. Ingresa la temperatura en grados Celsius:"));

}while(isNaN(celsius))
}

    let fahrenheit = (celsius * 1.8) + 32;
    let kelvin = celsius + 273.5;
    alert(celsius + "° C son:\n\n Grados Kelvin: " + kelvin + "\n Grados Fahrenheit: " + fahrenheit);