const input = document.getElementById("textBox");
const CtF = document.getElementById("toFahrenheit");
const FtC = document.getElementById("toCelsius");
const result = document.getElementById("result");

function convert(){
    if(CtF.checked){
        result.textContent = `${((Number(input.value) * 9) / 5) + 32} F`;
    }

    else if(FtC.checked){
        result.textContent = `${(((Number(input.value) - 32) * 5) / 9 ).toFixed(2)} C`;
    }

    else{
        result.textContent = "Please select an option";
    }
}