function parsePhone(text) {
  return text
    .trim()
    .split('-').join('')
    .split(' ').join('')
}