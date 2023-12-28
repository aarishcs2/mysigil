import React from 'react';

const MarketingSection = ({ handleBannerChange }) => (
  <section>
    <h6 className='fw-bold'>Banner</h6>
    <div className="py-4 px-3 bg-light" style={{ border: "2px solid #065AD8", borderRadius: '0.5rem' }}>

    <label style={{height: '2rem'}} htmlFor="file-input" className="btn w-100 pt-1 btn-sm btn-primary">
        Upload Banner
      </label>
      <input
        id="file-input"
        type="file"
        accept="image/*"
        onChange={(e) => handleBannerChange(e)}
        className='d-none'
      />
      <p className='text-center' style={{fontSize: '0.7rem', color: 'grey'}}>Banner should be at least 100px to 200px</p>

    </div>
  </section>
);

export default MarketingSection;
