import React from 'react'

import './styles.scss'

const ListButton = ({
  onClick,
  text = ''
}) => (
  <li styleName='main'>
    <button
      className="button is-medium is-fullwidth"
      onClick={onClick}
    >
      {text}
    </button>
  </li>
)

export default ListButton

