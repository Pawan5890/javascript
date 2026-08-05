function outer(){
    let a = 10;
    function inner(){
        a++;
        console.log(a);
    }
     return inner;
}
let f1 = outer()
let f2 = outer()
//console.log(f1)
f1();
f2();