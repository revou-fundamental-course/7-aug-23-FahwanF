
var button = document.getElementById("count1")

    inputField.addEventListener('input', function() {
        const inputField = inputField.value
        if (inputValidation(inputValue)) {
            console.log("Success")
            button.style.display = "block"
        }
        else {
            console.log("Fail")
            button.style.display = "none"
        }
    })

function inputValidation(input) {
    const integerRegex = /^-?\d+$/;
    return integerRegex.test(input)
}
