
function CheckPrime(iNo : number) : boolean
{
    let iCnt : number = 0;
    let bFlag = true;

    for(iCnt = 2; iCnt <= Math.floor(iNo / 2); iCnt++)
    {
        if(iNo % iCnt == 0)
        {
            bFlag = false;
            break;
        }
    }
    return bFlag;
}

var iValue : number = 11;

var bRet : boolean = CheckPrime(iValue);

if(bRet == true)
{
    console.log(iValue+" is a prime number.");
}
else
{
    console.log(iValue+" is NOT a prime number.");
}