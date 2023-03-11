{
    /**
     * Type Assertions💩
     * 타입을 강요
     * as를 이용해서 타입을 강제로 정의한다
     * 타입이 무조건 확실할 때만 사용하는 것이 좋다.
     */

    function jsString(): any {
        return "hello";
    }

    const result = jsString(); //문자열 반환한다는걸 알고있음
    //원래는 any 였으니, string이 들어오는게 확실하므로 as로 강제로 타입이 string이라고 정의
    console.log((result as string).length);
    console.log(<string>result.length); //제네릭을 이용해서 강제할 수 도 있다.

    const wrong: any = 5; //숫자로 정의
    console.log((wrong as Array<number>).push(1)); //숫자인데 배열로 정의해두고, push 하려고 해서 에러남 👿

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers();
    numbers!.push(2); //!는 무조건 옵션
}
