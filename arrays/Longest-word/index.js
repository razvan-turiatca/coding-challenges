// my solution

function longestWord(sentence) {
  return sentence
    .split(' ')
    .find(
      (word) =>
        word.length == Math.max(...sentence.split(' ').map((w) => w.length)),
    )
}

// a better solution

const longestWord = (sentence) =>
  sentence.split(' ').sort((a, b) => b.length - a.length)[0]
