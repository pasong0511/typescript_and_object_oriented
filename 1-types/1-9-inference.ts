{
    /**
     * 타입추론
     * 타입 명시하지 않아도 알아서 타입 정의
     * 타입 써주는게 좋으니, 타입 추론은 좋지 않음
     */

    let text = "hello"; //타입을 명시하지 않아도 할당한 값으로 인해서 타입 추론이 가능
    //text = 1;   //숫자 타입을 넣으면 에러난다.

    //타입을 명시하지 않아도 알아서 다 할당 할 수 있게 any로 정의내려버림
    function print(mseesage) {
        console.log(mseesage);
    }
    print("gogo");
    //print(11);

    //number 형식 + number 형식 -> number 형식 반환 할 것이라고 추론
    function add(x: number, y: number) {
        return x + y;
    }
    const result = add(1, 2);
}
