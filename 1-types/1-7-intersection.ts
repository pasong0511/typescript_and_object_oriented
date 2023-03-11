{
    /**
     * Intersection Types : &
     * 여러 타입을 모두 만족하는 하나의 타입을 의미
     */

    type Stydent = {
        name: string;
        score: number;
    };

    type Worker = {
        employeeId: number;
        work: () => void;
    };

    //Stydent와 Worke를 받는다
    function internWork(person: Stydent & Worker) {
        console.log(person.name, person.employeeId, person.work());
    }

    //Stydent & Worker 둘다 채워서 넘겨야한다.
    internWork({
        name: "mini",
        score: 1,
        employeeId: 123,
        work: () => {
            console.log("hi~");
        },
    });
}
