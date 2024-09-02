// create your App component here
import React, { useState, useEffect } from 'react';

const App = () => {
  // State to manage the loading status and the dog image URL
  const [loading, setLoading] = useState(true);
  const [dogImage, setDogImage] = useState('');

  // useEffect hook to fetch data from the API
  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        // Fetch data from the API
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        
        // Update state with the fetched image URL
        setDogImage(data.message);
      } catch (error) {
        console.error('Error fetching the dog image:', error);
      } finally {
        // Set loading to false once the data is fetched 
        setLoading(false);
      }
    };

    fetchDogImage();
  }, []); 

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
};

export default App;
