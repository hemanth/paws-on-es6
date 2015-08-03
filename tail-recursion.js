let factorial = (n, acc = 1) => {
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc);
}
// NO S.O!
factorial(133333337);
