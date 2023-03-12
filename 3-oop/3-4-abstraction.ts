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

    //조금 더 상업적인 인터페이스
    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeBeans(beans: number): void;
        clean(): void;
    }

    //CoffeeMachine클래스는 CoffeeMaker 인터페이스를 구현한다.
    //CommercialCoffeeMaker 인터페이스도 같이 구현하고있다.
    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
        private static BEAMS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans); //여기서 new로 만들어서 내보냄
        }

        fillCoffeBeans(beans: number): void {
            if (beans < 0) {
                throw new Error("커피 콩은 0 보다 큰거만 들어와야해");
            }
            this.coffeeBeans += beans;
        }

        clean(): void {
            console.log("커피머신 청소 중~ 🧹");
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

    class AmateurUser {
        //CoffeeMaker 인터페이스를 가져온다.
        constructor(private machine: CoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2); //커피만 만들 수 있다.
            console.log(`AmateurUser가 coffee 만드는 중☕`);
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeBeans(45); //커피콩도 추가 가능
            this.machine.clean();
            console.log(`ProBarista coffee 만드는 중☕`);
        }
    }

    //동일한 커피 머신이여도 어떤 인터페이스를 받느냐에 따라서 쓸수있는 범위가 달라진다.
    //동일한 오브젝트의 인스턴스여도 AmateurUser, ProBarista는 생성자에서
    //CoffeeMaker, CommercialCoffeeMaker를 받아오기 때문에 인터페이스에서 규약된 함수만 접근 가능
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    const amateur = new AmateurUser(maker); //AmateurUser는 CoffeeMaker 인터페이스
    const pro = new ProBarista(maker); //ProBarista는 CommercialCoffeeMaker 인터페이스를 구현

    amateur.makeCoffee();
    pro.makeCoffee();
}
