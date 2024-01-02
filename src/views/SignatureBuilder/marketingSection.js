import React from 'react';

const MarketingSection = ({ handleBannerChange }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const maxSizeInBytes = 5 * 1024 * 1024; // 5MB in bytes

    if (file && file.size > maxSizeInBytes) {
      // Alert the user that the file exceeds the size limit
      alert('File size exceeds the limit of 5MB. Please choose a smaller file.');
      e.target.value = null; // Reset the input field
      return;
    }

    // Pass the file to the handler function
    handleBannerChange(e);
  };

  return (
    <section>
      <h6 className='fw-bold'>Banner</h6>
      <div className="py-4 px-3 bg-light" style={{ border: "2px solid #065AD8", borderRadius: '0.5rem' }}>
        <label style={{height: '2rem'}} htmlFor="file-input" className="btn w-100 pt-1 btn-sm btn-primary">
          <span><i className="fas fa-plus p-1" style={{border: '1px solid white', borderRadius: "50%"}}></i> </span> 
          Upload Banner
        </label>
        <input
          id="file-input"
          type="file"
          accept=".jpg, .jpeg, .png, .gif"
          onChange={handleFileChange}
          className='d-none'
        />
        <p className='text-center' style={{fontSize: '0.7rem', color: 'grey'}}>Image Size should be 5MB Max</p>
      </div>

      <h6 className='fw-bold mt-3'>Call to Action</h6>
      
      <div className='row px-3'>
        <div className='col-md-6 bg-light py-2 mt-2 fw-bold' style={{borderRadius: '4px', width: '100%', marginRight: '1rem', border: '1px solid rgba(0,0,0,0.1)',}}>
        <span><i className="fa-solid fa-thumbs-up p-1" style={{color: 'red', fontSize: '1.2rem'}}></i> </span> 
          Social buttons
        </div>

        <div className='col-md-6 bg-light py-2 mt-2 fw-bold' style={{borderRadius: '4px', width: '100%', border: '1px solid rgba(0,0,0,0.1)'}}>
        <span><i className="fa-solid fa-magnifying-glass p-1" style={{color: 'blue', fontSize: '1.2rem'}}></i> </span> 
          Post a Job
        </div>

        <div className='col-md-6 bg-light py-2 mt-2 fw-bold' style={{borderRadius: '4px', width: '100%', marginRight: '1rem', border: '1px solid rgba(0,0,0,0.1)'}}>
        <span><i className="fa-solid fa-tag p-1" style={{color: 'green', fontSize: '1.2rem'}}></i> </span> 
          Sales Event
        </div>

        <div className='col-md-6 bg-light py-2 mt-2 fw-bold' style={{borderRadius: '4px', width: '100%', border: '1px solid rgba(0,0,0,0.1)'}}>
        <span><i className="fa-solid fa-computer p-1" style={{color: 'orange', fontSize: '1.2rem'}}></i> </span> 
          Join Webiner
        </div>

        <div className='col-md-6 bg-light py-2 mt-2 fw-bold' style={{borderRadius: '4px', width: '100%', marginRight: '1rem', border: '1px solid rgba(0,0,0,0.1)'}}>
        <span><i className="fa-solid fa-mobile p-1" style={{color: 'purple', fontSize: '1.2rem'}}></i> </span> 
          Download App
        </div>

        <div className='col-md-6 bg-light py-2 mt-2 fw-bold' style={{borderRadius: '4px', width: '100%', border: '1px solid rgba(0,0,0,0.1)'}}>
        <span><i className="fa-solid fa-envelope p-1" style={{color: 'cyan', fontSize: '1.2rem'}}></i> </span> 
          Join Newsletter
        </div>
      </div>

    </section>
  );
};

export default MarketingSection;
