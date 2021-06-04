import React from 'react'

export const List = ({ items, sortByName }) => {
  let uniqueArray = Array.from(new Set(items))
  const countItems = {}

  items.forEach(item => {
    if (countItems[item]) countItems[item] += 1
    else countItems[item] = 1
  })

  if (sortByName) {
    if (uniqueArray[0] === +uniqueArray[0]) {
      uniqueArray = uniqueArray.sort()
    } else {
      uniqueArray = uniqueArray.sort((a, b) => (a > b) ? 1 : ((b > a) ? -1 : 0))
    }
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
