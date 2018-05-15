import React from 'react'
import ReactDOMServer from 'react-dom/server'
import php from '../../dist/react-php-components.umd'

process.env.REACT_PHP = 'php'

const App = php.div`
  <?php phpinfo() ?>
`

const html = ReactDOMServer.renderToString(<App />)

console.log(html)
