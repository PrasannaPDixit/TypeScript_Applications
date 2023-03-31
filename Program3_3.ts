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

class CircleX extends Circle
{
    constructor(rad : number)
    {
        super(rad);
    }

    Circumference() : number
    {
        return this.PI * this.Rad * 2;
    }
}

var obj1 = new CircleX(1);
var obj2 = new CircleX(10);

console.log("Area : "+obj1.Area());
console.log("Circumference : "+obj1.Circumference());

console.log("Area : "+obj2.Area());
console.log("Circumference : "+obj2.Circumference());