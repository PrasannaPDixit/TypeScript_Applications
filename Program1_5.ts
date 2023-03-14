
function Fibonacci(iNo : number) : void
{
    let iCurr : number = 1;
    let iPrev : number = 0;
    let iSum : number = 1;

    while(iCurr <= iNo)
    {
        console.log(iSum);
        iSum = iCurr + iPrev;
        iPrev = iCurr;
        iCurr = iSum;
    }
}

var iValue : number = 59;

Fibonacci(iValue);

