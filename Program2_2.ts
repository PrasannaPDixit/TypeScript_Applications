
function Addition(Arr : number[]) : number
{
    let iCnt : number = 0;
    let iSum : number = 0;

    for(iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        iSum = iSum + Arr[iCnt];
    }

    return iSum;
}

var Arr : number[] = [23,6,7,4,5,7];

var iRet : number = Addition(Arr);

console.log("Summation of array elements : "+iRet);