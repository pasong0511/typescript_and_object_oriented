{
    //JS 💩
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    //TS
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    //JS
    function jsFetchNum() {
        //Code ..
        //Code ..
        //Code ..

        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    //TS
    //Promise를 반환
    function fetchNum(id: string): Promise<number> {
        //Code ..
        //Code ..
        //Code ..

        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    //JS -> TS
    //Optional parameter : ? : 전달해도 되고, 안해도 되고
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }

    printName("mimi", "kim");
    printName("mimi");
    printName("mimi", undefined);

    //Default parameter : 아무것도 전달하지 않으면 기본 값이 전달된다.
    function printMessage(message: string = "기본 메시지") {
        console.log(message);
    }
    printMessage();

    //Rest parameter
    //넘어오는 숫자들을 배열로 받겠다.
    function addNumber(...nums: number[]): number {
        return nums.reduce((a, b) => a + b);
    }

    console.log(addNumber(1, 2));
    console.log(addNumber(1, 2, 3, 4));
    console.log(addNumber(1, 2, 3, 4, 5, 0));
}
