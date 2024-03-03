import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Headlines = () => {
  const [headlines, setHeadlines] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'in',
            category: selectedCategory,
            apiKey: '9fdcf4bba00441d5987f148c2ead0e12',
          }
        });
        setHeadlines(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchHeadlines();
  }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="container">
      <h2 className="text-center">Top Headlines</h2>
      <div className="row">
        <div className="col-md-12 mb-4 me-2">
          <label htmlFor="category">Select Category: </label>
          <select className='me-2' id="category" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="general">General</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
        </div>
        {headlines.map((headline, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={headline.urlToImage} className="card-img-top" alt="News" />
              <div className="card-body">
                <h5 className="card-title">{headline.title}</h5>
                <a href={headline.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
