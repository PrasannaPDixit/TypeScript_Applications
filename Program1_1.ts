
function Maximum(iNo1 : number, iNo2 : number, iNo3 : number) : number
{
    if(iNo1 > iNo2)
    {
        if(iNo1 > iNo3)
        {
            return iNo1;
        }
        return iNo3;
    }
    else
    {
        if(iNo2 > iNo3)
        {
            return iNo2;
        }
        return iNo3;
    }
}

var iValue1 : number = 4533;
var iValue2 : number = 445;
var iValue3 : number = 222249;

var iRet : number = 0;

iRet = Maximum(iValue1,iValue2,iValue3);

console.log("Maximum number is : "+iRet);
