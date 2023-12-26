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
    <h5>Signature Details</h5>
    <label htmlFor="file-input" style={uploadBtnStyle} className="upload-btn">
      <input
        id="file-input"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      <div style={uploadIconStyle}>
        <i className="fas fa-cloud-upload-alt"></i>
      </div>
      <p className='text-sm' style={uploadIconStyle2}>Profile picture</p>
    </label>

    <input
    placeholder='Name'
    className='form-control mt-4'
    value={templateInfo.name}
    onChange={(e) => updateField('name', e.target.value)}
    // onChange={handleNameChange}
    />
    <input
    placeholder='Position'
    className='form-control mt-4'
    value={templateInfo.position}
    onChange={(e) => updateField('position', e.target.value)}
    />
    <input
    placeholder='Company'
    className='form-control mt-4'
    value={templateInfo.company}
    onChange={(e) => updateField('company', e.target.value)}
    />
    <input
    placeholder="Email"
    className='form-control mt-4'
    value={templateInfo.email}
    onChange={(e) => updateField('email', e.target.value)}
    />
    <input
    placeholder="Phone"
    className='form-control mt-4'
    value={templateInfo.phone}
    onChange={(e) => updateField('phone', e.target.value)}
    />
    <input
    placeholder="Mobile"
    className='form-control mt-4'
    value={templateInfo.mobile}
    onChange={(e) => updateField('mobile', e.target.value)}
    />
    <input
    placeholder="Address"
    className='form-control mt-4'
    value={templateInfo.address}
    onChange={(e) => updateField('address', e.target.value)}
    />
    <input
    placeholder="Website"
    className='form-control mt-4'
    value={templateInfo.website}
    onChange={(e) => updateField('website', e.target.value)}
    />
  </div>
);

export default DetailsSection;
