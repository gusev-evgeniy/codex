import React, { useState } from 'react'

export const Input = ({ setItems }) => {
  const [value, setValue] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setItems(value)
    setValue('')
  }

  return (
    <div className='wrapper'>
      <form onSubmit={e => onSubmit(e)}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  )
}
