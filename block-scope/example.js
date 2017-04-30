const ripples = ['a', 'b']
const arr = ['c', 'c'] 

// Find the index of the first ripple which has started but isn't yet ending
for (let i = 0; i != ripples.length; i++) {
    console.log('i')
}

// Do something unrelated which we probably added at a later date
for (let j = 0; j != arr.length; j++) {
    for (let i = 0; i != arr[j].length; i++) {
      console.log('j - i', i, i)
        // do something...
    }
}

// Oops.
var endingRipple = ripples[i];


switch (endingRipple) {
    case 'a':
        const a = 1
        console.log('a', a)
        break
    default:
        console.log('default')
}

console.log(a)
