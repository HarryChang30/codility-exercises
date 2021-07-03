const solution = (A, K) => {
  
  var map = new Map();
  var Max = 0;
  var tail = 0;
  var res = 0;

  for (var i = 0; i < A.length; i++) {
    if (!map.has(A[i])) map.set(A[i], 1)
    else map.set(A[i], map.get(A[i]) + 1)

    Max = Math.max(Max, map.get(A[i]))

    if (Max + K <= res) {
      map.set(A[tail], map.get(A[tail]) - 1)
      tail = tail + 1;
    } else {
      res = res + 1;
    }
  }

  return res;
}

console.log(solution([1,1,4,5,2,3,3,3], 2))
// 5