import "./search-bar.styles.css"

const SearchBar = () => {
    return (
        <div className="search-container">
            <div className="emoji-search">
                <input type="text" placeholder="Search" />
            </div>
        </div>
    )
}

export default SearchBar;