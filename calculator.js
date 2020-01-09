var form            = document.getElementById("calculator"),
    input           = document.getElementById("calculator-number"),
    one             = document.getElementById("number-1"),
    two             = document.getElementById("number-2"),
    three           = document.getElementById("number-3"),
    four            = document.getElementById("number-4"),
    five            = document.getElementById("number-5"),
    six             = document.getElementById("number-6"),
    seven           = document.getElementById("number-7"),
    eight           = document.getElementById("number-8"),
    nine            = document.getElementById("number-9"),
    dividedBy       = document.getElementById("number-/"),
    plus            = document.getElementById("number-+"),
    minus           = document.getElementById("number--"),
    multipliedBy    = document.getElementById("number-*"),
    equel           = document.getElementById("number-="),
    clear           = document.getElementById("number-c");

one.addEventListener("click", function() {
    input.value = this.textContent;
})
