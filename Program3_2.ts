class Circle
{
    PI : number;
    Rad : number;

    constructor(rad : number)
    {
        this.Rad = rad;
        this.PI = 3.14;
    }

    Area() : number
    {
        let Result : number = 0;
        Result = this.PI * this.Rad * this.Rad;
        return Result;
    }
}

var obj = new Circle(1);

console.log("Area : "+obj.Area());