import React, { ReactNode } from 'react';
import "../MainContainer/MainContainer.css"

interface MainConType{
    children: ReactNode,
    bg: string
}

const MainContainer:React.FC<MainConType> = ({children, bg}) => {
  return (
    <div style={{width: "85%", backgroundColor: bg,}}>{children}</div>
  )
}

export default MainContainer