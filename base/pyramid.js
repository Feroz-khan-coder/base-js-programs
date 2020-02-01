var n=4;
var s="";
function addTabspace(str, noOftabSpaces){
    //console.log("noOftabSpaces ==>", noOftabSpaces);
    for(let j =0; j < noOftabSpaces; j++) {
        str = "\t" + str +"\t";
    }
    return str;
}

for(let i=0;i<n;i++)
{
    s = s+"\t" + i;
    let l = addTabspace(s, (n-i)/2);
    console.log(l);
}