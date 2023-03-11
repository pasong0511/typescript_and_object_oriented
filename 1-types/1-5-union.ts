{
    /**
     * Union Tupes : OR
     * 여러 타입 중에 선택(select) 가능
     */
    type Direction = "left" | "right" | "up" | "down";
    function move(direction: Direction) {
        console.log(direction);
    }
    move("up");
    move("left");

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16; //TileSize에 정의된 값만 사용 가능

    //로그인 할때 success, fail 반환 함수
    type LoinResponse = "success" | "fail";
    function login(loginResponse: LoinResponse) {
        return loginResponse;
    }

    console.log(login("success"));
    console.log(login("fail"));

    type SuccessState = {
        response: {
            body: string;
        };
    };
    type FailState = {
        reason: string;
    };

    // function login2(): SuccessState | FailState {
    //     return {
    //         response: {
    //             body: "you loin success😍",
    //         },
    //     };
    // }

    //여기서 또 타입으로 정의할 수 있다.
    type LoginState = SuccessState | FailState;
    function login2(): LoginState {
        return {
            response: {
                body: "you loin success😍",
            },
        };
    }
    console.log(login2());

    //printLoginState(state: LoginState) 만들기
    //success -> 🎉
    //fail -> 😥
    function printLoginState(state: LoginState) {
        if ("response" in state) {
            console.log(`🎉 ${state.response.body}`);
        } else {
            console.log(`😥 ${state.reason}`);
        }
    }
}
