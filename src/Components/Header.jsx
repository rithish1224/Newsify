import React from 'react'
import '../Components/Header.css'

const Header = ({setCategory,category}) => {
  const categories = [
    { key: "general", label: "Trending Now" },
    { key: "science", label: "Science" },
    { key: "technology", label: "Technology" },
    { key: "sports", label: "Sports" },
    { key: "health", label: "Health" },
    { key: "entertainment", label: "Entertainment" }
  ];
  return (
    <div className='header'>
        <div className="categories">
             {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setCategory(cat.key)}
            className={category === cat.key ? "active" : ""}
          >
            {cat.label}
          </button>
        ))}
        </div>
    </div>
  )
}

export default Header