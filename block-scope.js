var aboutme = () => {
  var investment
  {
    investment = 1;
    // let salary = 10;
  }
  console.log(investment);
  // console.log(investment, salary);
}

var aboutme = () => {
  {
    //var investment = 1;
    let salary = 10;
    console.log(salary);
  }
  // console.log(investment, salary);
}

var aboutme = () => {
  {
    var investment = 1;
    const salary = 10;
  }
  console.log(investment, salary);
}

for (var i = 0; i<10; i++) {
  var l = 'a'
}
console.log(i);

var i

for (i = 0; i<10; i++) {}
console.log(i);

for (let i = 0; i<10; i++) {

}
console.log(i);


var a = 2;
{
    let a = 3;
    console.log(a);
    let a = 5;
}
console.log(a);


{
    const B = 5;
    B = 10;

    const ARR = [5, 6];
    ARR.push(7);
    console.log(ARR);
    ARR = 10;
    ARR[0] = 3;
    console.log(ARR);
}