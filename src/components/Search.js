import React from "react";


function Search({search , onhandleSubmit}) {
  const [form, setForm] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    onhandleSubmit(form)
    console.log("submitted");
  }

  function handleForm(e) {
    setForm(e)
  }

  return (
    <form className="searchbar" value={search} onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={form}
        onChange={(e) => handleForm(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
