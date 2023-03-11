/**
 * Let's make a calculator 🧮
 */

//내버전 : Type Alias, | 사용
type Operator = "add" | "substract" | "multiply" | "divide" | "remainder";
function calculate(operator: Operator, num1: number, num2: number) {
    switch (operator) {
        case "add":
            return num1 + num2;
        case "substract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num1 / num2;
        case "remainder":
            return num1 % num2;
        default:
            throw Error("찾을 수 없음");
    }
}

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
