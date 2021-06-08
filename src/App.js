import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { Input } from './Input'
import { List } from './List'
import { getItems } from './store'
import { requestCapital, setItem, updateItem } from './store/ItemsReducer'

function App() {
  const items = useSelector(state => getItems(state))
  const [sortByName, setSortByName] = useState(false)
  const [sortedItems, setSortedItems] = useState(items)
  const dispatch = useDispatch()
  console.log(items)
  useEffect(() => {
    let itemsClone = JSON.parse(JSON.stringify(items))

    if (!!sortByName) {
      const uniSort = (a, b) => {
        const aCode = a.value.toLowerCase().replace('ё', 'е' + String.fromCharCode(1110))
        const bCode = b.value.toLowerCase().replace('ё', 'е' + String.fromCharCode(1110))

        if (aCode > bCode) return 1
        if (aCode < bCode) return -1
        else return 0
      }

      for (let item in itemsClone) {
        if (itemsClone[item].length > 1) {

          const firstItem = itemsClone[item][0].value
          if (firstItem == +firstItem) {
            itemsClone[item] = itemsClone[item].sort(uniSort)
          } else { itemsClone[item] = itemsClone[item].sort(uniSort) }

        }
      }
    }

    else {
      for (let item in itemsClone) {
        if (itemsClone[item].length > 0) {
          itemsClone[item] = [...itemsClone[item].sort((a, b) => a.date - b.date)]
        }
      }
    }
    setSortedItems(itemsClone)
  }, [items, sortByName])

  const changeItems = async (value) => {
    const validation = {
      letters: /^[A-zА-яЁё]+$/,
      numbers: /^[0-9]+$/,
      numbersAndLettes: /^[A-zА-яЁё0-9]+$/
    }

    const keyInObject = validateBy()
    function validateBy() {
      for (let key in validation) {
        if (value.match(validation[key])) {
          return key
        }
      }
    }

    if (keyInObject) {
      changeArray(value, keyInObject)
    }
  }

  function changeArray(value, keyInObject) {
    const itemInArray = items[keyInObject].find(item => item.value === value)
    if (!!itemInArray) {
      dispatch(updateItem({ value }, keyInObject))
    } else {

      if (keyInObject === 'letters') {
        dispatch(requestCapital(value))
      } else {
        dispatch(setItem({ value }, keyInObject))
      }

    }
  }

  const handleClick = () => {
    setSortByName(prev => !prev)
  }

  return (
    <div className="App">
      <Input changeItems={changeItems} />
      <div className='stringsList' >
        <List items={sortedItems.letters} sortByName={sortByName} />
      </div>
      <div className='numbersList' >
        <List items={sortedItems.numbers} sortByName={sortByName} />
      </div>
      <div className='numbersAndStringsList' >
        <List items={sortedItems.numbersAndLettes} sortByName={sortByName} />
      </div>
      <button className='changeOrderButton' onClick={handleClick}>Change Order</button>
    </div>
  );
}

export default App;
