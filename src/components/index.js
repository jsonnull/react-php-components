// @flow

export const PHP = props => {
  if (process.env.REACT_PHP !== 'php') {
    return null
  }

  return props.children
}

export const JS = props => {
  if (process.env.REACT_PHP == 'php') {
    return null
  }

  return props.children
}
