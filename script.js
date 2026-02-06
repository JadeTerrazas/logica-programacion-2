

let celsius = Number(prompt("Ingrese la temperatura en grados Celsius:"));

while(typeof celsius === "numer")
{   

    let fahrenheit = (celsius * 1.8) + 32;
    let kelvin = celsius + 273.5;
    alert(celsius + " grados Celsius son: " + fahrenheit + " grados Fahrenheit " + kelvin + " grados Kelvin.");
}
/* else
{
    celsius = Number(prompt("Formato no aceptado. Ingrese en número la temperatura en grados Celsius:"));
} */