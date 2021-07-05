import React from 'react'
import Wojak from './Images/Wojak.jpg'
import Wojaks from './Images/Wojaks.jpg'

export default function Header({ children, title}) {
  const t = title
  return (
    
    <div className="flex flex-col justify-between h-screen max-w-sm pt-5 mx-auto text-center">
      <div className="h-32 pt-3 text-xl font-bold ">{t}</div>
      <img
        title="Normal Wojak"
        src={Wojaks}
        alt="Wojaks"
        width="360"
        height="180"
      />
      <div className="flex flex-col font-mono">
        <span className="text-lg font-semibold">
          Frontend:
          Wojak is happy
        </span>
      </div>
      <div>{children}</div>
      <div className="flex flex-col font-mono">
        <span className="text-lg font-semibold">
          Teste failed:
          Not anymore
        </span>
      </div>
      <div className="flex items-center h-10 text-sm text-gray-600 border-t-2 justify-items-end border-gray">
        <img
          title="Darkness Wojak"
          src={Wojak}
          alt="Wojak"
          width="360"
          height="180"
        />
        <div>
          <span>Desenvolvido com lágrimas e ☕ </span>
        </div>
      </div>
    </div>
  )
}
