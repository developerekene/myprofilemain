import React, { ReactNode } from 'react';
import "../MainContainer/MainContainer.css"

interface MainConType{
    children: ReactNode
}

const MainContainer:React.FC<MainConType> = ({children}) => {
  return (
    <div style={{width: "90%", backgroundColor: "#ffffff"}}>{children}</div>
  )
}

export default MainContainer