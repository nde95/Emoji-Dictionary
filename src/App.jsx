import { useState, useEffect } from 'react'
import ndeLogo from '/nde.svg'
import EmojisList from './components/emoijs list/emojis-list.component'
import SearchBar from './components/search-bar/search-bar.component'
import EmojiSearch from './components/emoji-search/emoji-search.component'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    // Update initialLoad state after the first render
    setInitialLoad(false);
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {initialLoad || searchTerm === '' ? <EmojisList /> : <EmojiSearch searchTerm={searchTerm} />}
    </>
  );
}

export default App;