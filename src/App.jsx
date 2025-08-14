import React, { useState,useEffect } from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Card from './Components/Card';


const App = () => {

  const [category,setCategory] = useState("general");
  const [news,setNews] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
     const endpoint = search
      ? `https://newsapi.org/v2/everything?q=${encodeURIComponent(search)}&sortBy=publishedAt&apiKey=257d89f00edc4f0aa72eedac90042f0a`
      : `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=257d89f00edc4f0aa72eedac90042f0a`;


    fetch(endpoint)
      .then(res => res.json())
      .then(data => setNews(data.articles));
  }, [category,search]);

  return (
    <div>
      <Navbar setSearch={setSearch}/>
      <Header setCategory={setCategory} category={category}/>
      <Card news={news}/>
    </div>
  )
}

export default App