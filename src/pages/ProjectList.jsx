import React from 'react'

export const ProjectList = ({id, title, active, setSelected}) => {
  return (
    <li 
      className={ active ? `bg-light-grey/50 rounded-lg px-4 py-2 font-semibold tracking-wider transition` :  `rounded-lg bg-light-grey/10 px-4 py-2 font-semibold tracking-wider transition hover:cursor-pointer hover:bg-light-grey/50`} 
      onClick={() => setSelected(id)}
    >
        {title}
    </li>
  )
}
