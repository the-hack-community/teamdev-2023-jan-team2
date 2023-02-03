const ellipsis = (str: string, length: number) => {
  if (length <= 0) {
    return str
  }

  if (str.length < length) {
    return str
  }
  return str.substring(0, length) + '...'
}

export default ellipsis
