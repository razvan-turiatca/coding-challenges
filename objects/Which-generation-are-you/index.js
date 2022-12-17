// my solution

function generation(x, y) {
  const genealogicTable = [
    { generation: -3, m: 'great grandfather', f: 'great grandmother' },
    { generation: -2, m: 'grandfather', f: 'grandmother' },
    { generation: -1, m: 'father', f: 'mother' },
    { generation: 0, m: 'me!', f: 'me!' },
    { generation: 1, m: 'son', f: 'daughter' },
    { generation: 2, m: 'grandson', f: 'granddaughter' },
    { generation: 3, m: 'great grandson', f: 'great granddaughter' },
  ]
  return genealogicTable.find((a, i) => a.generation == x)[y]
}

// another solution from a different user

function generation(x, y) {
  const elo = {
    '-3': { m: 'great grandfather', f: 'great grandmother' },
    '-2': { m: 'grandfather', f: 'grandmother' },
    '-1': { m: 'father', f: 'mother' },
    0: { m: 'me!', f: 'me!' },
    1: { m: 'son', f: 'daughter' },
    2: { m: 'grandson', f: 'granddaughter' },
    3: { m: 'great grandson', f: 'great granddaughter' },
  }
  return elo[x][y]
}
