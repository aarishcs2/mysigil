import React from 'react';

const TemplatesSection = ({ allTemplates }) => (
  <div>
    <div className='row'>
      {allTemplates.map((template, index) => (
        <div key={index} className='col-md-6 mb-3'>
          <div className='' style={{}}> {/* Adjust the width as needed */}
            <div>
              <div
                style={{ 
                  height: '5rem',
                  borderRadius: '0.5rem',
                  backgroundColor: '#065AD81A'
                }} // Adjust font size for smaller content
                // dangerouslySetInnerHTML={{ __html: template.html }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TemplatesSection;
