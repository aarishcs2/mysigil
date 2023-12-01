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
    // Placeholder alert for demonstration
    alert('Template saved with modifications!');
  };

  const handleFontWeightChange = (e) => {
    setFontStyle({
      ...fontStyle,
      fontWeight: e.target.value
    });
  };

  const handleFontSizeChange = (e) => {
    setFontStyle({
      ...fontStyle,
      fontSize: e.target.value
    });
  };

  const handleColorChange = (e) => {
    setFontStyle({
      ...fontStyle,
      color: e.target.value
    });
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%', paddingRight: '20px' }}>
          <h3>Template Editor</h3>
          <label>
            Font Weight:
            <select value={fontStyle.fontWeight} onChange={handleFontWeightChange}>
              <option value="normal">Normal</option>
              <option value="bold">Bold</option>
              <option value="bolder">Bolder</option>
              {/* Add more font-weight options as needed */}
            </select>
          </label>
          <label>
            Font Size:
            <select value={fontStyle.fontSize} onChange={handleFontSizeChange}>
              <option value="14px">14px</option>
              <option value="16px">16px</option>
              <option value="18px">18px</option>
              {/* Add more font-size options as needed */}
            </select>
          </label>
          <label>
            Color:
            <input type="color" value={fontStyle.color} onChange={handleColorChange} />
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
