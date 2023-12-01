// Templatedetail.js
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

export default function Templatedetail() {
  const { id } = useParams();
  const [templateDetails, setTemplateDetails] = useState(null);
  const [modifiedContent, setModifiedContent] = useState(null);
  const contentRef = useRef(null);
  const [fontStyle, setFontStyle] = useState({
    fontWeight: 'normal',
    fontSize: '16px',
    color: '#000000'
    // Add more style properties as needed
  });

  useEffect(() => {
    async function fetchTemplateDetails() {
      try {
        const response = await fetch(`http://localhost:5000/fetchsingletemplate/${id}`); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setTemplateDetails(data); // Set template details received from API
        setModifiedContent(data.html); // Set initial content
      } catch (error) {
        console.error('Error fetching template details:', error);
      }
    }
    fetchTemplateDetails();
  }, [id]); // Include id in the dependency array to fetch details when id changes

  const applyStyles = () => {
    if (templateDetails) {
      const styledContent = contentRef.current.innerHTML;
      setModifiedContent(styledContent);
    }
  };

  const saveTemplate = () => {
    // Here you can save modifiedContent to your backend
    // For example:
    // fetch('your_save_api_url', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ html: modifiedContent })
    // })
    // .then(response => {
    //   // Handle response
    // })
    // .catch(error => {
    //   console.error('Error saving template:', error);
    // });

    // Placeholder alert for demonstration
    alert('Template saved with modifications!');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFontStyle({
      ...fontStyle,
      [name]: value
    });
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%', paddingRight: '20px' }}>
          <h3>Template Editor</h3>
          <label>
            Font Weight:
            <input type="text" name="fontWeight" value={fontStyle.fontWeight} onChange={handleInputChange} />
          </label>
          <label>
            Font Size:
            <input type="text" name="fontSize" value={fontStyle.fontSize} onChange={handleInputChange} />
          </label>
          <label>
            Color:
            <input type="text" name="color" value={fontStyle.color} onChange={handleInputChange} />
          </label>
          <button onClick={applyStyles}>Apply Styles</button>
          <button onClick={saveTemplate}>Save Template</button>
        </div>
        <div style={{ width: '70%' }}>
          <h3>Template details</h3>
          {templateDetails ? (
            <div>
              <div
                ref={contentRef}
                className="card-body"
                style={fontStyle}
                dangerouslySetInnerHTML={{ __html: modifiedContent || templateDetails.html }}
              />
            </div>
          ) : (
            <p>Loading template details...</p>
          )}
        </div>
      </div>
    </>
  );
}
