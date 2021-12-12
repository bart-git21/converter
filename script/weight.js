

// клик на ячейку очищает все ячейки
function clear_input_weight() {
    let weight = document.querySelectorAll("input[name='weight']");
    for (let i=0; i<weight.length; i++) {
        weight[i].value = null;
    }
}

// конвертеры

function converter_to_kilograms(value, const_1, const_2) {
    let res = parseFloat(value) * const_1 / const_2;
    document.getElementById("kilograms").value = res.toFixed(2) + " кг";
}


function converter_to_grams(value, const_1, const_2) {
    let res = parseFloat(value) * const_1 / const_2;
    document.getElementById("grams").value = res.toFixed(2) + " г";
}

function converter_to_pounds(value, const_1, const_2) {
    let res = parseFloat(value) * const_1 / const_2;
    document.getElementById("pounds").value = res.toFixed(2) + " фунтов";
}

function converter_to_ounces(value, const_1, const_2) {
    let res = parseFloat(value) * const_1 / const_2;
    document.getElementById("ounces").value = res.toFixed(2) + " унций";
}