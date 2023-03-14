
function MaxNo(Arr : number[]) : number
{
    let iCnt : number = 0;
    let iMax : number = Arr[0];

    for(iCnt = 1; iCnt < Arr.length; iCnt++)
    {
        if(Arr[iCnt] > iMax)
        {
            iMax = Arr[iCnt];
        }
    }

    return iMax;
}

var Arr : number[] = [11,51,101,21,151,4];

var iRet : number = MaxNo(Arr);

console.log("Largest number in array : "+iRet);