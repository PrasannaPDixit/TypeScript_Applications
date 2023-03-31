
class Arithmatic
{
    No1 : number;
    No2 : number;
    Result : number;

    constructor(no1:number, no2:number)
    {
        this.No1 = no1;
        this.No2 = no2;
        this.Result = 0;
    }

    Addition = () :number=>
    {
        this.Result = this.No1 + this.No2;
        return this.Result;
    }

    Substraction = () : number =>
    {
        this.Result = this.No1 - this.No2;
        return this.Result;
    }

    Multiply() : number
    {
        this.Result = this.No1 * this.No2;
        return this.Result;
    }
    Division = function() : number
    {
        this.Result = this.No1 / this.No2;
        return this.Result;   
    }
}

var obj1 = new Arithmatic(50,10);
var obj2 = new Arithmatic(100,9);

console.log("Addition : "+obj1.Addition());
console.log("Substraction : "+obj1.Substraction());
console.log("Multiplication : "+obj1.Multiply());
console.log("Division : "+obj1.Division());

console.log("Addition : "+obj2.Addition());
console.log("Substraction : "+obj2.Substraction());
console.log("Multiplication : "+obj2.Multiply());
console.log("Division : "+obj2.Division());