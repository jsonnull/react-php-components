// @flow
import React from 'react'

const createPhpComponent = (tag: string, phpValues: Array<any>) => {
  class PHPComponent extends React.Component {
    render() {
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
          dangerouslySetInnerHTML: { __html: phpContent }
        })
      }

      return React.createElement(tag, undefined, this.props.children || null)
    }
  }

  return PHPComponent
}

export default createPhpComponent
