{
    //타입스크립트
    //number
    const num: number = -6;

    //string
    const srt: string = "hello";

    //boolean
    const boal: boolean = false;

    //undefine : 값이 있는지 없는지 아무것도 결정되지 않은 상태
    let name: undefined; //💩 이렇게는 쓰지않는다.
    let age: number | undefined; //숫자일수도 있고 undefined 일수도있다.

    age = undefined;
    age = 1;

    //숫자를 찾거나, undefine을 반환하는 함수
    function find(): number | undefined {
        return undefined;
    }

    //null : 값이 비어있는 상태(값이 비어있다고 결정)
    let person: null; //💩 이렇게는 쓰지않는다.
    let person2: string | null;
}
