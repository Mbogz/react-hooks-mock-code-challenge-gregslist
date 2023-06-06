import React from "react";


function ListingCard() {
  function ListingCard({listing , onDelete}) {
    const [trueOrFalse , setTrueorFalse] = useState(true)
  
    function handleTrueorFalse() {
      setTrueorFalse(isitTrue => !isitTrue)
    }
  
    function handleDelete(e) {
      e.preventDefault()
      fetch(`http://localhost:6001/listings/${listing.id}` , {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(() => {onDelete(listing.id)})}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={"https://via.placeholder.com/300x300"} alt={"description"} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{"description"}</strong>
        <span> · {"location"}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}
}

export default ListingCard;
