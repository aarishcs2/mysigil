import React from 'react';

const ImageSection = ({ handleLogoChange }) => (
  <section>
    <h5>Images</h5>
    <div className="py-4 px-3 bg-light" style={{ border: "2px solid #065AD8", borderRadius: '0.5rem' }}>

      <label htmlFor="file-input" className="btn w-100 py-3 btn-sm btn-primary">
        Upload Photo or Logo
      </label>
      <input
        id="file-input"
        type="file"
        accept="image/*"
        onChange={(e) => handleLogoChange(e)}
        className='d-none'
      />
      <p className='text-center'>Image should be at least 100px to 100px</p>
    </div>
  </section>
);

export default ImageSection;
