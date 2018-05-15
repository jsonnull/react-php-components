// @flow
const phpValue = (strings, ...values) => {
  const result = []

  for (let i = 0; i < strings.length; i++) {
    const string = strings[i]
    result.push(string)
    if (values[i]) {
      result.push(values[i])
    }
  }

  return result
}

export default phpValue
