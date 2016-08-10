var aboutme = () => {
  {
    var investment = 1;
    const salary = 10;
  }
  console.log(investment, salary);
}

for (let i = 0; i<10; i++) {}
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