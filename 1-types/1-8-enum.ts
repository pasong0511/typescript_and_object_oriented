{
    /**
     * Enum
     * 여러가지 상수값을 모아서 정의
     * 타입스크립트에서 enum 많이 쓰이지않음 -> 아무거나 타입 정의 가능함
     * union 타입을 대신해서 사용할 수 있다.
     */

    //enum 키워드와 함께 첫글자는 대문자로 작성해야한다.
    enum Days {
        Monday, //0
        Tuesday, //1
        Wednesday, //2
        Thursday, //3
        Friday, //4
        Saterday, //5
        Sunday, //6
    }

    //순서 할당 가능
    enum DaysOrder {
        Monday = 1, //1부터 시작하게 하려면 지정도 가능
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saterday,
        Sunday,
    }

    //문자열도 할당 가능
    //순서 할당 가능
    enum DaysString {
        Monday = "Monday",
        Tuesday = "Tuesday",
        Wednesday = "Wednesday",
        Thursday = "Thursday",
        Friday = "Friday",
        Saterday = "Saterday",
        Sunday = "Sunday",
    }

    console.log(Days.Monday); // -> 0
    const day = Days.Saterday; // -> 5
    const day2 = DaysOrder.Saterday; // -> 6
    const day3 = DaysString.Saterday; // -> Saterday

    console.log(day);
    console.log(day2);
    console.log(day3);

    type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
    let dayOfWeek: DayOfWeek = "Tuesday"; //지정한 타입만 입력 가능
    //dayOfWeek = "munu"; //에러
    console.log(dayOfWeek);
}
