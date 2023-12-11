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

  const [templateInfo, setTemplateInfo] = useState({
    company: '',
    email: '',
    website: '',
    phone: ''
    // Add more template information fields as needed
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

        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data.html, 'text/html');

        // Retrieve the element with class "name" and get its text content
        const nameElement = htmlDoc.querySelector('.name');
        const name = nameElement.textContent.trim(); // This will give you the name content

        console.log(data.html)
        console.log(name);


        // Prepopulate inputs with template details
        if (data) {
        setTemplateInfo({
          company: data.company || '',
          email: data.email || '',
          website: data.website || '',
          phone: data.phone || '',
        })};

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

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setTemplateInfo({ ...templateInfo, userName: newName });

    // Update the displayed name in the template
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(modifiedContent || templateDetails.html, 'text/html');

    // Retrieve the element with class "name" and update its text content
    const nameElement = htmlDoc.querySelector('.name');
    if (nameElement) {
      nameElement.textContent = `Name: ${newName}`;
    }

    // Set modified content to display updated name
    setModifiedContent(htmlDoc.documentElement.outerHTML);
  };

  // Function to update template content and state for specific fields
  const updateField = (field, newValue) => {
    // Update the specific field in templateInfo state
    setTemplateInfo({ ...templateInfo, [field]: newValue });

    // Update the displayed content in the template
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(modifiedContent || templateDetails.html, 'text/html');

    // Retrieve the element with class corresponding to the field and update its content
    const fieldElement = htmlDoc.querySelector(`.${field}`);
    if (fieldElement) {
      // Check if it's a link (for the website)
      if (field === 'website') {
        fieldElement.innerHTML = `<a href="${newValue}">${newValue}</a>`;
      } else {
        fieldElement.textContent = `${field.charAt(0).toUpperCase() + field.slice(1)}: ${newValue}`;
      }
    }

    // Set modified content to display updated field
    setModifiedContent(htmlDoc.documentElement.outerHTML);
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%', paddingRight: '20px' }}>
          <h3>Template Editor</h3>
          <label>
            Font Weight:
            <select className='form-control' value={fontStyle.fontWeight} onChange={handleFontWeightChange}>
              <option value="normal">Normal</option>
              <option value="bold">Bold</option>
              <option value="bolder">Bolder</option>
              {/* Add more font-weight options as needed */}
            </select>
          </label> <br />
          <label>
            Font Size:
            <select className='form-control' value={fontStyle.fontSize} onChange={handleFontSizeChange}>
              <option value="14px">14px</option>
              <option value="16px">16px</option>
              <option value="18px">18px</option>
              {/* Add more font-size options as needed */}
            </select>
          </label> <br />
          <label>
            Color:
            <input className='form-control' type="color" value={fontStyle.color} onChange={handleColorChange} />
          </label> <br />
          
          <input
            className='form-control'
            value={templateInfo.userName}
            onChange={handleNameChange}
          />
          <input
            className='form-control'
            value={templateInfo.regards}
            onChange={(e) => updateField('regards', e.target.value)}
          />
          <input
            className='form-control'
            value={templateInfo.email}
            onChange={(e) => updateField('email', e.target.value)}
          />
          <input
            className='form-control'
            value={templateInfo.phone}
            onChange={(e) => updateField('phone', e.target.value)}
          />
          <input
            className='form-control'
            value={templateInfo.website}
            onChange={(e) => updateField('website', e.target.value)}
          />
          {/* <input className='form-control' value={templateInfo.company} onChange={(e) => setTemplateInfo({ ...templateInfo, company: e.target.value })} />
          <input className='form-control' value={templateInfo.email} onChange={(e) => setTemplateInfo({ ...templateInfo, email: e.target.value })} />
          <input className='form-control' value={templateInfo.phone} onChange={(e) => setTemplateInfo({ ...templateInfo, phone: e.target.value })} />
          <input className='form-control' value={templateInfo.website} onChange={(e) => setTemplateInfo({ ...templateInfo, website: e.target.value })} /> */}

          <br /> <br />

          <button className='btn btn-warning' onClick={applyStyles}>Apply Styles</button>
          <button className='btn btn-success' onClick={saveTemplate}>Save Template</button>
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