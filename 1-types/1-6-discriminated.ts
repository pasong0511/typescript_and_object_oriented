{
    //Discriminated Union
    //구별되는 유니언타입
    //타입에 공통 프로퍼티가 있다면 그 프로퍼티로 유니온 구성원을 구별 할 수 있다.
    //직관적으로 보일 수 있음
    type SuccessState = {
        result: "success"; //공통 프로퍼티
        response: {
            body: string;
        };
    };
    type FailState = {
        result: "fail"; //공통 프로퍼티
        reason: string;
    };

    //여기서 또 타입으로 정의할 수 있다.
    type LoginState = SuccessState | FailState;
    function login2(): LoginState {
        return {
            result: "success",
            response: {
                body: "you loin success😍",
            },
        };
    }
    console.log(login2());

    function printLoginState(state: LoginState) {
        //state.result    result는 공통적으로 있는 프로퍼티이기 때문에 힌트로 보여줌
        if (state.result === "success") {
            console.log(`🎉 ${state.response.body}`);
        } else {
            console.log(`😥 ${state.reason}`);
        }
    }

    //추가
    //공통으로 type 프로퍼티를 갖고있다
    type Type1 = {
        type: "type1";
        data1: string;
    };

    type Type2 = {
        type: "type2";
        data2: string;
    };

    type Type3 = {
        type: "type3";
        data3: string;
    };

    //MyType의 타입은  Type1 | Type2 | Type3 를 갖는다.
    type MyType = Type1 | Type2 | Type3;

    function consumeType(type: MyType) {
        //공통 프로퍼티 type.type으로 구분 가능
        switch (type.type) {
            case "type1":
                console.log(type.data1);
                break;

            case "type2":
                console.log(type.data2);
                break;

            case "type3":
                console.log(type.data3);
                break;
            default:
                throw new Error("Unreceable");
        }
    }

    //타입은 type1 데이터는 string 타입의 hi~~
    consumeType({ type: "type1", data1: "hi~~" });
}
