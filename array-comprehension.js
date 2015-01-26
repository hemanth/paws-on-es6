var numbers = [ 1, 4, 9 ];
[for (num of numbers) Math.sqrt(num)];
// => [ 1, 2, 3 ]

[for (x of [ 1, 2, 3]) for (y of [ 3, 2, 1 ]) x*y];
// => [ 3, 2, 1, 6, 4, 2, 9, 6, 3 ]

[for (x of [ 1, 2, 3, 4, 5, 6 ]) if (x%2 === 0) x];
// => [ 2, 4, 6 ]

