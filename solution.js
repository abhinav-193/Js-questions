var array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
var n = 0;
var newarray = [];
var temp = [];
for(item in array) {
    n = array[item];
    if (temp.includes(n)) {continue;}
    if ((array.filter((it) => it === n)).length === 1){newarray.push(n)}
    else {newarray.push(array.filter((it) => it === n))}
    temp.push(n);
}
console.log(newarray);
