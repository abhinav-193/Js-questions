var array =  [1,2,3];
array.sort((a,b) => a-b);
var i = 0; //starting index
var l = array.length - 1; //last index
var x = 4; //Total sum should be equal to 
for (item in array) {
    if (i === l) {
    break;
    }
    else if ((array[i] + array[l]) > x) {
    l=l-1;
    }
    else if ((array[i] + array[l]) < x) {
    x=x+1;
    }
    else {
    console.log(`${array[i]}+${array[l]} = ${x}`);
    break;
    }
}
