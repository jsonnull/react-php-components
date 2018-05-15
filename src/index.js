// @flow
import _php from './constructors/php'
import createPhpComponent from './constructors/createPhpComponent'
import { PHP, JS } from './components'

const php = _php(createPhpComponent)

export default php

export { PHP, JS }
