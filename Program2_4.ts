
function CountDigits(iNo : number) : number
{
    let iCnt : number = 0;

    while(iNo != 0)
    {
        iNo = Math.floor(iNo /10);
        iCnt++;
    }
    return iCnt;
}

function CheckArmstrong(iNo : number) : boolean
{
    let DigCnt : number = CountDigits(iNo);

    let iTemp : number = iNo;
    let iDigit : number = 0;
    let iSum : number = 0;

    while(iNo != 0)
    {
        iDigit = iNo % 10;
        iSum = iSum + iDigit**DigCnt;
        iNo = Math.floor(iNo / 10);
    }

    if(iSum == iTemp)
    {
        return true;
    }
    return false;

}

var iValue : number = 153;

var bRet : boolean = CheckArmstrong(iValue);

if(bRet == true)
{
    console.log(iValue+" is an Armstrong number");
}
else
{
    console.log(iValue+" is NOT an Armstrong number");
}