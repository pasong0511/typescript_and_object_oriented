{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    const BEAMS_GRAMM_PER_SHOT: number = 7; //커피 한잔 뽑는데 필요한 커ㅠㅣ
    let coffeeBeans: number = 0; //기존에 갖고있던 커피콩

    function makeCoffee(shots: number): CoffeeCup {
        //남아있는 커피콩의 양보다 만드는 필요한 커피콩이 더 많은 경우 -> 에러
        if (coffeeBeans < shots * BEAMS_GRAMM_PER_SHOT) {
            throw new Error("커피콩 없음");
        }
        coffeeBeans -= shots * BEAMS_GRAMM_PER_SHOT;

        return {
            shots,
            hasMilk: false,
        };
    }

    coffeeBeans += 3 * BEAMS_GRAMM_PER_SHOT; //커피콩 충전
    const coffee = makeCoffee(2);
    console.log(coffee);
}
