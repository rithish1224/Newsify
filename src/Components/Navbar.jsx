import React,{useState} from 'react'
import './Navbar.css'

const Navbar = ({setSearch}) => {
  const [input, setInput] = useState("");

   const handleSearch = (e) => {e.preventDefault();setSearch(input); };
   
  return (
    <div className='navbar'>
        <div className="left-nav">
            <h1>NEWSIFY</h1>
        </div>
        <div className="right-nav">
        <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search news..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
        </div>
    </div>
  )
}

export default Navbar