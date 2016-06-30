function* range(start, end) {
  let current = start;
  while (current <= end) {
    yield current++;
  }
}

for (let n of range(1, 4)) {
  console.log(n);
}