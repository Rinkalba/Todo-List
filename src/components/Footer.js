import React from 'react'

export default function Footer() {
  let footerStyle={
    position:"relative",
    top:"10vh",
    width:"100%",
    border:"2px solid rgba(0,0,0,0.5)"
  }
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
    <p className="text-center">

      Copyright &copy;  MyTodoList.com
    </p>
    </footer>
  )
}
