import React from 'react';

const ImageSection = ({ handleLogoChange }) => (
  <section>
    <h6 className='fw-bold'>Images</h6>
    <div className="py-4 px-3 bg-light" style={{ border: "2px solid #065AD8", borderRadius: '0.5rem' }}>

      <label style={{height: '2rem'}} htmlFor="file-input" className="btn w-100 pt-1 btn-sm btn-primary">
      <span><i className="fas fa-plus p-1" style={{border: '1px solid white', borderRadius: "50%"}}></i> </span> 
        Upload Photo or Logo
      </label>
      <input
        id="file-input"
        type="file"
        accept="image/*"
        onChange={(e) => handleLogoChange(e)}
        className='d-none'
      />
      <p className='text-center' style={{fontSize: '0.7rem', color: 'grey'}}>Image should be at least 100px to 100px</p>
    </div>
    <p className='fw-bold mt-3' style={{color: '#065AD8'}}> <span style={{border: '1px solid #065AD8', borderRadius: "50%"}}><i className="fas fa-plus p-1"></i></span> Add another</p>

  </section>
);

export default ImageSection;
