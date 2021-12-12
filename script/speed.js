

// клик на ячейку очищает все ячейки
function clear_input_speed() {
    let speed = document.querySelectorAll("input[name='speed']");
    for (let i=0; i<speed.length; i++) {
        speed[i].value = null;
    }
}

// конвертеры

function converter_to_KPH(value, const_1, const_2) {
    let res = parseFloat(value) * const_1 / const_2;
    document.getElementById("KPH").value = res.toFixed(2) + " км/ч";
}


function converter_to_MPH(value, const_1, const_2) {
    let res = parseFloat(value) * const_1 / const_2;
    document.getElementById("MPH").value = res.toFixed(2) + " миль/ч";
}

function converter_to_knots(value, const_1, const_2) {
    let res = parseFloat(value) * const_1 / const_2;
    document.getElementById("knots").value = res.toFixed(2);
}