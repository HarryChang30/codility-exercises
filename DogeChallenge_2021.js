const solution = (P, T, A, B) => { 
  
  var N = P.length;

  var adj = new Array(N)

  for (var i = 0; i < N; i++) 
    adj[i] = [];

  for (var i = 0; i < A.length; i++) {
    adj[A[i]].push(B[i])
    adj[B[i]].push(A[i])
  }

  var vis = new Array(N)
  vis.fill(false)

  for (var i = 0; i < N; i++) {
    if (!vis[i]) {
      vis[i] = true;
      q = [i]
      s = 0;

      while (q.length != 0) {
        v = q.pop();
        s += P[v] - T[v]

        for (var a = 0; a < adj[v].length; a++) {
          if (!vis[adj[v][a]]) {
            vis[adj[v][a]] = true;
            q.push(adj[v][a])
          }
        }
        
      }

      if (s != 0) return false;
    }
  }

  return true;
}

console.log(
  `Test Case 1: `,
  solution(
    [1, 1, 2],
    [2, 1, 1],
    [0, 2],
    [1, 1]
  )
)

console.log(
  `Test Case 2: `,
  solution(
    [2, 2, 1, 1, 1],
    [1, 1, 1, 2, 2],
    [0, 1, 2, 3],
    [1, 2, 0, 4]
  )
)

console.log(
  `Test Case 3: `,
  solution(
    [1, 1, 2, 2, 1, 1, 2, 2],
    [1, 1, 1, 1, 2, 2, 2, 2],
    [0, 2, 4, 6],
    [1, 3, 5, 7]
  )
)

console.log(
  `Test Case 4: `,
  solution(
    [2, 2, 2, 2, 1, 1, 1, 1],
    [1, 1, 1, 1, 2, 2, 2, 2],
    [0, 1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6, 7]
  )
)