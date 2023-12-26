import React from 'react';

const TemplatesSection = ({ allTemplates }) => (
  <div>
    <div className='row'>
      {allTemplates.map((template, index) => (
        <div key={index} className='col-md-6'>
          <div className='' style={{}}> {/* Adjust the width as needed */}
            <div>
              <div
                style={{ fontSize: '10px', lineHeight: '0px' }} // Adjust font size for smaller content
                dangerouslySetInnerHTML={{ __html: template.html }}
              />
              <style>
                {`
                  .user-image img {
                    width: 2rem;
                    height: 2rem;
                  }
                `}
              </style>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TemplatesSection;
