import React, { useState } from 'react'

export const Input = ({ changeItems }) => {
  const [value, setValue] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    changeItems(value)
    setValue('')
  }

  return (
    <div className='wrapper'>
      <form onSubmit={e => onSubmit(e)}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      </form>
    </div>
  )
}
