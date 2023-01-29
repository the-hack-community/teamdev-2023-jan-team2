const pxConverter = () => {
  const MIN = 0
  const MAX = 100
  const INCREMENTS_NUM = 1
  const s = {}
  for (let i = MIN; i <= MAX; i += INCREMENTS_NUM) {
    s[`${i}px`] = `${i * 0.0625}rem`
  }
  return s
}

module.exports = {
  pxConverter,
}
