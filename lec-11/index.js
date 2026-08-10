// var roll = null;
// function changeRoll(roll_no){
//     roll = roll_no;
// }
// console.log(roll);
// changeRoll(25);
// console.log(roll);
function incrementattendance(){
    let attendance = 0;
    function increment(){
    attendance++;
    console.log(attendance);
    }
    return increment;
}
let incrementFn = incrementattendance();
incrementFn();
incrementFn();

let incrementFn2 = incrementattendance();
incrementFn2();