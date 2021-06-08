import React from 'react'

export const List = ({ items = [], isLoading }) => {
  return (
    <div className='wrapper'>
      <ul>
        {items.map((item) => {
          return <li key={item.value}>{item.value}
            {item.location && <span className='location'>:{item.location}</span>}
            {item.count > 1 && <span className='count'>x{item.count}</span>}
          </li>
        })}
      </ul>
      {isLoading && <h5>Loading...</h5>}
    </div>
  )
}
