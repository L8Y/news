import React from 'react';
import { useState } from 'react';
import './App.css';
import NewsFeed from './components/NewsFeed';
import Header from './components/Header';


function App() {
  const [news, setnews] = useState([]);
  const fetchNews = async (country, category) => {
    try {
      const response = await fetch(`http://api.mediastack.com/v1/news?access_key=5495dd73b89ae55d2bdf53f0824f89fc&catgories=${category}&countries=${country}`);
      const newsArticles = await response.json();
      setnews(newsArticles.data);
    } catch (error) {
      alert("Try again after some time")
    }
  }
  console.log(news)
  return (
    <main>
      <Header fetchNews={fetchNews} />
      {news.map((news) => (
        <NewsFeed key={news.url} title={news.title} description={news.description} link={news.url} image={news.image} />
      ))}

    </main>

  );
}

export default App;
