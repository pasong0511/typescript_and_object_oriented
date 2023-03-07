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

    //unknown : 어떤 종류인지 알수 없는 타입인 경우 💩 가능하면 쓰지않는 것이 좋다.
    let notSure: unknown = 0;
    notSure = "he"; //문자열 할당 가능
    notSure = true; //boolean 할당 가능

    //any : 어떤 것이든 담을 수 있는 타입
    let anything: any = 0;
    anything = "hello"; //문자도 담을 수 있다.

    //viod : 아무런 값을 리턴하지 않을 때 사용
    function print(): void {
        console.log("");
    }

    let unusable: void = undefined; //💩 이렇게는 쓰지않는다.

    //never : 리턴하지않음
    function throwError(message: string): never {
        //message -> server(log) : 서버에 에러 메시지 전달할 때는 반환값이 없음
        throw new Error(message);

        //끝나지 않은 코드
        while (true) {}
    }

    //object : 원시타입을 제외한 모든 오브젝트 타입 할당 가능
    let obj: object;
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({ name: "ellie" });
    acceptSomeObject({ animal: "dog" });
}
