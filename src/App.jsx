import { useState } from 'react'
import ndeLogo from '/nde.svg'
import EmojisList from './components/emoijs list/emojis-list.component'
import SearchBar from './components/search-bar/search-bar.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SearchBar />
    <EmojisList />
    </>
  )
}

export default App
