import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import useHistory from react-router-dom

export default function Index() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const response = await fetch('http://localhost:5000/fetchAlltemplates'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setTemplates(data);
      } catch (error) {
        console.error('Error fetching templates:', error);
      }
    }

    fetchTemplates();
  }, []);

  return (
    <>
      <h1>Email templates</h1>
      <div className='row'>
        {templates.map((template) => (
          <div className='col-md-6' key={template._id}>
            <Link to={`/dashboard/templatedetail/${template._id}`}>
            <div className="card w-100" onClick={() => console.log(`Clicked on template ID: ${template._id}`)}>
                <div className="card-body w-100" dangerouslySetInnerHTML={{ __html: template.html }} />
            </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}