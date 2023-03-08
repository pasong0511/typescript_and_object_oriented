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
}
