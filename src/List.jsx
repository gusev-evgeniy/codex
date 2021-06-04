import React from 'react'

export const List = ({ items, sortByName }) => {
  let uniqueArray = Array.from(new Set(items))
  const countItems = {}

  items.forEach(item => {
    if (countItems[item]) countItems[item] += 1
    else countItems[item] = 1
  })

  if (sortByName) {
    uniqueArray = uniqueArray.sort((a, b) => (a[0] > b[0]) ? 1 : ((b[0] > a[0]) ? -1 : 0))
  }

  return (
    <div className='wrapper'>
      <ul>
        {uniqueArray.map((item) => {
          return <li key={item}>{item}
            {countItems[item] > 1 && <span>x{countItems[item]}</span>}
          </li>
        })}
      </ul>
    </div>
  )
}
