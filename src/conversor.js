function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusParaKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitParaCelsius(f) {
    return (f - 32) * 5/9;
}

function fahrenheitParaKelvin(f) {
    return (f - 32) * 5/9 + 273.15;
}

function kelvinParaCelsius(k) {
    return k - 273.15;
}

function kelvinParaFahrenheit(k) {
    return (k - 273.15) * 9/5 + 32;
}

module.exports = {
    celsiusParaFahrenheit,
    celsiusParaKelvin,
    fahrenheitParaCelsius,
    fahrenheitParaKelvin,
    kelvinParaCelsius,
    kelvinParaFahrenheit
};
