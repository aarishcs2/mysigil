import React from 'react';

const MarketingSection = ({ handleBannerChange }) => (
  <section>
    <h5>Banner</h5>
    <div className="py-4 px-3 bg-light" style={{ border: "2px solid #065AD8", borderRadius: '0.5rem' }}>

      <label htmlFor="file-input" className="btn w-100 py-3 btn-sm btn-primary">
        Upload Banner
      </label>
      <input
        id="file-input"
        type="file"
        accept="image/*"
        onChange={(e) => handleBannerChange(e)}
        className='d-none'
      />
    </div>
  </section>
);

export default MarketingSection;
