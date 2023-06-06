import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import FormandSort from "./FormandSort";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((resp) => resp.json())
    .then((listing) => { setListings(listing)}) 
  },[])

  function handleDelete(id) {
    let deleteThemThangs = listings.filter((listing) => listing.id !== id)
    setListings(deleteThemThangs)
  }

  function onhandleSubmit(newSearch) {
    setSearch(newSearch)
  }

  let filteredListings = listings.filter((listing) => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  function handlePost(newListings) {
    setListings([...listings, newListings])
  }

  function handleSort() {
    setSort(intialSort => !intialSort)
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer />
      <Header search={search} onhandleSubmit={onhandleSubmit}/>
      <FormandSort onHandleSort={handleSort} onPost={handlePost} sort={sort}/>
      <ListingsContainer listings={filteredListings} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
