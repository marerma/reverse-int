module.exports = function reverse (n) {
  n < 0? n= n *-1 : n

const reversedN = Number(Array.from(String(n)).reverse().join(''))
return reversedN
}

