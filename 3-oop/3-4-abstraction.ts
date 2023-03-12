{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    //인터페이스 정의
    //makeCoffee() 함수 구현은 필수이다.
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    //CoffeeMachine클래스는 CoffeeMaker 인터페이스를 구현한다.
    class CoffeeMachine implements CoffeeMaker {
        private static BEAMS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans); //여기서 new로 만들어서 내보냄
        }

        fillCoffeBeans(beans: number) {
            if (beans < 0) {
                throw new Error("커피 콩은 0 보다 큰거만 들어와야해");
            }
            this.coffeeBeans += beans;
        }

        private grindBeans(shots: number) {
            console.log(`${shots}샷을 위한 커피콩 갈기`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEAMS_GRAMM_PER_SHOT) {
                throw new Error("커피콩 없음");
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEAMS_GRAMM_PER_SHOT;
        }

        private preheat() {
            console.log("따듯하게 데우는 중");
        }

        private extract(shots: number) {
            console.log(`${shots}샷 커피 내리는 중`);

            return {
                shots,
                hasMilk: false,
            };
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    } //CoffeeMaker 클래스 끝

    const maker = CoffeeMachine.makeMachine(32);
    maker.fillCoffeBeans(20);
    maker.makeCoffee(2);

    const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
    maker2.fillCoffeBeans(20); //CoffeeMaker 인터페이스에 fillCoffeBeans()는 없어서 에러
    maker2.makeCoffee(2);
}
