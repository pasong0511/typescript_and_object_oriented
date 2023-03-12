{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeeMaker {
        //클래스에서 한번 정의되고, 해당 클래스를 사용하는데 공유 되는 변수인 경우 static으로 선언 가능
        //class level로 지정되어 클래스 처음 만들때 만들어지고, 동일 클래스들간 공유 가능
        static BEAMS_GRAMM_PER_SHOT: number = 7;
        //static을 붙이지 않은 경우 instance (object) level
        coffeeBeans: number = 0;

        //커피 기계를 만들면서, 커피 콩을 바로 넣으려면 constructor에 정의한다.
        constructor(coffeEeans: number) {
            this.coffeeBeans = coffeEeans;
        }

        //constructor를 거치지 않고, 바로 클래스 함수를 만든다.
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans); //여기서 new로 만들어서 내보냄
        }

        makeCoffee(shots: number): CoffeeCup {
            //스태틱 변수를 사용할 때는 클래스 이름을 써줘야한다.
            if (this.coffeeBeans < shots * CoffeeMaker.BEAMS_GRAMM_PER_SHOT) {
                throw new Error("커피콩 없음");
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEAMS_GRAMM_PER_SHOT;

            return {
                shots,
                hasMilk: false,
            };
        }
    } //CoffeeMaker 클래스 끝

    const maker = new CoffeeMaker(32);
    console.log(maker);

    const maker2 = new CoffeeMaker(14);
    console.log(maker2);

    //클래스를 만들지 않고, static makeMachine() 함수를 통해서 CoffeeMaker 객체 생성 가능
    const maker3 = CoffeeMaker.makeMachine(3);
    console.log(maker3);
}
