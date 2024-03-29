import React from 'react'

export default function HamburgerSVG(props) {
  return (
    <svg 
      {...props}
        width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="3" fill="#333333"/>
        <rect y="10" width="30" height="3" fill="#333333"/>
        <rect y="20" width="30" height="3" fill="#333333"/>
    </svg>
  )
}
