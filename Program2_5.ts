
function CheckString(str : string) : boolean
{
    let Arr : string[] = str.split(' ');

    let iCnt : number = 0;
    let bFlag : boolean = false;

    for(iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        if(Arr[iCnt] == "Marvellous")
        {
            bFlag = true;
        }
    }
    return bFlag;
}
var cValue1 : string = "Marvellous Infosystems is the best class";
var cValue2 : string = "My name is Prasanna Dixit";

var bRet : boolean = CheckString(cValue1);

if(bRet == true)
{
    console.log("String contains Marvellous in it");
}
else
{
    console.log("String does not contain Marvellous in it");
}