
function add(a,b){
    let sum = a+b;
    return sum;
}
function mul(a,b){
    let multn = a*b;
    return multn;
}
function divi(a,b){
    let division = a/b;
    division = division.toFixed(5);
    return division;
}
function sub(a,b){
    let subtn = a-b;
    return subtn;
}

export  {add , mul , divi , sub};