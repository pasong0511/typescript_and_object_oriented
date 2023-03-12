{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    //public
    //private
    //protected : 상속 할 때, 외부에서 접근 할수는 없지만, 해당 클래스를 상속한 자식클래스에서만 사용 가능
    class CoffeeMaker {
        //클래스에서 한번 정의되고, 해당 클래스를 사용하는데 공유 되는 변수인 경우 static으로 선언 가능
        //class level로 지정되어 클래스 처음 만들때 만들어지고, 동일 클래스들간 공유 가능
        private static BEAMS_GRAMM_PER_SHOT: number = 7;
        //static을 붙이지 않은 경우 instance (object) level
        private coffeeBeans: number = 0;

        //커피 기계를 만들면서, 커피 콩을 바로 넣으려면 constructor에 정의한다.
        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        //constructor를 거치지 않고, 바로 클래스 함수를 만든다.
        makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans); //여기서 new로 만들어서 내보냄
        }

        //함수를 통해서 커피를 채움
        fillCoffeBeans(beans: number) {
            if (beans < 0) {
                throw new Error("커피 콩은 0 보다 큰거만 들어와야해");
            }
            this.coffeeBeans += beans;
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
    maker.fillCoffeBeans(20);

    class User {
        //getter를 이용하자 -> 접근할 떄는 멤버 변수를 접근하는 것 처럼 접근한다.(user.fullName)
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }

        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number) {
            if (num < 0) {
                throw new Error("0 보다 작은 값은 넣을 수 없음");
            }
            this.internalAge = num;
        }
        constructor(private firstName: string, private lastName: string) {}
    }

    const user = new User("스티브", "잡스");
    user.age = 6;
    //user.age = -122;      //0보다 작은 수 넣어서 set의 조건문에서 걸려서 에러남
}
