import React, { useState, useEffect } from 'react';

export default function EmailSignatureBuilder() {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [signature, setSignature] = useState('');

  // Fetch templates from the server
  useEffect(() => {
    async function fetchTemplates() {
      try {
        const response = await fetch('http://localhost:5000/fetchAlltemplates'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setTemplates(data);
        if (data.length > 0) {
          // Set the initial selected template to the first one in the array
          setSelectedTemplate(data[0]);
        }
      } catch (error) {
        console.error('Error fetching templates:', error);
      }
    }

    fetchTemplates();
  }, []);

  // Handle template selection
  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    // Reset the signature when selecting a new template
    setSignature('');
  };

  // Function to update the signature based on user input or selected template
  useEffect(() => {
    // Use selected template if available
    if (selectedTemplate) {
      setSignature(selectedTemplate.content);
    }
  }, [selectedTemplate]);

  // Functions to handle changes in the signature builder
  const handleInputChange = (e) => {
    const newSignature = e.target.value;
    setSignature(newSignature);
  };

  const handleSave = () => {
    // Save the signature
    console.log('Saved Signature:', signature);
    // You can add further functionality here, like saving to a database or local storage
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Template Selection */}
      <div style={{ flex: '1', padding: '20px' }}>
        <h2>Select Template</h2>
        <ul>
          {templates.map((template, index) => (
            <li key={index}>
              <button onClick={() => handleTemplateSelect(template)}>
                {template.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Signature Builder */}
      <div style={{ flex: '1', padding: '20px' }}>
        <h2>Signature Builder</h2>
        <textarea
          rows="10"
          cols="50"
          placeholder="Compose your email signature..."
          value={signature}
          onChange={handleInputChange}
        />
        <button onClick={handleSave}>Save Signature</button>
      </div>

      {/* Display Output */}
      <div style={{ flex: '1', padding: '20px' }}>
        <h2>Preview</h2>
        <div dangerouslySetInnerHTML={{ __html: signature }} />
      </div>
    </div>
  );
}
