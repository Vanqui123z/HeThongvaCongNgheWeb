document.addEventListener("DOMContentLoaded", function () {
    const expression = document.getElementById("expression");
    const result = document.getElementById("result");
    let currentInput = "0";

    document.querySelectorAll(".btn button").forEach(button => {
        button.addEventListener("click", () => handleButtonClick(button.innerText));
    });

    function handleButtonClick(value) {
        if (value === "=") {
            evaluateExpression();
        } else if (value === "AC") {
            clearLastCharacter();
        } else {
            isNaN(value) && value !== '.' ? handleOperator(value) : handleNumber(value);
        }
        updateDisplay();
    }

    function handleNumber(value) {
        currentInput = (currentInput === "0" || currentInput === "Error") ? value : currentInput + value;
    }

    function handleOperator(operator) {
        if (currentInput !== "Error") {
            if (operator === '×') {
                currentInput += ' * ';
            } else {
                currentInput += ` ${operator} `;
            }
        }
    }

    function clearLastCharacter() {
        currentInput = currentInput.slice(0,-100);
        if (currentInput.trim() === "") {
            currentInput = "0";
        }
    }

    function evaluateExpression() {
        try {
            const evalResult = new Function('return ' + currentInput)();
            result.value = evalResult || "0";
        } catch (error) {
            result.value = "Error";
        }
    }

    function updateDisplay() {
        expression.value = currentInput;
    }
});
