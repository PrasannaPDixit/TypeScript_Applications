
function SecondMaxNo(Arr : number[]) : number
{
    let iCnt : number = 0;
    let iMax : number = Arr[0];
    let iMax2 : number = 0;

    for(iCnt = 1; iCnt < Arr.length; iCnt++)
    {
        if(Arr[iCnt] > iMax)
        {
            iMax2 = iMax;
            iMax = Arr[iCnt];
        }
        else if(Arr[iCnt] > iMax2)
        {
            iMax2 = Arr[iCnt];
        }
    }

    return iMax2;
}

var Arr : number[] = [89,100,29,56,45,32,77];

var iRet : number = SecondMaxNo(Arr);

console.log("second Largest number in array : "+iRet);