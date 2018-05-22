// @flow
import React from 'react'

const createPhpComponent = (tag: string, phpValues: Array<any>) => {
  class PHPComponent extends React.Component {
    render() {
      const { children = null, suppressHydrationWarning = false } = this.props

      if (process.env.REACT_PHP == 'php') {
        const phpContent = phpValues
          .map(value => {
            const result =
              typeof value == 'function' ? value(this.props) : value
            return result ? result.trim() : ''
          })
          .join('')
          .replace('\n', '')

        return React.createElement(tag, {
          suppressHydrationWarning,
          dangerouslySetInnerHTML: { __html: phpContent },
        })
      }

      return React.createElement(
        tag,
        { suppressHydrationWarning },
        this.props.children || null,
      )
    }
  }

  return PHPComponent
}

export default createPhpComponent
