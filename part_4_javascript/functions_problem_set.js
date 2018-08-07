// 1.
function isEven(num) {
    return num%2 === 0;
}

// 2.
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    for (var i = num-1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

// 3.
function kebabToSnake(string) {
    return string.replace("-", "_")
}
