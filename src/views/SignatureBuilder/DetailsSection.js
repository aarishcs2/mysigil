import React from 'react';

const DetailsSection = ({
  handleImageChange,
  // handleNameChange,
  templateInfo,
  updateField,
  uploadBtnStyle,
  uploadIconStyle,
  uploadIconStyle2,
}) => (
  <div>
    <h6 className='fw-bold'>Signature Details</h6>
    <label htmlFor="file-input" style={uploadBtnStyle} className="">
      <input
        id="file-input"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none'}}
      />
      <div style={uploadIconStyle}>
        <i style={{color: '#065AD8'}} className="fas fa-cloud-upload-alt"></i>
      </div>
      <p className='text-sm' style={uploadIconStyle2}>Profile picture</p>
    </label>

    <input
    placeholder='Name'
    className='form-control mt-2'
    value={templateInfo.name}
    onChange={(e) => updateField('name', e.target.value)}
    // onChange={handleNameChange}
    />
    <input
    placeholder='Position'
    className='form-control mt-3'
    value={templateInfo.position}
    onChange={(e) => updateField('position', e.target.value)}
    />
    <input
    placeholder='Company'
    className='form-control mt-3'
    value={templateInfo.company}
    onChange={(e) => updateField('company', e.target.value)}
    />
    <input
    placeholder="Email"
    className='form-control mt-3'
    value={templateInfo.email}
    onChange={(e) => updateField('email', e.target.value)}
    />
    <input
    placeholder="Phone"
    className='form-control mt-3'
    value={templateInfo.phone}
    onChange={(e) => updateField('phone', e.target.value)}
    />
    <input
    placeholder="Mobile"
    className='form-control mt-3'
    value={templateInfo.mobile}
    onChange={(e) => updateField('mobile', e.target.value)}
    />
    <input
    placeholder="Address"
    className='form-control mt-3'
    value={templateInfo.address}
    onChange={(e) => updateField('address', e.target.value)}
    />
    <input
    placeholder="Website"
    className='form-control mt-3'
    value={templateInfo.website}
    onChange={(e) => updateField('website', e.target.value)}
    />

    <p className='fw-bold mt-3' style={{color: '#065AD8'}}> <span style={{border: '1px solid #065AD8', borderRadius: "50%"}}><i className="fas fa-plus p-1"></i></span> Add Text</p>
  </div>
);

export default DetailsSection;
