import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ImproveYourself: React.FC = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    // Fetch categories
    axios.get('http://localhost:5000/api/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      // Fetch routines for selected category
      axios.get(`http://localhost:5000/api/categories/${selectedCategory}/routines`)
        .then(res => setRoutines(res.data))
        .catch(err => console.error('Error fetching routines:', err));
    }
  }, [selectedCategory]);

  return (
    <div className="page" style={{ background: 'var(--right-color)', paddingTop: '20px' }}>
      <div className="page-content">
        <h1 style={{ color: 'var(--right-color)', marginBottom: '2rem' }}>Improve Yourself</h1>
        <p>Welcome to your personal growth journey. Here, we focus on enhancing your strengths and developing new skills to help you reach new heights in life.</p>
        <p>What would you like to improve today?</p>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Select a category</option>
          {categories.map(category => (
            <option key={category._id} value={category._id}>{category.name}</option>
          ))}
        </select>
        {routines.length > 0 && (
          <div>
            <h2 style={{ color: 'var(--right-color)', margin: '1.5rem 0 1rem' }}>Routines</h2>
            <ul>
              {routines.map(routine => (
                <li key={routine.id}>
                  <h3>{routine.name}</h3>
                  <p>{routine.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <Link to="/" style={{ display: 'block', marginTop: '2rem', textAlign: 'center', color: 'var(--right-color)' }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ImproveYourself;