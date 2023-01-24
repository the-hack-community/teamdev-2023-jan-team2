const spacing = () => {
  const MIN = 0
  const MAX = 100
  const INCREMENTS_NUM = 1
  const s = {}
  for (let i = MIN; i <= MAX; i += INCREMENTS_NUM) {
    s[`${i}px`] = `${i * 0.0625}rem`
  }
  return s
}

const fontSize = () => {
  const MIN = 10
  const MAX = 100
  const INCREMENTS_NUM = 1
  const s = {}
  for (let i = MIN; i <= MAX; i += INCREMENTS_NUM) {
    s[`${i}px`] = `${i * 0.0625}rem`
  }
  return s
}

module.exports = {
  fontSize,
  spacing,
}
