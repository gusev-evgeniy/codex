import React from 'react'

export const List = ({ items, sortByName }) => {
  let arr = Object.entries(items)
  if (sortByName) {
    arr = arr.sort((a, b) => (a[0] > b[0]) ? 1 : ((b[0] > a[0]) ? -1 : 0))
  }

  return (
    <div className='wrapper'>
      <ul>
        {arr.map(([item, count]) => {
          return <li key={item}>{item}
            {count > 1 && <span>x{count}</span>}
          </li>
        })}
      </ul>
    </div>
  )
}
