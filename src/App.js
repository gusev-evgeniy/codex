import { useState } from 'react'
import './App.css'
import { Input } from './Input'
import { List } from './List'

function App() {
  const [stringsItems, setStringsItems] = useState([])
  const [numbersItems, setNumbersItems] = useState([])
  const [numbersAndStringsItems, setNumbersAndStringsItems] = useState([])
  const [sortByName, setSortByName] = useState(false)

  const setItems = (value) => {
    const letters = /^[A-Za-z]+$/
    const numbers = /^[0-9]+$/

    if (value.match(letters)) {
      changeItem(value, setStringsItems)
    }

    else if (value.match(numbers)) {
      changeItem(value, setNumbersItems)
    }

    else {
      changeItem(value, setNumbersAndStringsItems)
    }
  }

  function changeItem(name, fn) {
    fn(prev => [...prev, name])
  }

  const handleClick = () => {
    setSortByName(prev => !prev)
  }

  return (
    <div className="App">
      <Input setItems={setItems} />
      <div className='stringsList' >
        <List items={stringsItems} sortByName={sortByName} />
      </div>
      <div className='numbersList' >
        <List items={numbersItems} sortByName={sortByName} />
      </div>
      <div className='numbersAndStringsList' >
        <List items={numbersAndStringsItems} sortByName={sortByName} />
      </div>
      <button className='changeOrderButton' onClick={handleClick}>Change Order</button>
    </div>
  );
}

export default App;
