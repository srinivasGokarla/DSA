
//Write a function to convert Celsius to Fahrenheit.

let celsius = 31

function ConvertTemp(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return `${fahrenheit}F`
}
console.log(ConvertTemp(celsius))
