// ./src/app/SampleComponet/page.js

import React, { useState, useEffect } from 'react';

const SampleComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/sampleData');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Sample Data</h1>
      {data ? (
        <div>
          <p>ID: {data.id}</p>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Age: {data.age}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SampleComponent;

// Mark this component as a client entry
SampleComponent.dynamic = true;
