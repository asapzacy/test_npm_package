
const capitalizeStr = (str) => {
  if (!str) {
    return ''
  }
  return str.split(' ').reduce((result, word) => {
    return result += word[0].toUpperCase() + word.slice(1) + ' '
  }, '').slice(0, -1)
}

module.exports = capitalizeStr
