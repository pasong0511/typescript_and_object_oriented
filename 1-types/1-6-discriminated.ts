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
}
