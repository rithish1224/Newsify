import React from 'react'
import './Card.css'

const Card = ({news}) => {
  return (
    <div className='card-container'>
        {news.map((article,index)=>(
            
            <div className="card" key={index}>
                <img src={article.image} alt={article.title} />
                <div className="card-content">
                    <h2>{article.title}</h2>
                    <p className="author">{article.author ? `By ${article.author}` : "Unknown Author"}</p>
                    <a href={article.url}  className="read-more">read more...</a>
                    <p className="date">
                        {new Date(article.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                })}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Card