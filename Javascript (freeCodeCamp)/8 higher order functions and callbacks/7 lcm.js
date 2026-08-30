function smallestCommons(arr) {
  let start = Math.min(arr[0], arr[1]);
  let end = Math.max(arr[0], arr[1]);

  let lcm = 1;

  for (let i = start; i <= end; i++) {
    lcm = (lcm * i) / gcd(lcm, i);
  }

  return lcm;
}

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}