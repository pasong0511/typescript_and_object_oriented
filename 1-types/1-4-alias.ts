{
    //Type Aliases
    //내가 타입을 직접 정의할 수 있다.
    type Text = string; //지금부터 Text는 문자열을 말한다.
    const name: Text = "kimmimi"; //타입 Text는 sring임

    const address: Text = "";
    type Num = number;

    //object 형식도 만들 수 있다
    type Student = {
        name: string;
        age: number;
    };
    const student: Student = {
        name: "mimi", //Student안에 들어간 타입만 만들 수 있다.
        age: 12,
    };

    /**
     * String Literal Types
     *
     */
    type Name = "name";
    let elliName: Name; //"name"이라는 sring만 지정 가능
    //elliName = "test";  //이건 불가능하다
    elliName = "name";

    type JSON = "json"; //"json"이라는 sting 지정
    const json: JSON = "json"; //JSON 타입은 "json" 스트링만 나올 수 있다.

    type Boal = true;
    //const isCat: Boal = false;        //에러
}
