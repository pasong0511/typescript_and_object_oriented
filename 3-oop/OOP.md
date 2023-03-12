OOP

### 원칙

캡슐화, 추상화, 상속, 다형성



### 1. 절차지향적으로 커피 기계 만들기

```typescript
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
```





---

### 2. 객체지향적으로 커피 기계 만들기(static)



static : static 프로퍼티를 이용하면 new 없이 호출 가능

```typescript
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


 
출력
CoffeeMaker { coffeeBeans: 32 }
CoffeeMaker { coffeeBeans: 32 }
CoffeeMaker { coffeeBeans: 3 }

```





### Encapsulation 캡슐화 시켜보기

private : 외부에서 접근 불가능

protected : 상속 할 때, 외부에서 접근 할수는 없지만, 해당 클래스를 상속한 자식클래스에서만 사용 가능

```typescript
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
    static makeMachine(coffeeBeans: number): CoffeeMaker {
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
//maker.coffeeEeans = 1;        //-> coffeeBeans이 private로 접근 불가능
maker.fillCoffeBeans(20);
```



static을 붙여서 object를 만들 수 있는 함수를 제공한다면,

누군가가 생성자를 이용해서 객체를 만드는 것을 금지하기 위해서

constructor 앞에 protected를 붙여서  static makeMachine() 함수를 이용해서 객체를 생성 하루 수있도록 한다.

```typescript
class CoffeeMaker {
    private static BEAMS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    protected constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
        return new CoffeeMaker(coffeeBeans); //여기서 new로 만들어서 내보냄
    }
    
    ...
}
    
const maker2 = CoffeeMaker.makeMachine(2);
```

