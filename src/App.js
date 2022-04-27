import React from 'react';
import { useState } from 'react';
import './App.css';
import NewsFeed from './components/NewsFeed';
import Header from './components/Header';


function App() {
  const [news, setnews] = useState([]);
  const fetchNews = async (country, category) => {
    try {
      const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_6722b45570255c74298799f3efad3fa576ac&country=${country}&category=${category}`);
      const newsArticles = await response.json();
      setnews(newsArticles.results);
    } catch (error) {
      alert("Try again after some time")
    }
  }
  return (
    <main>
      <Header fetchNews={fetchNews} />
      {news.map((news) => (
        <NewsFeed key={news.url} title={news.title} description={news.description} link={news.link} image={news.image_url} />
      ))}

    </main>

  );
}

export default App;
