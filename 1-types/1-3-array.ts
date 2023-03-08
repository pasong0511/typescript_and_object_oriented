{
    //Array
    //타입 넣고[] 또는 Array<> 제네릭으로 정의
    const fruits: string[] = ["토마토", "바나나"];
    const scores: Array<number> = [1, 2, 3];

    //readonly : 타입 변경 불가능 오직 읽기만 가능
    //Array<number>는 readonly 불가능
    function printArray(fruites: readonly string[]) {
        //fruites.push("밥");   //불가능하다

        console.log(fruites); //이건 가능하다
    }
    printArray(["호박", "오징어", "문어"]);

    //Tuple : 배열이긴 배열이나, 서로다른 타입을 함께 갖을 수 있는 타입
    //별로 권장하지는 않음 가독성 떨어짐
    //대신 interface, type alias, class를 사용해라
    let student: [string, number];
    student = ["name", 123];
    student[0]; //name
    student[1]; //123
    const [name, age] = student; //이렇게 써야함 불편함..
}
