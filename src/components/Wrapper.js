import React from 'react'
import '../css/Wrapper.css'

const Wrapper = ({children}) => {
  return (
    <div className="wrapper">{children}</div>
  )
}

export default Wrapper