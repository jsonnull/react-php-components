// @flow
import domElements from '../utils/domElements'
import phpValue from '../utils/phpValue'

export default (createPhpComponent: Function) => {
  const php = component => (...args) =>
    createPhpComponent(component, phpValue(...args))

  domElements.forEach(domElement => {
    php[domElement] = php(domElement)
  })

  return php
}
