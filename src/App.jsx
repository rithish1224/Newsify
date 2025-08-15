import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Card from './Components/Card';

const App = () => {
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  

  useEffect(() => {
    
    const API_KEY = "7906699c5530aa77feccce88095f2e62";
    const endpoint = search
      ? `https://gnews.io/api/v4/search?q=${encodeURIComponent(search)}&lang=en&sortby=publishedAt&token=${API_KEY}`
      : `https://gnews.io/api/v4/top-headlines?country=us&topic=${category}&token=${API_KEY}`;

    fetch(endpoint)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        setNews(data.articles || []);
      })
      .catch(err => {
        console.error("Failed to fetch news:", err);
        setNews([]);
      });

  }, [category, search]);

  return (
    <div>
      <Navbar setSearch={setSearch} />
      <Header setCategory={setCategory} category={category} />
      <Card news={news} />
    </div>
  );
};

export default App;
