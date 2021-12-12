

// клик на ячейку очищает все ячейки
function clear_input_length() {
    let length = document.querySelectorAll("input[name='length']");
    for (let i=0; i<length.length; i++) {
        length[i].value = null;
    }
}

// конвертеры

function converter_to_kilometres(value, const_1, const_2=1) {
    let res = parseFloat(value) * const_1 / const_2;
    document.getElementById("kilometres").value = res.toFixed(2) + " км";
}


function converter_to_metres(value, const_1, const_2=1) {
    let res = parseFloat(value) * const_1 / const_2;
    document.getElementById("metres").value = res.toFixed(2) + " м";
}

function converter_to_cm(value, const_1, const_2=1) {
    let res = parseFloat(value) * const_1 / const_2;
    document.getElementById("cm").value = res.toFixed(2) + " см";
}

function converter_to_feet(value, const_1, const_2=1) {
    let res = parseFloat(value) * const_1 / const_2;
    document.getElementById("feet").value = res.toFixed(2) + " фут.";
}

function converter_to_inches(value, const_1, const_2=1) {
    let res = parseFloat(value) * const_1 / const_2;
    document.getElementById("inches").value = res.toFixed(2) + " дюйм.";
}

function converter_to_yards(value, const_1, const_2=1) {
    let res = parseFloat(value) * const_1 / const_2;
    document.getElementById("yards").value = res.toFixed(2) + " ярд.";
}

function converter_to_miles(value, const_1, const_2=1) {
    let res = parseFloat(value) * const_1 / const_2;
    document.getElementById("miles").value = res.toFixed(2) + " мил.";
}