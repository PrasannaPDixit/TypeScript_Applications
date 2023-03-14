
function DisplayFactors(iNo : number) : void
{
    let iCnt : number = 0;

    for(iCnt = 1; iCnt <= Math.floor(iNo / 2); iCnt++)
    {
        if(iNo % iCnt == 0)
        {
            console.log(iCnt);
        }
    }
}

var iValue : number = 20;

DisplayFactors(iValue);