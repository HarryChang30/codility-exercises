const solution = (S, K) => {
  var word = S.split('')

  for (var i = 0; i < word.length - 1 && K > 0; ++i) {

    var pos = i;

    for (var j = i+1; j < word.length; ++j) {

      if (j - i > K) break;

      if (word[j] < word[pos])
        pos = j;
    }

    for (var j = pos;  j > i; --j) {
      var tmp = word[j];
      word[j] = word[j-1];
      word[j-1] = tmp;
    }

    K -= pos - i;
  }

  return word.join('')
}

console.log(solution('decade', 4))
// adcede