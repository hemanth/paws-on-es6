var arr = ['a', 'b', 'c']
for (let element in ['a', 'b', 'c']) {
  console.log(element, arr[element]);
}

for (let element of ['a', 'b', 'c']) {
  console.log(element);
}
