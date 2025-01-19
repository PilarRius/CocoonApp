import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Category, Routine } from '../types';

const ImproveYourself: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [routines, setRoutines] = useState<Routine[]>([]);
  const navigate = useNavigate();

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

  const handleAddRoutine = (routine: Routine) => {
    const isLoggedIn = true; // Replace with actual login check
    if (isLoggedIn) {
      // Add routine to user's routines
      const storedRoutines = JSON.parse(localStorage.getItem('userRoutines') || '[]');
      storedRoutines.push(routine);
      localStorage.setItem('userRoutines', JSON.stringify(storedRoutines));
      console.log('Routine added:', routine);
      navigate('/user-routines');
    } else {
      navigate('/signup');
    }
  };

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
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {routines.map((routine, index) => (
                <li key={routine.id} style={{ backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#d0ffd0', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                  <h3>{routine.name}</h3>
                  <p>{routine.description}</p>
                  <button onClick={() => handleAddRoutine(routine)}>Add to My Routines</button>
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