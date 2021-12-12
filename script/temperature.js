

// клик на ячейку очищает все ячейки
function clear_input() {
    let temperature = document.querySelectorAll("input[name='temperature']");
    for (let i=0; i<temperature.length; i++) {
        temperature[i].value = null;
    }
}

// дописывает единицу измерения
// отключено, т.к. результат некорректен если использовать клавишу backspace 
let user_text;
let parse_user_text;
function unit_of_measurement(id, measurement) {
    user_text = document.getElementById(id).value;
    parse_user_text = user_text.replace(measurement, "");
    document.getElementById(id).value = parse_user_text + measurement;
}

/* converter formulas*/
function converter_to_fahrenheit(value, const_1, const_2, const_3) {
    let res = (parseFloat(value) - const_1) * const_2 + const_3;
    document.getElementById("fahrenheit").value = res.toFixed(2) + " °F";
}


function converter_to_celsius(value, const_1, const_2, const_3) {
    let res = (parseFloat(value) - const_1) / const_2 - const_3;
    document.getElementById("celsius").value = res.toFixed(2) + " ℃";
}

function converter_to_kelvin(value, const_1, const_2, const_3) {
    let res = (parseFloat(value) - const_1) / const_2 + const_3;
    document.getElementById("kelvin").value = res.toFixed(2) + " K";
}